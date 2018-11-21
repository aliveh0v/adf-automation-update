// spec.js

describe('ADF Demo App', function() {

    
 it('Change provider to ECM', function() {
    browser.ignoreSynchronization=true; 
    browser.get('http://qaexercise.envalfresco.com/settings');
    browser.sleep(2000);
    var providers = element(by.id('adf-provider-selector'));
    var applyButton = element(by.css('#host-button'));
    var ecm = element(by.css('#mat-option-1'));
    
    providers.click();
    browser.sleep(1000);
    ecm.click();  
    applyButton.click();
    browser.sleep(1000);
  });
  
  
    it('Login with test username', function(){
    browser.ignoreSynchronization=true;         
    //browser.get('http://qaexercise.envalfresco.com/login');   
        var usernameField = element(by.id('username'));
        var passwordField = element(by.id('password'));
        var signin = element(by.css('#login-button'));
        
        usernameField.sendKeys('guest@example.com');
        browser.sleep(1000); 
        passwordField.sendKeys('Password');
        browser.sleep(1000); 
        signin.click();        
        browser.sleep(2000);
        
     });
     
     it('Access to ../files; Create folder', function(){
       
        browser.ignoreSynchronization=false; //ignore angular js specific
        
        var gitHubId = 'asd';
        browser.get('http://qaexercise.envalfresco.com/files');
        browser.sleep(2000);
        //create folder
        element(by.css('#document-list-container > adf-upload-drag-area > div > adf-toolbar > mat-toolbar > div > button:nth-child(2)')).click();
        element(by.css('#adf-folder-name-input')).sendKeys(gitHubId);
        element(by.css('#adf-folder-create-button > span')).click();
        browser.sleep(2000);
        //create folder
        element(by.css('#document-list-container > adf-upload-drag-area > div > adf-toolbar > mat-toolbar > div > button:nth-child(2)')).click();
        element(by.css('#adf-folder-name-input')).sendKeys(gitHubId);
        element(by.css('#adf-folder-create-button > span')).click();
        browser.sleep(2000);
       
            
    });


});




