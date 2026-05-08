export class LoginPage {

  constructor(page) {
    this.page = page;

    //locators
    this.loginLink = page.locator("#login2");
    this.usernameInput = page.locator('#loginusername');
    this.passwordInput = page.locator('#loginpassword');
    this.loginButton = page.locator('//button[normalize-space()="Log in"]');
  }

  async gotoLoginPage() {
    await this.page.goto('https://demoblaze.com/index.html');
  }

  async login(username, password) {
    await this.loginLink.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}