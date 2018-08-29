exports.config = {
    framework: 'jasmine',
    seleniumAdress: 'http://localhost:4444/wd/hub',
    specs: ['facebookLoginTest.js'],
    capabilities:{
        browserName: "firefox"
    },
    onPrepare : function(){
        console.log ('Testing facebook login functionality');
    }
};
