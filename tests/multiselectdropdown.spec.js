import { test, expect } from "@playwright/test";

test("multi select dropdown", async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  //select multpile options from multi select dropdown
  // await page.selectOption("#colors", ['Blue', 'Red', 'Yellow']);

  //Assertions
  //1) check number of options in dropdown
  // const options = await page.locator('#colors option')
  // await expect(options).toHaveCount(5)

  // 2) check number of options in dropdown using js array
  // const options = await page.$$('#colors option');
  // await expect(options.length).toBe(5);

  // 3) check presence of value in the dropdown
  const content = await page.locator('#colors').textContent();
  await expect(content.includes('Blue')).toBeTruthy();
  await expect(content.includes('Black')).toBeFalsy();


  await page.waitForTimeout(5000);
})