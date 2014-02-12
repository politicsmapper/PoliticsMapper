var http = require('http');
var program = require('commander');
var deploy = require('./deploy').deploy;

// Parse command line arguments
program
  .command('* <path> [port]')
  .description('deploy given script')
  .action(function(path, options){
    
    // Create server and start it
    http.createServer(function (req, res) {

      parseRequestBody(req, function (body) {

        if (body) {
          // write back something interesting to the user:
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('RECEIVED\n');

          console.log('Deploying %s. Pushed ref: %s', path, body['ref']);
          deploy(path, function (success, error) {
            if (success) {
              console.log('Deployment successful!');
            }
            else {
              console.log('Deployment failed. %s', error);
            }
          });
        }
        else {
          // uh oh!  bad json!
          res.statusCode = 400;
          return res.end('error: could not parse JSON');
        }
      });

    }).listen(program.port, '127.0.0.1');

    console.log('"%s" is being deployed', path);
    console.log('Listening for deploy triggers at http://127.0.0.1:%j/', program.port);

  });

program
  .option('-p, --port <number>', 'Port number', parseInt, 3000)
  .parse(process.argv);

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