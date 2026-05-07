import { expect, test } from "@playwright/test";

let page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  page.goto("https://demoblaze.com/index.html");

  //login
  await page.locator("//a[@id='login2']").click();
  await page.locator("//input[@id='loginusername']").fill("pavanol");
  await page.locator("//input[@id='loginpassword']").fill("test@123");
  await page.locator("button[onclick='logIn()']").click();
})

test.afterEach(async () => {
  await page.locator('#logout2').click();
})

test("Home Page Test", async () => {
  // page.goto("https://demoblaze.com/index.html");

  //login
  // await page.locator("//a[@id='login2']").click();
  // await page.locator("//input[@id='loginusername']").fill("pavanol");
  // await page.locator("//input[@id='loginpassword']").fill("test@123");
  // await page.locator("button[onclick='logIn()']").click();

  //home page
  const product = await page.$$(".hrefch");
  await expect(product).toHaveLength(9);

  //logout
  // await page.locator('#logout2').click();

  await page.waitForTimeout(3000);

})

test("Add Product to cart Test", async () => {
  // page.goto("https://demoblaze.com/index.html");

  //login
  // await page.locator("//a[@id='login2']").click();
  // await page.locator("//input[@id='loginusername']").fill("pavanol");
  // await page.locator("//input[@id='loginpassword']").fill("test@123");
  // await page.locator("button[onclick='logIn()']").click();

  //add to cart
  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();

  (await page.waitForSelector("//a[normalize-space()='Add to cart']"));
  await page.locator("//a[normalize-space()='Add to cart']").click();

  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('Product added.');
    await dialog.accept();
  })

  await page.waitForTimeout(3000)

  //logout
  // await page.locator('#logout2').click();

  await page.waitForTimeout(3000);
})