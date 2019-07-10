'use strict';

const api = require('./service/api');
console.log('./service/api', api);

for(let i = 0; i < 10000000; i++) {} // Wait
console.log(new Date());

const service = require('./service');
console.log('./service.api', service.api);

for(let i = 0; i < 10000000; i++) {} // Wait
console.log(new Date());

require('./directory');

for(let i = 0; i < 10000000; i++) {} // Wait
console.log(new Date());

require('./module_a');

for(let i = 0; i < 10000000; i++) {} // Wait
console.log(new Date());

require('./module_b');

