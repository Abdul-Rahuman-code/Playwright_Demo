import { test, expect } from '@playwright/test';

test('Login Page validation', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator("//input[@name='username']").fill("Admin")
  // await page.getByPlaceholder("Username")
  await page.locator("//input[@name='password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();
  await expect(page.locator("//h6[contains(text(), 'Dashboard')]")).toBeVisible;
  // await page.pause();
  // await page.locator("//div[@id='app']//i[contains(@class,'bi-caret-down-fill')])").click();
  // await page.locator("//button[@type='Logout']").click();
});