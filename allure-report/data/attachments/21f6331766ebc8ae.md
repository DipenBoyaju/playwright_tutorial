# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: reporters.spec.js >> Test2
- Location: tests\reporters.spec.js:9:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Your Store"
Received: "Just a moment..."
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    8 × unexpected value "Just a moment..."

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - heading "demo.opencart.com" [level=1] [ref=e5]
      - heading "Performing security verification" [level=2] [ref=e6]
      - paragraph [ref=e7]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e14]:
    - generic [ref=e16]:
      - generic [ref=e18]:
        - text: "Ray ID:"
        - code [ref=e19]: 9f890da43c901699
      - generic [ref=e20]:
        - generic [ref=e21]:
          - text: Performance and Security by
          - link "Cloudflare" [ref=e22] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=j
        - link "Privacy" [ref=e24] [cursor=pointer]:
          - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | 
  4  | test('Test1', async ({ page }) => {
  5  |   await page.goto('https://demoblaze.com/index.html');
  6  |   await expect(page).toHaveTitle('STORE');
  7  | })
  8  | 
  9  | test('Test2', async ({ page }) => {
  10 |   await page.goto('https://demo.opencart.com/');
> 11 |   await expect(page).toHaveTitle('Your Store');
     |                      ^ Error: expect(page).toHaveTitle(expected) failed
  12 | })
  13 | 
  14 | test('Test3', async ({ page }) => {
  15 |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  16 |   await expect(page).toHaveTitle('OrangeHRM');
  17 | })
```