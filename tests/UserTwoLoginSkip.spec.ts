import { test, expect } from '@playwright/test';
import { loginTestCodeforUserTwo } from '../common.spec';

test("User 1 >> Test for Website Login Skip ", async ({ browser }) => {
  await loginTestCodeforUserTwo({ browser });
  const page = browser.contexts()[0].pages()[0];
  await page.waitForTimeout(2000);

  //Write Validation Here
});

