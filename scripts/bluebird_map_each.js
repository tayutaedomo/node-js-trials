'use strict';

var Promise = require('bluebird');

//
// Refer: http://bluebirdjs.com/docs/api/promise.map.html
//
Promise.map([1, 2, 3], function(a) {
  console.log('In map,', a);
  return a;
}).then(function(result) {
  console.log('Promise.map result:', result);
});


//
// Refer: http://bluebirdjs.com/docs/api/promise.each.html
//
Promise.each([1, 2, 3], function(value, index, length) {
  console.log('In each,', value, index, length);
}).then(function(result) {
  console.log('Promise.each result:', result);
});

