import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";


test("pom test", async ({ page }) => {

  //login
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.login('pavanol', 'test@123')
  await page.waitForTimeout(3000)
})