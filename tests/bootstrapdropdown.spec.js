import { expect, test } from "@playwright/test";

test('Bootsrtap dropdown', async ({ page }) => {
  await page.goto(url);

  await page.locator('.multiselect').click()

  // 1
  // const options = await page.locator('ul>li label input');
  // await expect(options).toHaveCount(11)

  // 2)
  // const options = await page.$$('ul>li label input');
  // await expect(options.length).toBe(11);


  // 3) select options from dropdown
  // const options = await page.$$('ul>li label');
  // for (let option of options) {
  //   const value = await option.textContent();

  //   if (value.includes('Angular') || value.includes('Java')) {
  //     await option.click();
  //   }
  // }

  //4) unselect options
  const options = await page.$$('ul>li label');
  for (let option of options) {
    const value = await option.textContent();

    if (value.includes('HTML') || value.includes('CSS')) {
      await option.click();
    }
  }
})