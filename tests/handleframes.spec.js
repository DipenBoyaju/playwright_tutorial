import { test } from "@playwright/test";


test("frames", async ({ page }) => {

  await page.goto("https://ui.vision/demo/webtest/frames/");

  //total frames
  // const allframes = await page.frames();
  // console.log("no frames", allframes.length);

  //1) using name or url //approach 1
  // const var = await page.frame('name');  //if name is available
  // const frame = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' })

  // frame.fill("input[name='mytext1']", "john")

  //1) using frame locator //approach 2
  const inputbox = await page.frameLocator('[src*="frame_1.html"]').locator("input[name='mytext1']");
  await inputbox.fill("Hello yo")

  await page.waitForTimeout(5000);

})