import { test, expect } from '@playwright/test';
import { loginTestCodeforAdmin } from '../common.spec';

test("Admin >> Test for Website Login Skip", async ({ browser }) => {
    await loginTestCodeforAdmin({ browser });

    // Validate that the login was successful
    const page = browser.contexts()[0].pages()[0];
    
    await page.getByRole('link', { name: 'Agent Management ' }).click();
    await page.getByRole('link', { name: ' Dashboard Administration' }).click();
    await page.getByRole('button', { name: 'Clear Filters' }).click();
    await page.getByRole('link', { name: 'Lead Management' }).click();
    await page.waitForTimeout(5000);
    await page.goto('https://testmovescoutpro.sirva.com/app/main/leads/list');
  
});


