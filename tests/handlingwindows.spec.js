import { test, expect, chromium } from '@playwright/test'

test("handle pages/windows", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const page1 = await context.newPage();
  const page2 = await context.newPage();

  const allPages = context.pages()
  console.log("No of pages created:", allPages.length);

  await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page1).toHaveTitle('OrangeHRM');

  await page2.goto('https://orangehrm.com/');
  await expect(page1).toHaveTitle('OrangeHRM: All in One HR Software for Businesses ');
})

test.only("handle multiple pages/windows", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const page1 = await context.newPage();

  await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page1).toHaveTitle('OrangeHRM');

  const pagePromise = context.waitForEvent('page');
  await page1.locator('a:has-text("OrangeHRM, Inc")').click();

  const newPage = await pagePromise;
  await expect(newPage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses")

  await page1.waitForTimeout(3000);


  // await page2.goto('https://orangehrm.com/');
})