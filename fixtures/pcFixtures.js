import { test as base } from '@playwright/test';
import NavigateToPC from '../utilities/pc/navigateToPC';
import LoginToPC from '../utilities/pc/login';

export const test = base.extend({
  navigateToPC: async ({ page }, use) => {
    const navigateToPC = new NavigateToPC(page);
    // Use the fixture value in the test.
    await use(navigateToPC);
  },
  loginToPC: async ({ page }, use) => {
    const loginToPC = new LoginToPC(page);
    // Use the fixture value in the test.
    await use(loginToPC);
  }
});