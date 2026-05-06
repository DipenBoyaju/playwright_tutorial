import { test, expect } from "@playwright/test";

test('Locators', async ({ page }) => {

  await page.goto("https://demoblaze.com/");

  //click on login button - property
  // await page.locator('id=login2').click(); 
  await page.click('id=login2');

  //provide username
  // await page.locator('#loginusername').fill("pavanol");
  await page.fill('#loginusername', 'pavanol')
  // await page.type('#loginusername', 'pavanol');

  //provide password --using CSS
  await page.fill("input[id='loginpassword']", 'test@123');

  //click on login button --using Xpath
  await page.click("//button[normalize-space()='Log in']");

  //verifying logout link presence
  const logoutlink = await page.locator("//a[normalize-space()='Log out']");

  await expect(logoutlink).toBeVisible();

  await page.close();
})