import { CracoConfig } from '@craco/types';
import path from 'path';
import StylelintWebpackPlugin from 'stylelint-webpack-plugin';
import removeClasses from 'postcss-remove-classes';

const config: CracoConfig = {
  style: {
    modules: {
      localIdentName: '[local]-[hash:base64:3]',
    },
    css: {
      loaderOptions: {
        modules: {
          exportLocalsConvention: (className: string) =>
            className.replace(/--/g, '_modifier_').replace(/-/g, '_'),
        },
      },
    },
    // postcss: {
    //   loaderOptions: {
    //     postcssOptions: {
    //       config: path.resolve(__dirname, './postcss.config.js'),
    //     },
    //   },
    // },
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
      webpackConfig.plugins?.push(
        new StylelintWebpackPlugin({
          files: '**/*.{scss,css}',
          configFile: './.stylelintrc',
        }),
      );

      return webpackConfig;
    },
  },
};

// eslint-disable-next-line import/no-unused-modules
export default config;
