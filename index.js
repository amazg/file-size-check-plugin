class FileSizeCheck {
  constructor(Option) {
      this.fileSizeLimit = Option.fileSizeLimit || 300 * 1024
  }
  apply(compiler) {
      compiler.hooks.emit.tapPromise('FileSizeCheck', compilation => {
          return new Promise((resolve, reject) => {
              // 遍历所有编译过的资源文件，检查文件是否大于 option内限制
              for (var filename in compilation.assets) {
                  if (compilation.assets[filename].size() > this.fileSizeLimit) {
                      if (!(filename.indexOf('.map') > -1) && filename.indexOf('.gz') > -1) {
                          console.error("\x1b[41m", `\n Error in this file :${filename} -- ${(compilation.assets[filename].size() / 1024).toFixed(1)}KB \n Gzip file size is limited at ${this.fileSizeLimit / 1024}KB.`);
                          return false
                      }
                  }
              }
              resolve()
          })
      })
  }
}

module.exports = FileSizeCheck;
