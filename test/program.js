'use strict';

let resolve = require('path').resolve;
let test = require('tape');
let jazzon = require('jazzon');
let pkg = require('../package.json');
let plugin = require(resolve(__dirname, '..', pkg.main));

const UUID_MATCH = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;

test('it generates a UUID', assert => {
  let instance = jazzon.create();
  let json = { foo: '@{ uuid }' };

  instance
    .use(plugin())
    .compile(json)
    .then((result) => {
      assert.ok(UUID_MATCH.test(result.foo), 'generated value is a UUID');
      assert.end();
    }, assert.end);
});
