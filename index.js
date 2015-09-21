'use strict';

let uuid = require('uuid');

function plugin (options) {
  options = (options || {});

  let version = (options.version || 4);

  delete options.version;

  return function (value, name) {
    if (name === 'uuid') {
      return Promise.resolve(uuid['v' + version](options));
    } else {
      return Promise.resolve(value);
    }
  };
}

module.exports = plugin;
