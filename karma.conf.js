const puppeteer = require('puppeteer');
const webpackConfig = require('./webpack.config');

process.env.CHROME_BIN = puppeteer.executablePath();
process.env.NODE_ENV = 'test';

module.exports = (config) => {
  config.set({
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
    },
    files: [
      'node_modules/vue/dist/vue.js',
      'src/index.js',
      'test/specs/**/*.spec.js',
    ],
    frameworks: ['mocha', 'chai'],
    preprocessors: {
      'src/index.js': ['webpack'],
      'test/specs/**/*.spec.js': ['webpack'],
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
