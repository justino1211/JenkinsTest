import { test } from '@playwright/test'

class NavigateToPC {
  constructor(page) {
    this.page = page;
  }
  
  async navigate() {
    await this.page.goto('https://www.saucedemo.com/'); // uses baseURL automatically
  }
}
export default NavigateToPC;