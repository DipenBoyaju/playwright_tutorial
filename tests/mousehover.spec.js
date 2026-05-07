import { test, expect } from "@playwright/test";


test("mouse hover", async ({ page }) => {
  await page.goto('https://demo.opencart.com/');

  const desktop = await page.locator("//a[normalize-space()='Desktops']");
  const mac = await page.locator("//a[normalize-space()='Mac (1)']");

  //mouse hover
  await desktop.hover();
  await mac.hover();

  await page.waitForTimeout(3000)
})