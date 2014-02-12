var exec = require('child_process').exec;
var dirname = require('path').dirname;

exports.deploy = function (path, deploySuccess) {

  execute('cd ' + dirname(path), function(error, stdout, stderr) {
    // Directory not found
    if (error) {
      deploySuccess(false, error);
    } 
    else {
      execute('forever stop ' + path, function (error, stdout, stderr) {
        // Failed to stop app
        if (error) {
          deploySuccess(false, error);
        }
        else {
          execute('git pull origin master', function (error, stdout, stderr) {
            // Failed to pull
            if (error) {
              execute('forever start ' + path, function (error, stdout, stderr) {
                // Failed to restart
                if (error) {
                  console.log('FAILED TO RESTART APP AFTER FAILED PULL! %s', error);
                }
              });
              deploySuccess(false, error);
            }
            else {
              execute('npm install', function (error, stdout, stderr) {
                // Failed to install dependencies
                if (error) {
                  console.log('npm install failed. Trying to start server anyway %s', error);
                }

                execute('forever start ' + path, function (error, stdout, stderr) {
                  if (error) {
                    console.log('FAILED TO RESTART APP! %s', error);
                    deploySuccess(false, error);
                  }
                  else {
                    deploySuccess(true, null);
                  }
                });
              });
            }
          });
        }
      });
    }
  });
};

String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g, "");
};

function execute(command, output){
  console.log(command);
  exec(command, function(error, stdout, stderr) { 
    console.log(stdout.trim());
    if (error) {
      console.log(stderr.trim());
    }
    output(error, stdout, stderr); 
  });
};