#!/usr/bin/env node
'use strict';

var path = require('path');
var rp = require('request-promise');
var Promise = require('bluebird');
var fs = require('fs');
Promise.promisifyAll(fs);

var url = 'https://s3.amazonaws.com/node-js-sdk-trial.tayutaedomo.net/white2.png';

rp(url).then(function (content) {
  console.log(content);

  var file_path = path.join(__dirname, '../tmp/request_promise_fs_write_white2.png');
  return fs.writeFileAsync(file_path, content, 'binary'); // Created file is broken

// }).then(function (result) {
//   console.log(result);

}).catch(function (err) {
  console.error(err);
});

