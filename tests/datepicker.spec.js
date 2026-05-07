import { expect, test } from "@playwright/test";

test("Date Picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");


  const year = "2026";
  const month = "October";
  const day = "16";

  await page.click("#datepicker");

  while (true) {
    const currentYear = await page.locator(".ui-datepicker-year").textContent();
    const currentMonth = await page.locator(".ui-datepicker-month").textContent();
    if (currentYear == year && currentMonth == month) {
      break;
    }

    await page.locator("a[title='Next']").click();
    // await page.locator("a[title='Prev']").click();   if need to go prev years
  }

  const dates = await page.$$("//a[@class='ui-state-default']");

  //date selection using loop
  // for (const dt of dates) {
  //   if (await dt.textContent() == day) {
  //     await dt.click();
  //     break;
  //   }
  // }

  //date selection without loop
  await page.click(`//a[@class='ui-state-default'][text()='${day}']`);

  await page.waitForTimeout(3000);
})