'use strict';

//
// Refer: http://bluebirdjs.com/docs/why-promises.html
//

var Promise = require('bluebird');
var fs = require('fs');
Promise.promisifyAll(fs);

var file_path = __dirname + '/../package.json';
console.log(file_path);

fs.readFile(file_path, function (err, val) {
  if (err) {
    console.error('unable to read file');
  }
  else {
    try {
      val = JSON.parse(val);
      console.log(val);
    }
    catch (e) {
      console.error('invalid json in file');
    }
  }
});


fs.readFileAsync(file_path)
  .then(JSON.parse)
  .then(function (val) {
    console.log(val);
  })
  .catch(SyntaxError, function (e) {
    console.error("invalid json in file");
  })
  .catch(function (e) {
    console.error("unable to read file");
  });

