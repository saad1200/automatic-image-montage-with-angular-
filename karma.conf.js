module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],
	
    port: 9876,

    browsers: ['PhantomJS'],

    captureTimeout: 60000,

  });
};
