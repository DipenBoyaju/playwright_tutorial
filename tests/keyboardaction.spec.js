import { test, expect } from '@playwright/test';

test("Mouse double click", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  // await page.locator('[name="text1"]').fill("Welcome yo ho!");

  await page.type('[name="text1"]', "Welcome yo ho!");

  // ctrl A
  await page.keyboard.press('Control+A');

  //ctrl C
  await page.keyboard.press('Control+C');

  //tab
  await page.keyboard.down('Tab');
  await page.keyboard.up('Tab');

  //ctrl V
  await page.keyboard.press('Control+V');

  await page.waitForTimeout(3000)
})