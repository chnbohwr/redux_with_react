var webpackCfg = require('./webpack.config.test.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: [ 'PhantomJS' ],
    files: [
      './testfiles.js'
    ],
    port: 8080,
    captureTimeout: 60000,
    frameworks: [ 'phantomjs-shim', 'mocha', 'chai', 'sinon', 'sinon-chai'],
    client: {
      mocha: {}
    },
    singleRun: true,
    reporters: [ 'mocha', 'coverage' ],
    preprocessors: {
      './testfiles.js': [ 'webpack', 'sourcemap' ]
    },
    webpack: webpackCfg,
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html' },
        { type: 'text' }
      ]
    }
  });
};