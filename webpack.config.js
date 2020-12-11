const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/dist/plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './site',
  output: {
    path: path.resolve(__dirname, './docs'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.md$/,
        use: [
          'vue-loader',
          {
            loader: 'markdown-to-vue-loader',
            options: {
              componentWrapper: '<demo-block></demo-block>',
              tableClass: 'table',
              tableWrapper: '<div class="table-responsive"></div>',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './site/index.html',
    }),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm-bundler',
    },
    extensions: ['.js', '.json', '.vue'],
  },
  devServer: {
    hot: true,
    open: true,
    overlay: true,
  },
};
