exports.config = {
    framework: 'jasmine',
    seleniumAdress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities:{
        browserName: "firefox"
    },
    onPrepare : function(){
        console.log ('Test is running.Wait to the end');
    }
};
