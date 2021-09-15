const path = require('path');
module.exports = {
  publicPath: './', //使打包后支持子路径部署以及文件形式本地浏览
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack() {
    return {
      entry: {
        app: './src/main.js'
      },
      resolve: {
        alias: {
          packages: path.join(__dirname, 'packages'),
          '@': path.join(__dirname, 'src')
        }
      }
    };
  }
};
