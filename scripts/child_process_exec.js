'use strict';

var child_process = require('child_process');

child_process.exec('echo foo', function(error, stdout, stderr) {
  if (error) {
    console.error('exec error: ', error);
    return;
  }

  console.log('stdout: ', stdout);
  console.log('stderr: ', stderr);
});

