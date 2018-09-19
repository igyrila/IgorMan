describe('Login', function() {
    beforeEach (() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
        browser.get('http://eds_university.eleks.com/login');
    });
    
    
    let emailInput = element(by.css('#email'));
    let passwordInput = element(by.css('#userPassword'));
    let loginButton = element(by.css('div.overlay > div > div > div:nth-child(3) > button'));
    let loginStart = element(by.css('login > div > div > div > div > div > button'));
    let administrationBtn = element(by.css('#navbar > ul > li:nth-child(2)'));
    let productNameInput = element(by.css('#product-name'));
    let newProductBtn = element(by.css('div.section-body__group > div > a'));
    let openProductList = element(by.css('ss-multiselect-dropdown > div > button'));
    let productSearch = element(by.css('ss-multiselect-dropdown > div > ul > li.dropdown-item.search > div > input'));
    let firstProductInTheList = element(by.css('ss-multiselect-dropdown > div > ul > li:nth-child(3) > a'));
    let saveBtn = element(by.css('#saveProductAdd'));
    let checkProjectByName1 = element(by.css('ul > li.preview-list__item.active.selected > a'));
    let checkProjectByName2 = element(by.css('div[class="section-title__details-name"]'));
    let deleteBtn = element(by.css('button.btn.gds-btn-icon.gds-delete-icon'));
    let dangerButton = element(by.css('button.btn.gds-btn.gds-ml-1.gds-btn-danger'));
    let userName = element(by.css("div[class='user-name']"));
    let errorMessage = element(by.css(".toast"));
    let signOutButton = element(by.css(".dropdown-item > strong:nth-child(1)"));
    let emailRequiredLabe = element(by.css("div.col-xs-12:nth-child(1) > div:nth-child(3) > span"));
    let searchProductInputUntouched = element(by.css("input[class='form-control search-input ng-untouched ng-pristine ng-valid']"));
    let firstProductAfterSearch = element(by.css("li[class='preview-list__item']"));
    let editButton = element(by.css("button.btn:nth-child(3)"));
    let saveEditButton = element(by.css("#saveProductEdit"));
    
    function searchAndSelectProject(productName){
        administrationBtn.click();
        browser.wait(ExpectedConditions.visibilityOf(searchProductInputUntouched), 10000);
        searchProductInputUntouched.sendKeys(productName);
        browser.wait(ExpectedConditions.visibilityOf(firstProductAfterSearch), 10000);
        firstProductAfterSearch.click();
        browser.wait(ExpectedConditions.visibilityOf(checkProjectByName2), 10000);
    }

    function editProductName(newProductName){
        editButton.click();
        browser.wait(ExpectedConditions.visibilityOf(productNameInput), 10000);
        productNameInput.clear();
        productNameInput.sendKeys(newProductName);
        saveEditButton.click();
        browser.wait(ExpectedConditions.visibilityOf(checkProjectByName2), 10000);
    }

        function login(email, password){
        browser.wait(ExpectedConditions.visibilityOf(loginStart), 10000);
        loginStart.click();
        browser.wait(emailInput.isDisplayed());
        emailInput.sendKeys(email);
        passwordInput.sendKeys(password);
        loginButton.click();
    }
    function createProduct(productName, productFamily){
        administrationBtn.click();
        browser.wait(ExpectedConditions.visibilityOf(newProductBtn), 10000);
        newProductBtn.click();
        browser.wait(ExpectedConditions.visibilityOf(productNameInput), 10000);
        productNameInput.sendKeys(productName);
        openProductList.click();
        browser.wait(ExpectedConditions.visibilityOf(productSearch), 10000);
        productSearch.sendKeys(productFamily);
        firstProductInTheList.click();
        saveBtn.click();
        browser.wait(ExpectedConditions.visibilityOf(checkProjectByName1), 10000);
    }
    function deleteProduct(productName){
        searchAndSelectProject(productName);
        deleteBtn.click();
        browser.wait(ExpectedConditions.visibilityOf(dangerButton), 10000);
        dangerButton.click();
    }

    function logOut(){
        userName.click();
        browser.wait(signOutButton.isDisplayed());
        signOutButton.click();
        browser.wait(ExpectedConditions.visibilityOf(loginStart), 10000);
    }

    it('Login with correct credentials', function(){
        login('igorwalkman@gmail.com', 'JNStuAQ8&');
        browser.wait(ExpectedConditions.visibilityOf(userName), 10000);
        expect(userName.getText()).toEqual('Igor Manachyn');
        logOut();
    });

    it('Login with incorrect password', function(){
        login('igorwalkman@gmail.com', 'JNStuAQ8');
        browser.wait(ExpectedConditions.visibilityOf(errorMessage), 10000);
        expect(errorMessage.isDisplayed()).toBe(true);
    });

    it('Login with empty pass field', function(){
        login('igorwalkman@gmail.com', '');
        expect(loginButton.isEnabled()).toBe(false);
    });

    it('Login with incorrect username', function(){
        login('igorwalkman1@gmail.com', 'JNStuAQ8&');
        browser.wait(ExpectedConditions.visibilityOf(errorMessage), 10000);
        expect(errorMessage.isDisplayed()).toBe(true);
    });

    it('Login with empty username field', function(){
        login('', 'JNStuAQ8&');
        expect(loginButton.isEnabled()).toBe(false);
        expect(emailRequiredLabe.isDisplayed()).toBe(true);
    });

    it('Create Product', function(){
        login('igorwalkman@gmail.com', 'JNStuAQ8&');
        browser.wait(ExpectedConditions.visibilityOf(userName), 10000);
        browser.wait(ExpectedConditions.visibilityOf(administrationBtn), 10000);
        createProduct("IgorCategory1", "aqa");
        expect(checkProjectByName1.getText()).toEqual('IgorCategory1');
        expect(checkProjectByName2.getText()).toEqual('IgorCategory1');
        expect(errorMessage.isDisplayed()).toBe(true);
        logOut();
    });

    it('Edit Product', function(){
        login('igorwalkman@gmail.com', 'JNStuAQ8&');
        browser.wait(ExpectedConditions.visibilityOf(administrationBtn), 10000);
        searchAndSelectProject("IgorCategory1");
        editProductName("IgorCategory2");
        expect(checkProjectByName1.getText()).toEqual('IgorCategory2');
        expect(checkProjectByName2.getText()).toEqual('IgorCategory2');
        expect(errorMessage.isDisplayed()).toBe(true);
        browser.wait(ExpectedConditions.invisibilityOf(errorMessage), 10000);
        logOut();
    });

    it('Delete Product', function(){
        login('igorwalkman@gmail.com', 'JNStuAQ8&');
        browser.wait(ExpectedConditions.visibilityOf(administrationBtn), 10000);
        deleteProduct("IgorCategory2");
        browser.wait(ExpectedConditions.visibilityOf(errorMessage), 10000);
        expect(errorMessage.isDisplayed()).toBe(true);
        logOut();
    });
});
