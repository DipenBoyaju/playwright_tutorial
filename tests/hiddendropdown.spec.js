import { test, expect } from "@playwright/test";

test('handle hidden dropdown', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.fill('[name="username"]', "admin");
  await page.fill('[name="password"]', "admin123")
  await page.locator("button[type='submit']").click()

  await page.locator("a:has-text('PIM')").click();

  //click on dropdown
  await page.locator("//div[@class='oxd-table-filter']//div[6]//div[1]//div[2]//div[1]//div[1]//div[1]").click();

  //wait for options
  await page.waitForTimeout(3000);

  const options = await page.$$("//div[@role='listbox']//span")

  for (let option of options) {
    const jobTitle = await option.textContent();
    if (jobTitle.includes("Chief Executive Officer")) {
      await option.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});