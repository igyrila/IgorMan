exports.config = {
  framework: 'jasmine',
  seleniumAdress: 'http://localhost:4444/wd/hub',
  specs: ['Allure.js'],
  capabilities:{
      browserName: "firefox"
    },
    onPrepare: function () {
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter());
      jasmine.getEnv().afterEach(function(done){
        browser.takeScreenshot().then(function (png) {
          allure.createAttachment('Screenshot', function () {
            return new Buffer(png, 'base64')
          }, 'image/png')();
          done();
        })
      });
    }
  }
