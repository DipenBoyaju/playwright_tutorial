import { test } from "@playwright/test";

test("login page", async ({ page }) => {

  page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByPlaceholder('Username').fill('Admin');

  await page.getByPlaceholder('Password').fill('admin123')

  await page.getByRole("button", { type: 'submit' }).click();


});