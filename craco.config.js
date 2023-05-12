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
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
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
          configFile: './.stylelintrc',
          syntax: 'scss',
        }),
      );

      return webpackConfig;
    },
  },
};
