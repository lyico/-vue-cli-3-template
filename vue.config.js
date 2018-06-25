const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  devServer: {
    proxy: {
      'http://localhost:8080': {
        target: 'http://172.16.0.211:28080'
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        // '@': resolve('src'),
        com: resolve('src/components'),
        util: resolve('src/utils'),
        api: resolve('src/api'),
        styl: resolve('src/stylus'),
        views: resolve('src/views')
      }
    }
  }
};