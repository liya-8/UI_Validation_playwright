const { expect } = require("@playwright/test");

exports.LoginPage=
class LoginPage{
   constructor(page) {
    this.page=page;
    this.loginbtn="//button[@id='login']";
    this.usernameInput="//input[@id='userName']";
    this.passwordInput="//input[@id='password']";
    this.loginbutton2="//button[@id='login']";
    this.logoutbtn="//button[@id='submit']";
    this.usernamevalidation="//label[@id='userName-value']"
   }
   // Login to the application
    async login(username,password){
    await this.page.locator(this.loginbtn).click();
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginbutton2).click();
    await this.page.waitForTimeout(3000);
   }
   //validate the UI
    async UIvalidation(username){
    await expect(this.page.locator(this.logoutbtn)).toBeVisible();
    await expect(this.page.locator(this.usernamevalidation)).toHaveText(username);



   }
}