import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login sin completar campos', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('', '');
  expect(await login.getErrorMessage()).toContain('Username is required');
});

test('Login con usuario bloqueado', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('locked_out_user', 'secret_sauce');
  expect(await login.getErrorMessage()).toContain('Sorry, this user has been locked out.');
});

test('Login exitoso redirige a inventario', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
});

test('Logout redirige al login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#logout_sidebar_link').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});

test('Login con credenciales incorrectas', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('usuario_falso', '12345');
  expect(await login.getErrorMessage()).toContain('Username and password do not match');
});

test('Acceso directo a /inventory.html sin login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.locator('#login-button')).toBeVisible();
});
