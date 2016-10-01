#!/usr/bin/env node
'use strict';

var path = require('path');
var request = require('request');
var Promise = require('bluebird');
var fs = require('fs');
Promise.promisifyAll(fs);

var url = 'https://s3.amazonaws.com/node-js-sdk-trial.tayutaedomo.net/white2.png';
var file_path = path.join(__dirname, '../tmp/request_bluebird_fs_write_white2.png');

// Refer: https://github.com/request/request#streaming
//request(url).pipe(fs.createWriteStream(file_path));

Promise.resolve().then(function() {

  return new Promise(function (resolve, reject) {
    var stream = fs.createWriteStream(file_path);
    stream.on('close', function () {
      resolve('Download ' + url + ' to ' + file_path);
    });

    request
      .get(url)
      .on('error', function (err) {
        reject(err);
      })
      .pipe(stream);
  });

}).then(function(result) {
  console.log(result);

}).catch(function(err) {
  console.error(err);
});

