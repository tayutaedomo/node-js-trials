#!/usr/bin/env node
'use strict';

var rp = require('request-promise');

var url = 'https://s3.amazonaws.com/node-js-sdk-trial.tayutaedomo.net/white2.png';

rp(url)
  .then(function (content) {
    console.log(content);
  })
  .catch(function (err) {
    console.error(err);
  });

