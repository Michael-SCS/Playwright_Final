import { test, expect } from '../fixture/LoginPage.js';

test('Flujo de compra completo en Saucedemo', async ({ sauceLogin }) => {
  // 1. Validar acceso post-login
  await expect(sauceLogin).toHaveURL(/inventory/);
  await expect(sauceLogin.getByText('Products')).toBeVisible();

  // 2. Agregar 2 productos al carrito
  await sauceLogin.getByRole('button', { name: 'Add to cart' }).nth(0).click();
  await sauceLogin.getByRole('button', { name: 'Add to cart' }).nth(1).click();

  // 3. Validar que el ícono del carrito refleje la cantidad
  const cartCount = await sauceLogin.locator('.shopping_cart_badge').innerText();
  expect(cartCount).toBe('2');

  // 4. Ingresar al carrito y verificar los productos
  await sauceLogin.locator('.shopping_cart_link').click();
  const cartItems = await sauceLogin.locator('.cart_item');
  await expect(cartItems).toHaveCount(2);
  
  // Validar precios de los productos (opcional)
  const prices = await sauceLogin.locator('.inventory_item_price').allTextContents();
  prices.forEach(price => expect(price).toMatch(/^\$\d+\.\d{2}$/));

  // 5. Iniciar el proceso de checkout
  await sauceLogin.locator('.checkout_button').click();
  await expect(sauceLogin).toHaveURL(/checkout-step-one/);

  // 6. Completar datos requeridos
  await sauceLogin.locator('#first-name').fill('Michael');
  await sauceLogin.locator('#last-name').fill('Castillo');
  await sauceLogin.locator('#postal-code').fill('050003');
  await sauceLogin.locator('.btn_primary.cart_button').click();

  // 7. Validar resumen de la orden
  const subtotal = await sauceLogin.locator('.summary_subtotal_label').innerText();
  expect(subtotal).toContain('Item total: $');

  const tax = await sauceLogin.locator('.summary_tax_label').innerText();
  expect(tax).toContain('Tax: $');

  const total = await sauceLogin.locator('.summary_total_label').innerText();
  expect(total).toContain('Total: $');

  // 8. Confirmar compra y validar mensaje de éxito
  await sauceLogin.locator('.btn_action.cart_button').click();
  const successMessage = await sauceLogin.locator('.complete-header').innerText();
  expect(successMessage).toBe('Thank you for your order!');
});
