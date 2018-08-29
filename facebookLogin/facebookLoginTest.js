
describe('Facebook', function() {
    
    let emailInput = element(by.css('#email'));
    let passwordInput = element(by.css('#pass'));
    let loginButton = element(by.css('#u_0_2'));
    let name = element(by.css('#u_0_a > div:nth-child(1) > div:nth-child(1) > div > a > span > span'));

    it('Login with correct credentials', function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://uk-ua.facebook.com/');
        emailInput.sendKeys('0977104810');
        passwordInput.sendKeys('vanichka12');
        loginButton.click();
        expect(name.getText()).toEqual('Ivan');
    });

    it('Login with incorrect username', function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://uk-ua.facebook.com/');
        emailInput.sendKeys('0977104810');
        passwordInput.sendKeys('vanichka12');
        loginButton.click();
        expect(name.getText()).toEqual('Ivan');
    });
});
