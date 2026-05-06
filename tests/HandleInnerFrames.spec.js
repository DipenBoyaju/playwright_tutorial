import { test } from "@playwright/test";

test("Inner frames", async ({ page }) => {

  await page.goto("https://ui.vision/demo/webtest/frames/");

  const frame = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });

  frame.locator("input[name='mytext3']").fill("Welcome");

  //nested frame
  const childFrames = await frame.childFrames();
  await childFrames[0].locator("//*[@id='i6']/div[3]/div").check();
  // *[@id="i6"]/div[3]/div

  await page.waitForTimeout(5000)
})