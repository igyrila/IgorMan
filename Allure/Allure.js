describe('Login', function() {
    
    let emailInput = element(by.css('#email'));
    let passwordInput = element(by.css('#userPassword'));
    let loginButton = element(by.css('div.overlay > div > div > div:nth-child(3) > button'));
    let loginStart = element(by.css('login > div > div > div > div > div > button'));
    let administrationBtn = element(by.css('#navbar > ul > li:nth-child(2)'));
    let productNameInput = element(by.css('#product-name'));
    let newProductBtn = element(by.css('div.section__left > div:nth-child(3) > div > div > a > span:nth-child(2)'));
    let openProductList = element(by.css('ss-multiselect-dropdown > div > button'));
    let productSearch = element(by.css('ss-multiselect-dropdown > div > ul > li.dropdown-item.search > div > input'));
    let firstProductInTheList = element(by.css('ss-multiselect-dropdown > div > ul > li:nth-child(3) > a'));
    let saveBtn = element(by.css('#saveProductAdd'));
    let checkProjectByName1 = element(by.css('ul > li.preview-list__item.active.selected > a'));
    let checkProjectByName2 = element(by.css('div.section-title__details-name'));
    let deleteBtn = element(by.css('button.btn.gds-btn-icon.gds-delete-icon'));
    let dangerButton = element(by.css('button.btn.gds-btn.gds-ml-1.gds-btn-danger'));
    function login(email, password){
        loginStart.click();
        browser.sleep(1000);
        browser.wait(emailInput.isDisplayed());
        emailInput.sendKeys(email);
        passwordInput.sendKeys(password);
        loginButton.click();
        browser.sleep(1000);
    }
    function createProduct(productName, productFamily){
        administrationBtn.click();
        browser.sleep(1000);
        newProductBtn.click();
        browser.sleep(1000);
        productNameInput.sendKeys(productName);
        openProductList.click();
        browser.sleep(1000);
        productSearch.sendKeys(productFamily);
        firstProductInTheList.click();
        browser.sleep(1000);
        saveBtn.click();
        browser.sleep(1000);
    }
    function deleteProduct(){
        deleteBtn.click();
        browser.sleep(1000);
        dangerButton.click();
        browser.sleep(1000);
    }

    it('Login with correct credentials', function(){
        browser.waitForAngularEnabled(false);
        browser.get('http://eds_university.eleks.com/login');
        login('igorwalkman@gmail.com', 'JNStuAQ8&');
        browser.sleep(1000);
        createProduct('Igor', 'AQA JS FAMILY');
        expect(checkProjectByName1.getText()).toEqual('Igor');
        expect(checkProjectByName2.getText()).toEqual('Igor');
        deleteProduct();
    });
});
