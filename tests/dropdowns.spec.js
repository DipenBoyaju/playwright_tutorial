import { expect, test } from "@playwright/test";

test("handle dropdown", async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  //Multiple ways to select option from the dropdown
  // await page.locator("#country").selectOption({ label: 'India' }) //label/visible text
  // await page.locator("#country").selectOption('India');    //visible text 
  // await page.locator("#country").selectOption({ value: 'uk' });    //by using value
  // await page.locator("#country").selectOption({ index: 1 }); ///by using index
  // await page.selectOption("#country", "India");  //by text

  //1) check number of options in dropdown - Approach 1
  // const options = await page.locator("#country option");
  // await expect(options).toHaveCount(10);

  //2) check number of options in dropdown - Approach 2
  // const options = await page.$$("#country option")
  // console.log("number of options", options.length)
  // await expect(options.length).toBe(10);

  // 3) check the presence of particular value in the dropdown  //Approach 1
  // const content = await page.locator("#country").textContent();
  // await expect(content.includes('India')).toBeTruthy();

  // 4) check presence of value in the dropdown - Approach 2 - using loopoing
  // const options = await page.$$("#country option");
  // let status = false;

  // for (const option of options) {
  //   console.log(await option.textContent())
  //   let value = await option.textContent();
  //   if (value.includes("France")) {
  //     status = true;
  //     break;
  //   }
  // }

  // 5) select option from dropdown using loop
  const options = await page.$$("#country option");

  for (const option of options) {
    let value = await option.textContent();
    if (value.includes("France")) {
      await page.selectOption("#country", value);
      break;
    }
  }




  expect(status).toBeTruthy();
})