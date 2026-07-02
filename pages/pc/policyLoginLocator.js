export class PolicyLoginLocator {
  constructor(page) {
    this.page = page;
    this.loginButton = page.locator('#Login-LoginScreen-LoginDV-submit');
    this.usernameField = page.locator('#Login-LoginScreen-LoginDV-username').locator('input');
    this.passwordField = page.locator('#Login-LoginScreen-LoginDV-password').locator('input');
  }
}