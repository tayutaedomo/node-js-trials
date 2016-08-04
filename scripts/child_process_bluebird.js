'use strict';

//
// Refer: http://stackoverflow.com/questions/30763496/how-to-promisify-nodes-child-process-exec-and-child-process-execfile-functions
//

var Promise = require('bluebird');
//var exec = require('child_process').execFile;
var exec = require('child_process').exec;

function promiseFromChildProcess(child) {
  return new Promise(function (resolve, reject) {
    child.addListener("error", reject);
    child.addListener("exit", resolve);
  });
}

//var child = exec('date');
var child = exec('exit 1');

promiseFromChildProcess(child).then(function (result) {
  console.log('promise complete: ' + result);
}, function (err) {
  console.log('promise rejected: ' + err);
});

child.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});
child.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});
child.on('close', function (code) {
  console.log('closing code: ' + code);
});

