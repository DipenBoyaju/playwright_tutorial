import { test } from '@playwright/test';


test("page screenshot", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");
  await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'Homepage.png' })
})

test("Full page screenshot", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'Fullpage.png', fullPage: true })
})

test.only("Element screenshot", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  await page.locator('//*[@id="tbodyid"]/div[1]/div').screenshot({ path: 'tests/screenshots/' + 'productcard.png' })
})