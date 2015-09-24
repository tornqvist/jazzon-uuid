'use strict';

let uuid = require('uuid');

function plugin (options) {
  options = (options || {});

  let version = (options.version || 4);

  delete options.version;

  return function (value, name) {
    switch (name) {
    case 'uuid':
      return uuid['v' + version](options);
    default:
      return value;
    }
  };
}

module.exports = plugin;
