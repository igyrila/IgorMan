exports.config = {
    framework: 'jasmine',
    seleniumAdress: 'http://localhost:4444/wd/hub',
    specs: ['Protractor3.js'],
    capabilities:{
        browserName: "firefox"
    },
    onPrepare : function(){
        console.log ('Testing  login functionality');
    }
};
