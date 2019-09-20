
// b.js
"use strict";

var A = require('./a');

module.exports = function() {
  return {
    stuff: function stuff() {
      console.log('I got the id: ', A.getId());
    }
  };
};

