'use strict';

//
// Refer: http://stackoverflow.com/questions/30763496/how-to-promisify-nodes-child-process-exec-and-child-process-execfile-functions
//

var Promise = require('bluebird');
//var exec = require('child_process').execFile;
var exec = require('child_process').exec;

function execp(cmd, opts) {
  opts || (opts = {});
  return new Promise(function(resolve, reject) {
    var child = exec(cmd, opts, function(err, stdout, stderr) {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout: stdout, stderr: stderr });
      }
    });

    if (opts.stdout) {
      child.stdout.pipe(opts.stdout);
    }

    if (opts.stderr) {
      child.stderr.pipe(opts.stderr);
    }
  });
}

execp('exit 1', {
  shell: '/bin/bash',
  stdout: process.stdout,
  stderr: process.stderr
}).then(function() {
  console.log('done!')
}).catch(function(e) {
  console.error('Catch', e)
});

