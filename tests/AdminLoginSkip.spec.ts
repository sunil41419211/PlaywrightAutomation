import { test, expect } from '@playwright/test';
import { loginTestCodeforAdmin } from '../common.spec';

test("Admin >> Test for Website Login Skip", async ({ browser }) => {
    test.setTimeout(20000)
    await loginTestCodeforAdmin({ browser });
    // Validate that the login was successful
    const page = browser.contexts()[0].pages()[0];
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Calendar' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Lead Management' }).click();
  

});


