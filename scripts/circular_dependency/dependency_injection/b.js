
// b-3.js: DI
"use strict";

module.exports = function(A) {  // 注目！
  var DI = A;
  return {
    stuff: function stuff() {
      console.log('I got the id: ', DI.getId());
    }
  };
};

