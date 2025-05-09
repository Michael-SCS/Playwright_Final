import { test, expect } from '../fixture/LoginFixture.js';
import { InventoryPage } from '../pages/InventoryPage';

test('Flujo E2E de compra exitosa', async ({ loggedUser }) => {
  const inventory = new InventoryPage(loggedUser);

  await expect(loggedUser).toHaveURL(/inventory/);

  await inventory.addFirstNProducts(2);
  await expect(await inventory.getCartCount()).toBe('2');

  await inventory.goToCart();
  await expect(await inventory.getProductCountInCart()).toBe(2);

  await loggedUser.locator('.checkout_button').click();
  await loggedUser.locator('#first-name').fill('Michael');
  await loggedUser.locator('#last-name').fill('Castillo');
  await loggedUser.locator('#postal-code').fill('050003');
  await loggedUser.locator('.btn_primary.cart_button').click();

  await expect(loggedUser.locator('.summary_subtotal_label')).toBeVisible();
  await expect(loggedUser.locator('.summary_tax_label')).toBeVisible();
  await expect(loggedUser.locator('.summary_total_label')).toBeVisible();

  await loggedUser.locator('.btn_action.cart_button').click();
  const message = await loggedUser.locator('.complete-header').innerText();
  expect(message).toBe('Thank you for your order!');
});
