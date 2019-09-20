
// a-3.js: DI
"use strict";

var B = require('./b');

module.exports = (function() {
  var id, bInstance;

  return {
    init: function init(val) {
      id = val;
      bInstance = new B(this);  // 注目！
      return this;
    },

    doStuff: function doStuff() {
      bInstance.stuff();
      return this;
    },

    getId: function getId() {
      return id;
    }
  };
}());

