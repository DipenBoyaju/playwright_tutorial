import { expect, test } from '@playwright/test';


test('handle check boxes', async ({ page }) => {


  await page.goto('https://testautomationpractice.blogspot.com/');

  //single check box
  await page.locator("//input[@id='monday' and @type='checkbox']").check();

  await expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked();
  await expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();
  await expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeFalsy();

  //multiple checkboxes
  const checkboxLocator = [
    "//input[@id='monday' and @type='checkbox']",
    "//input[@id='sunday' and @type='checkbox']",
    "//input[@id='saturday' and @type='checkbox']"
  ]

  for (const locator of checkboxLocator) {
    await page.locator(locator).check();
  }


  await page.waitForTimeout(5000)

  for (const locator of checkboxLocator) {
    if (await page.locator(locator).isChecked()) {
      await page.locator(locator).uncheck();
    }
  }

  await page.waitForTimeout(5000)


})