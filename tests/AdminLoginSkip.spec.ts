import { test, expect } from '@playwright/test';
import { loginTestCodeforAdmin } from '../common.spec';

test("Admin >> Test for Website Login Skip", async ({ browser }) => {
    test.setTimeout(300000)
    await loginTestCodeforAdmin({ browser });
    // Validate that the login was successful
    const page = browser.contexts()[0].pages()[0];
    await page.waitForTimeout(10000);
    // Test Script Start from here

    await page.getByRole('link', { name: 'Agent Management ' }).click();

    await page.waitForTimeout(3000);

    await page.getByRole('link', { name: 'Agency' }).click();

    await page.waitForTimeout(3000);

    await page.locator('.dropdown-toggle').first().click();

    await page.waitForTimeout(3000);

    await page.getByRole('link', { name: 'Edit Agency' }).click();

    await page.waitForTimeout(3000);

    await page.getByPlaceholder('Enter Secondary Phone').click();

    await page.waitForTimeout(3000);

    await page.getByPlaceholder('Enter Secondary Phone').fill('(988) 884-5678');

    await page.waitForTimeout(3000);

    await page.getByPlaceholder('Enter Primary Phone').click();

    await page.waitForTimeout(3000);

    await page.getByPlaceholder('Enter Primary Phone').fill('808-682-7011');

    await page.waitForTimeout(3000);

    await page.getByRole('button', { name: 'Save' }).click();

    await page.waitForTimeout(3000);

});


