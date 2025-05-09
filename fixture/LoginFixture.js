import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

export { expect };

export const test = base.extend({
  loggedUser: async ({ page }, use) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await use(page); // Ya autenticado
  },
});
