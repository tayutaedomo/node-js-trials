'use strict';

//
// Refer: http://bluebirdjs.com/docs/why-promises.html
//

var Promise = require('bluebird');
var needle = require('needle');

Promise.promisifyAll(needle);
var options = {};

var URLs = [
  'http://b.hatena.ne.jp/entry/jsonlite/http://www.hatena.ne.jp/',
  'http://b.hatena.ne.jp/entry/jsonlite/https://www.google.co.jp/'
];

var current = Promise.resolve();

Promise.map(URLs, function (URL) {
  current = current.then(function () {
    return needle.getAsync(URL, options);
  });
  return current;

}).map(function (responseAndBody) {
  //return JSON.parse(responseAndBody[1]);
  return responseAndBody.body;

}).then(function (results) {
  //return processAndSaveAllInDB(results);
  for (var i = 0; i < results.length; i++) {
    console.log(results[i].count, results[i].title);
  }

}).then(function () {
  console.log('All Needle requests saved');

}).catch(function (e) {
  console.error(e);
});

