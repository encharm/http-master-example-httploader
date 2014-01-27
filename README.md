http-master-example-httploader
==============================

This example repository shows how to provide config to http-master from a remote source. Http is used in here but obviously any other asynchronous config fetching method can be used, for example fetching from Redit, MySQL etc.

## About config loaders

Config loader can be any Node.JS module (along with its `node_modules`) which may reside anywhere on the filesystem.

This module should export a function which accepts 3 arguments:
`argv` - object representing http-master arguments, may be used for convenience
`data` - utf8 content of file read by `--config`
`finish` - function with parameters `(err, config)` which the module should call after receiving a request. It may also be called when after initial request the config has changed.

Note: if --watchConfig was passed, this function may be called multiple times due to file passed as `--config` changing
```
module.exports = function(argv, data, finish) {
 // module logic here
}
```

## Using example loader

* Close into `/path/to/http-master-example-httploader` and install dependencies with `npm install`

* Create `config.json` with contents (or use example one from this repo for demo)
```
{
  "url": "https://raw2.github.com/CodeCharmLtd/http-master-example-httploader/master/sample.json"
}
```

`http-master --config config.json --configloader /path/to/http-master-example-httploader --show-rules`
