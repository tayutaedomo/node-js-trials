
// a-1.js: module.exports first
"use strict";

var A = module.exports = {}; // 注目！

var B = require('./b');

var id, bInstance;

A.init = function init(val) {
  id = val;
  bInstance = new B();
  return this;
};

A.doStuff = function doStuff() {
  bInstance.stuff();
  return this;
};

A.getId = function getId() {
  return id;
};
