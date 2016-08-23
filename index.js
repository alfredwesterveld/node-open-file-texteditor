'use strict';

const Promise   = require('bluebird');
const platform  = require('os').platform();
const proc  = require('child_process');

module.exports = function(file) {
  !file && Promise.reject(new Error('param file missing'));

  if(platform === 'darwin') {
    return proc.spawn('open', [file]);
  } else if (platform === 'linux') {
    return proc.spawn('xdg-open', [file]);
  } else if (platform === 'win32') {
    return proc.spawn('start', [file]);
  } else {
    return Promise.reject(new Error('Platform unsupported'));
  }
}
