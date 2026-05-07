import { test, expect } from '@playwright/test';

test("Mouse right click", async ({ page }) => {

  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

  const button = await page.locator('span:has-text("right click me")');

  //right click action
  await button.click({ button: 'right' });

  await page.waitForTimeout(3000);
})