import { test } from '@playwright/test';

test("Upload single file", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //upload single page
  await page.locator('#singleFileInput').setInputFiles("tests/uploadFiles/sample2.pdf");

  await page.waitForTimeout(3000)
})

test.only("Upload Multiple file", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  //upload multiple files
  await page.locator("#multipleFilesInput").setInputFiles([
    "tests/uploadFiles/sample2.pdf",
    "tests/uploadFiles/sample1.pdf"
  ]);


  await page.waitForTimeout(3000)
})