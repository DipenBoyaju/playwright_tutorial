import { expect, test } from '@playwright/test';

test('soft assertion', async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  //hard assertion  -- if top script fails the other lower remaining scripts wont run and it will terminate the test
  // await expect(page).toHaveTitle('STORE');

  // await expect(page).toHaveURL('https://demoblaze.com/index.html');

  // await expect(page.locator('.navbar-brand')).toBeVisible();

  //soft assertion     if one script fails the other lower remaining scripts wont have proble its runs as normal it wont terminate the process
  await expect.soft(page).toHaveTitle('STORE123');

  await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');

  await expect.soft(page.locator('.navbar-brand')).toBeVisible();

})

