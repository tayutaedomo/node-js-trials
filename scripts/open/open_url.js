'use strict';

const open = require('open');


(async () => {

  const url = 'https://google.co.jp';
  const cp = await open(url, { app: 'google chrome', wait: false });
  //const cp = await open(url, { app: 'google chrome', wait: true });

  cp.on('error', err => {
    console.error(err.stack || err);
  });

  cp.on('close', code => {
    console.log('close:code:', code);
  });

})();

