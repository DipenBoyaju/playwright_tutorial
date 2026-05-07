import { test, expect } from '@playwright/test';

test("Mouse double click", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/dragdrop/");

  const one = await page.locator("//a[@id='one']");
  const bin = await page.locator("#bin");

  //Approach 1
  // await one.hover();
  // await page.mouse.down();

  // await bin.hover();
  // await page.mouse.up();

  //Approach 2
  await one.dragTo(bin);

  await page.waitForTimeout(3000)
})
