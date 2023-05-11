/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  style: {
    modules: {
      localIdentName: '[local]-[hash:base64:3]',
    },
  },
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
    configure: (webpackConfig, { env }) => {
      if (env === 'production') {
        webpackConfig.devtool = false;
      } else {
        webpackConfig.devtool = 'eval-source-map';
      }
      webpackConfig.plugins.push(
        new StyleLintPlugin({
          files: '**/*.{scss,css}',
          configFile: './.stylelintrc.js',
          syntax: 'scss',
        }),
      );

      return webpackConfig;
    },
  },
};
