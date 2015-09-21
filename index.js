'use strict';

let uuid = require('uuid');

function plugin (options) {
  options = (options || {});

  let version = (options.version || 4);

  delete options.version;

  return function (value, name) {
    switch (name) {
    case 'uuid':
      return Promise.resolve(uuid['v' + version](options));
    default:
      return Promise.resolve(value);
    }
  };
}

module.exports = plugin;
