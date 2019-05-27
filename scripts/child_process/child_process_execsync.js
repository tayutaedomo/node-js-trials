'use strict';

var child_process = require('child_process');

console.log(child_process.execSync('echo foo'));
console.log(child_process.execSync('echo bar'));

