'use strict';

const Promise = require('bluebird');
const editor = Promise.promisify(require('./../'));

editor('./../package.json').spread((stdout, stderror) => {
  console.log(stdout, stderr)
}).catch(e => console.log(e));
