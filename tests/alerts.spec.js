import { expect, test } from '@playwright/test';

test.skip('ALert', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  //Enabling alert handling // Dialog window handler
  page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();
  });

  await page.click('button:has-text("Simple Alert")');
});

test.skip("Confirmation Dialog", async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on("dialog", async dialog => {
    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain("Press a button");
    await dialog.accept(); //close by using OK button
    // await dialog.dismiss();   //close by using cancel button
  })

  await page.click('button:has-text("Confirmation Alert")');
  expect(await page.locator("//p[@id='demo']")).toHaveText("You pressed OK!")

  await page.waitForTimeout(5000);
})

test("", async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on("dialog", async dialog => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");

    await dialog.accept('John');
    // await dialog.dismiss();
  })

  await page.click('button:has-text("Prompt Alert")');
  expect(await page.locator("//p[@id='demo']")).toHaveText("Hello John! How are you today?");

  await page.waitForTimeout(5000);
})