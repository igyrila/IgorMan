describe('Protractor Demo App', function(){
    it('should have title', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});

