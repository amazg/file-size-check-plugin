# file-size-check-plugin

A Webpack plugin to check file size after build by webpack.

## Installation:

Using npm:
```shell
$ npm install --save-dev file-size-check-plugin
```

## Example:

``` javascript
var FileSizeCheckPlugin = require('file-size-check-plugin');
webpackConfig = {
  plugins: [
    new CompressionWebpackPlugin({
        test: /\.(js|css)(\?.*)?$/i
    }),
    new CheckFileSizeLimit({ fileSizeLimit: 500 * 1024 })
  ]
};
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)

