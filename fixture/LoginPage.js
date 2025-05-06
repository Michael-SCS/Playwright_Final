import { test as base, expect } from '@playwright/test';

export { expect };

export const test = base.extend({
  sauceLogin: async ({ page }, use) => {
    // Paso 1: Ir a la página
    await page.goto('https://www.saucedemo.com/');

    // Paso 2: Hacer login
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Paso 4: Entregar el contexto ya logueado como `sauceLogin`
    await use(page);
  },
});
