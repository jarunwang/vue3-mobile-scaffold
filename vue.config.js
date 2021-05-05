module.exports = {
  lintOnSave: false,
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: '*',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.entry = {
      'babel-polyfill': 'babel-polyfill',
      app: './src/main.ts',
    };
  },
};


// .env.development
VUE_APP_BASE_API = '/api';
