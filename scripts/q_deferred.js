'use strict';

//
// Refer: http://documentup.com/kriskowal/q/#the-beginning
//

var Q = require('q');
var fs = require('fs');

var file_path = __dirname + '/../package.json';

function q_read_file() {
  var deferred = Q.defer();

  fs.readFile(file_path, 'utf-8', function (error, text) {
    if (error) {
      deferred.reject(new Error(error));
    } else {
      deferred.resolve(text);
    }
  });

  return deferred.promise;
}

q_read_file()
  .then(function (value) {
    console.log(value);
  }, function (reason) {
    console.error(reason);
  });

