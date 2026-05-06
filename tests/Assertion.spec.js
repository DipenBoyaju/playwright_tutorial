import { expect, test, } from "@playwright/test";

test('Assertion test', async ({ page }) => {

  //open app url
  page.goto("https://demo.nopcommerce.com/register");

  //1)expect(page).toHaveURL()   page has URL

  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  // 2)expect(page).toHaveTitle()   page has title

  await expect(page).toHaveTitle("nopCommerce demo store. Register")

  //3) expect(locator).toBeVisible()   check element is visible or not
  const logoElement = await page.locator('.header-logo');
  await expect(logoElement).toBeVisible();

  //4) expect(locator).toBeEnable()    control is enable
  const searchStoreBox = await page.locator('#small-searchterms');
  await expect(searchStoreBox).toBeEnabled();

  //5) expect(locator).toBeChecked()   radio/checkbox is checked
  const maleRadioButton = await page.locator('#gender-male');
  await maleRadioButton.click(); //select radio btn
  await expect(maleRadioButton).toBeChecked();

  const newsLetterCheckbox = await page.locator('#newsletter');
  await expect(newsLetterCheckbox).toBeChecked();

  //6) expect(locator).toHaveAttribute()  element has attribute
  const regButton = await page.locator('#register-button');
  await expect(regButton).toHaveAttribute('type', 'submit')

  // 7) expect(locator).toHaveText()   pass full text
  await expect(await page.locator(".page-title h1")).toHaveText('Register');

  // 8) expect(locator).toContainText()  //pass partial text
  await expect(await page.locator(".page-title h1")).toContainText('Register');

  //9) expect(locator).toHaveValue(value)   input has a value
  const emailInput = await page.locator("#Email");
  await emailInput.fill('test@gmail.com')
  await expect(emailInput).toHaveValue('test@gmail.com')

  // 10) expect(locator).toHaveCount()
  const options = await page.locator('select[name="DateOfBirthMonth] option');
  await expect(options).toHaveCount(13)



  // so every assertion can also be used with  not
  // like
  // expect().not.toHaveURL()
  // except().not.toHaveCount()
  // just add not
})