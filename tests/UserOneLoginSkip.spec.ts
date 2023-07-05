import { test, expect } from '@playwright/test';
import { loginTestCodeforUserOne } from '../common.spec';

test("User 1 >> Test for Website Login Skip ", async ({ browser }) => {
  await loginTestCodeforUserOne({ browser });
  const page = browser.contexts()[0].pages()[0];
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Calendar' }).click();
  await page.getByRole('link', { name: 'Candar' }).click();
  await page.waitForTimeout(2000);


  //Write Validation Here
});

