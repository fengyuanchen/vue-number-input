const ip = require('ip');
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package');

const now = new Date();
const name = pkg.name.split('/').reverse()[0];
const banner = `/*!
 * ${name} v${pkg.version}
 * https://github.com/${pkg.repository}
 *
 * Copyright (c) ${now.getFullYear()} ${pkg.author.name}
 * Released under the ${pkg.license} license
 *
 * Date: ${now.toISOString()}
 */`;

module.exports = (env = {
  docs: false,
  production: false,
}) => {
  const common = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.md$/,
          use: [
            'vue-loader',
            {
              loader: 'markdown-to-vue-loader',
              options: {
                componentWrapper: '<demo></demo>',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm',
      },
      extensions: ['.js', '.json', '.vue'],
    },
  };

  if (env.docs) {
    return webpackMerge(common, {
      entry: './src/docs',
      output: {
        path: path.resolve(__dirname, './docs'),
        filename: 'app.js',
      },
      plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/docs/index.html',
        }),
      ],
      devServer: {
        host: ip.address(),
        hot: true,
        open: true,
        overlay: true,
      },
    });
  }

  return ['commonjs2', 'umd'].map(target => (webpackMerge(common, {
    entry: './src',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: [
        name,
        target === 'commonjs2' ? 'common' : '',
        'js',
      ].join('.'),
      library: name.replace(/\b-?(\w)/g, (...args) => args[1].toUpperCase()),
      libraryTarget: target,
    },
    plugins: [
      new webpack.BannerPlugin({
        banner,
        raw: true,
      }),
    ],
    externals: {
      vue: {
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue',
        root: 'Vue',
      },
    },
  })));
};
