import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";


test("pom test", async ({ page }) => {

  //login
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.login('pavanol', 'test@123')
  await page.waitForTimeout(3000)

  //home
  const home = new HomePage(page);
  await home.addProductToCart('Samsung galaxy s6');

  await page.waitForTimeout(3000)
  await home.gotoCart();

  await page.waitForTimeout(3000)

  //cart
  const cart = new CartPage(page);
  await page.waitForTimeout(3000)
  const status = await cart.checkProductInCart('Samsung galaxy s6');

  await expect(await status).toBe(true);
  await page.waitForTimeout(3000)

})