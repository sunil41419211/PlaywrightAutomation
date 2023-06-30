import { test, expect } from '@playwright/test';
import { loginTestCodeforAdmin } from '../common.spec';

test("Admin >> Test for Website Login Skip", async ({ browser }) => {
    await loginTestCodeforAdmin({ browser });
  
    
    // Validate that the login was successful
    const page = browser.contexts()[0].pages()[0];
    await page.pause();
});


