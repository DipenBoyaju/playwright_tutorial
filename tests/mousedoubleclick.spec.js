import { test, expect } from '@playwright/test';

test("Mouse double click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("button[ondblclick='myFunction1()']").dblclick();

  const value = await page.locator("//input[@id='field2']");

  await expect(value).toHaveValue("Hello World!")

  await page.waitForTimeout(3000)
})