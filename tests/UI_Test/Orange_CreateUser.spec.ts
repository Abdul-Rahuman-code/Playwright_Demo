import { test, expect } from '@playwright/test';
 
test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.url().includes("/viewSystemUsers");
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");
  await expect(page.getByRole('heading', { name: 'System Users' })).toHaveText('System Users');
  await page.getByRole('button', { name: ' Add' }).click();
  await page.url().includes("/saveSystemUser");
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser");
  await expect(page.getByRole('heading', { name: 'Add User' })).toHaveText('Add User');
  await page.getByText('-- Select --').first().click();
  await page.getByRole('listbox').getByText('Admin').click();
  await page.getByText('-- Select --').click();
  await page.getByText('Enabled').click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('a');
  await page.waitForTimeout(5000);
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  // await page.getByText('bharath  M J').click();
  const d = new Date();
  let ms = d.getMilliseconds();
  const UserName = 'Rahuman' + ms;
  await page.getByRole('textbox').nth(2).fill(UserName);
  await page.getByRole('textbox').nth(3).fill('admin123');
  await page.getByRole('textbox').nth(4).fill('admin123');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(10000);
//   await expect(page.locator(`text=${UserName}`)).toHaveText(UserName);
// await expect(page.locator("//div[text()='"+UserName+"']")).toHaveText(UserName); 
  await page.waitForSelector(".orangehrm-container")
  await expect(page.locator(".orangehrm-container")).toContainText(UserName)
  await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});