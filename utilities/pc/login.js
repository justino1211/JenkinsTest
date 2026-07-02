import { PolicyLoginLocator } from '../../pages/pc/policyLoginLocator';

export default class LoginToPC {
  constructor(page) {
    this.page = page;
    this.policyLoginLocator = new PolicyLoginLocator(page);
  }

  async LoginToPCSteps() {
    await this.policyLoginLocator.usernameField.fill("su");
    await this.policyLoginLocator.passwordField.fill("gw");
    await this.policyLoginLocator.loginButton.click();
  }
}