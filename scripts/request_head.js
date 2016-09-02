'use strict';

var request = require('request');

var url = 'https://s3.amazonaws.com/node-js-sdk-trial.tayutaedomo.net/white2.png';
request.head(url, function(err, response) {
  console.error('In presence case,', err);
  console.log('In presence case,', response.statusCode);
});

var url = 'https://s3.amazonaws.com/node-js-sdk-trial.tayutaedomo.net/white2a.png';
request.head(url, function(err, response) {
  console.error('In empty case,', err);
  console.log('In empty case,', response.statusCode);
});

