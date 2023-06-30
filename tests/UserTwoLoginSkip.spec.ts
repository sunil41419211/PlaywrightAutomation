import { test, expect } from '@playwright/test';

test("Code for Website Login Skip", async ({ browser }) => {
  const context = await browser.newContext({
    storageState: "./twoauth.json",
  });
  const page = await context.newPage();
  await page.goto("https://testmovescoutpro.sirva.com/account/login");
  await page.waitForTimeout(5000);
  await page.pause();
});

