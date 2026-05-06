import { test, expect } from "@playwright/test";


test('handle Input Box', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');


  await expect(page.locator("//input[@id='name']")).toBeVisible();   //check is visible or not
  await expect(page.locator("//input[@id='name']")).toBeEmpty();  // check is empty or not
  await expect(page.locator("//input[@id='name']")).toBeEditable();  //check is editable or not
  await expect(page.locator("//input[@id='name']")).toBeEnabled();   ///check if is enabled 


  // await page.locator("").fill("John Doe")
  await page.fill("//input[@id='name']", "John Doe");



  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('johndoe@gmail.com');

  await page.getByRole('textbox', { name: /Enter Phone/i }).fill("1234567888");

  await page.waitForTimeout(5000);

});