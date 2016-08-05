'use strict';

//
// Refer: http://documentup.com/kriskowal/q/#the-beginning
//

var Q = require('q');

function promiseMeSomething() {
  return Q.fcall(function () {
    return 10;
  });
}

promiseMeSomething()
  .then(function (value) {
    console.log(value);
  }, function (reason) {
    console.error(reason);
  });


function promiseMeSomething_2() {
  return Q.fcall(function () {
    throw new Error("Can't do it");
  });
}

promiseMeSomething_2()
  .then(function (value) {
    console.log(value);
  }, function (reason) {
    console.error(reason);
  });

