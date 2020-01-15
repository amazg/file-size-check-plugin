# file-size-check-plugin

A Webpack plugin to check file size after build by webpack and gzip compress.

## Installation:

Using npm:
```shell
$ npm install --save-dev file-size-check-plugin
```

## Example:

⚠️ Need to use [compression-webpack-plugin](https://github.com/webpack-contrib/compression-webpack-plugin)

``` javascript
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const FileSizeCheck = require('file-size-check-plugin');

webpackConfig = {
  plugins: [
    new CompressionWebpackPlugin({
        test: /\.(js|css)(\?.*)?$/i
    }),
    new FileSizeCheck({ fileSizeLimit: 500 * 1024 })
  ]
};
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)

