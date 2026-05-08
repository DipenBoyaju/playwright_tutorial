import { expect, test } from "@playwright/test";

//only    //Run only focused tests in the entire project.
test.only("test1", async ({ page }) => {
  console.log('this is test1')
})

//skip   // This test is not run
test("test2", async ({ page }) => {
  console.log('this is test2')
})

test("test3", async ({ page, browserName }) => {
  console.log('this is test3');
  if (browserName === 'chromium') {
    test.skip()
  }
})

//fixme  
test("test4", async ({ page }) => {
  test.fixme()
  console.log('this is test4')
})

//fail
test("test5", async ({ page }) => {
  test.fail() //exp
  console.log('this is test5')
  expect(1).toBe(2);  //if both exp & actual is failed then test pass
})

test("test6", async ({ page, browserName }) => {
  console.log('this is test6');
  if (browserName === 'chromium') {
    test.fail();
  }
})

//slow     ////increase the initial timeout by 3x
test("test7", async ({ page }) => {
  test.slow();
  console.log('this is test7');
  await page.goto('https://demoblaze.com/index.html');

})