const puppeteer = require('puppeteer');
const webpackConfig = require('../webpack.config');

process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = (config) => {
  config.set({
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
    },
    files: [
      '../node_modules/vue/dist/vue.js',
      './index.js',
      './specs/**/*.spec.js',
    ],
    frameworks: ['mocha', 'chai'],
    preprocessors: {
      './index.js': ['webpack'],
      './specs/**/*.spec.js': ['webpack'],
    },
    reporters: ['mocha', 'coverage-istanbul'],
    singleRun: true,
    webpack: {
      mode: 'production',
      module: webpackConfig.module,
      plugins: webpackConfig.plugins,
      resolve: webpackConfig.resolve,
    },
  });
};
