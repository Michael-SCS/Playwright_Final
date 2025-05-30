export class LoginPage {
    constructor(page) {
      this.page = page;
      this.username = page.locator('#user-name');
      this.password = page.locator('#password');
      this.loginButton = page.locator('#login-button');
      this.errorMessage = page.locator('[data-test="error"]');
    }
  
    async goto() {
      await this.page.goto('https://www.saucedemo.com/');
    }
  
    async login(username, password) {
      await this.username.fill(username);
      await this.password.fill(password);
      await this.loginButton.click();
    }
  
    async getErrorMessage() {
      return await this.errorMessage.innerText();
    }
  }
  