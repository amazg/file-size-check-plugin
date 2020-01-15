# file-size-check-plugin
![npm](https://img.shields.io/npm/dw/file-size-check-plugin?label=npm%20install)

A Webpack plugin to check file (js|css) size after build by webpack and gzip compress.

## Installation:

Using npm:
```shell
$ npm install --save-dev file-size-check-plugin
```

## Example:

⚠️ Need to use [compression-webpack-plugin](https://github.com/webpack-contrib/compression-webpack-plugin), Because file-size-check-plugin check the file end with .gz 
⚠️ If you don't set the 'fileSizeLimit' params, it will be set at 500 * 1024 by default.

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

