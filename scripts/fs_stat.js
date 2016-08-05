'use strict';

var Promise = require('bluebird');
var fs = require('fs');
Promise.promisifyAll(fs);

//var file_path = __dirname + '/../package.json';
var file_path = '';

//
// https://nodejs.org/dist/latest-v4.x/docs/api/fs.html#fs_fs_stat_path_callback
//
fs.statAsync(file_path).then(function(stats) {
  console.log(stats);

}).catch(function(err) {
  console.error(err);
});

