const puppeteer = require('puppeteer');
const webpackConfig = require('../webpack.config');

process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = (config) => {
  config.set({
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    files: [
      './index.js',
    ],
    frameworks: ['mocha', 'chai'],
    preprocessors: {
      './index.js': ['webpack'],
    },
    reporters: ['mocha'],
    singleRun: true,
    webpack: {
      mode: 'production',
      module: webpackConfig.module,
      plugins: webpackConfig.plugins,
      resolve: webpackConfig.resolve,
    },
  });
};
