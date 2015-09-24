# jazzon-uuid

A plugin for the [jazzon utility](https://www.npmjs.com/package/jazzon) for generate a UUID in place.

## Usage

Supply the plugin to the `jazzon.use` method just like any other plugin.

```javascript
let jazzon = require('jazzon');
let uuid = require('jazzon-uuid');
let json = {
  id: "@{ uuid }"
};

jazzon
  .use(uuid())
  .compile(json)
  .then((result) {
    console.log(result); // => {"id": "6c84fb90-12c4-11e1-840d-7b25c5ee775a"}
  });
```

## Options

Options can be supplied to the plugin to alter its' output. All options but the `version` key is forwarded to [uuid](https://github.com/defunctzombie/node-uuid).

```javascript
jazzon.use(uuid({
  node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
  clockseq: 0x1234,
  msecs: new Date('2011-11-01').getTime(),
  nsecs: 5678
}));
```

Use the option `version` to specify which version of UUID to use. Default is v4.
