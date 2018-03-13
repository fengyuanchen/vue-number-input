const puppeteer = require('puppeteer');
const webpackConfig = require('../webpack.config')({
  docs: true,
});

process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = (config) => {
  config.set({
    autoWatch: false,
    browsers: ['ChromeHeadlessWithoutSandbox'],
    customLaunchers: {
      ChromeHeadlessWithoutSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
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
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
    },
  });
};
