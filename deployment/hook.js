var http = require('http');
var program = require('commander');
var deploy = require('./deploy').deploy;

// Parse command line arguments
program
  .command('* <path>')
  .description('deploy given script')
  .action(function(path, options){
    
    // Deploy initially
    if (program.initial) {
      performDeploy(path);
    }

    // Create server and start it
    var server = http.createServer(function (req, res) {

      parseRequestBody(req, function (body) {

        if (body) {
          // write back something interesting to the user:
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('RECEIVED\n');

          console.log('Deploying %s. Pushed ref: %s', path, body['ref']);
          performDeploy(path);
        }
        else {
          // uh oh!  bad json!
          res.statusCode = 400;
          return res.end('error: could not parse JSON');
        }
      });

    }).listen(program.port);

    // Catch exception when port is already in use
    server.on('error', function (e) {
      if (e.code == 'EADDRINUSE') {
        console.log('Port is already in use.');
      }
      else {
        throw e;
      }
    });

    console.log('"%s" is being deployed', path);
    console.log('Start listening for deploy triggers at http://127.0.0.1:%j/', program.port);

  });

program
  .option('-p, --port <number>', 'Port number', parseInt, 3000)
  .option('-i, --initial', 'Pull changes and start server initially')
  .parse(process.argv);

function performDeploy(path) {
  deploy(path, function (success, error) {
    if (success) {
      console.log('Deployment successful!');
    }
    else {
      console.log('Deployment failed. %s', error);
    }
  });
}

function parseRequestBody(request, callback) {
  var body = '';
  request.setEncoding('utf8');

  request.on('data', function (chunk) {
    body += chunk;
  })

  request.on('end', function () {
    try {
      var data = JSON.parse(body);
    } catch (er) {
      callback(null);
    }
    callback(data);
  });
}

