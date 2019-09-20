
// a-2.js: lazy require
"use strict";

module.exports = (function() {
  var id, bInstance;

  return {
    init: function init(val) {
      id = val;
      bInstance = (new require('./b'))();  // 注目！
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

