import { test, expect } from '@playwright/test';

test('Login Page validation', async ({ page }) => {
  await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
  await page.getByRole('textbox', { name: 'Username:' }).fill('Tester');
  await page.getByRole('textbox', { name: 'Password:' }).fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('h1')).toContainText('Web Orders');
  await expect(page.locator('h2')).toContainText('List of All Orders');
  await page.getByRole('link', { name: 'Logout' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
});