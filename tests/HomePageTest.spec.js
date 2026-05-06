import { expect, test } from '@playwright/test';

test('Home Page', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  const pageTitle = await page.title()
  console.log('page title is', pageTitle);

  await expect(page).toHaveTitle("STORE");

  const pageURL = await page.url();
  console.log("page url", pageURL);

  await expect(page).toHaveURL("https://demoblaze.com/");

  await page.close();
});