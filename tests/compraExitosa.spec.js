import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Flujo E2E de compra exitosa', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);

  await inventory.addFirstNProducts(2);
  await expect(await inventory.getCartCount()).toBe('2');

  await inventory.goToCart();
  await expect(await inventory.getProductCountInCart()).toBe(2);

  await page.locator('.checkout_button').click();
  await page.locator('#first-name').fill('Michael');
  await page.locator('#last-name').fill('Castillo');
  await page.locator('#postal-code').fill('050003');
  await page.locator('.btn_primary.cart_button').click();

  await expect(page.locator('.summary_subtotal_label')).toBeVisible();
  await expect(page.locator('.summary_tax_label')).toBeVisible();
  await expect(page.locator('.summary_total_label')).toBeVisible();

  await page.locator('.btn_action.cart_button').click();
  const message = await page.locator('.complete-header').innerText();
  expect(message).toBe('Thank you for your order!');
});
