import { test, expect } from '@playwright/test';


test('Auto suggest dropdown', async ({ page }) => {

  await page.goto('https://www.redbus.in/');
  await page.locator("#srcinput").fill('Delhi');
  await page.waitForSelector("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]");

  const options = await page.$$("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]");
  for (option of options) {
    const value = await option.textContent();

    if (value.includes('Anand Vihar')) {
      await option.click();
    }
  }

  await page.waitForTimeout(5000);
});