import { test, expect } from "@playwright/test";

test('Built-inLocators', async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


  const logo = await page.getByAltText('company-branding')

  await expect(logo).toBeVisible();

  // await page.fill("", "Admin");
  await page.getByPlaceholder('Username').fill("Admin");

  // await page.fill("", "admin123");
  await page.getByPlaceholder('Password').fill("admin123");

  page.getByRole('button', { type: 'submit' }).click();
  // await page.close();

  await expect(await page.getByText('name')).toBeVisible();
})