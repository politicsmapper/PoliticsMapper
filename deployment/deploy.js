var http = require('http');
var program = require('commander');
var exec = require('child_process').exec;

// Parse command line arguments
program
  .command('* <path>')
  .description('deploy given script')
  .option('-p, --port [number]', 'Port number. Default 3000', 3000)
  .action(function(path, arguments){
    
    // Create server and start it
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('RECEIVED\n');

      console.log(req);
    }).listen(arguments.port, '127.0.0.1');

    console.log('"%s" is being deployed', path);
    console.log('Listening for deploy triggers at http://127.0.0.1:%d/', arguments.port);

  });

program.parse(process.argv);

/*execute('ls', function (output){
    console.log(output);
})*/

function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};