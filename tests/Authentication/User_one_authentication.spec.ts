import { test, expect } from '@playwright/test';
import * as fs from 'fs';

const filePath = 'oneauth.json';

test('AdminAuth Json File  @Authentication', async ({ page }) => {
    test.setTimeout(300000);
    // Assuming you have the JSON data you want to store in a variable called jsonData
    const jsonData = { key: 'value' };

    // Convert the JSON object to a string
    const jsonString = JSON.stringify(jsonData);

    // Write the JSON string to the file
    fs.writeFileSync(filePath, jsonString);

    // You can now use the file 'twoauth.json' to store the JSON data

    // Perform your test actions
    await page.goto("https://testmovescoutpro.sirva.com/account/login");

    await page.getByPlaceholder('User name or email *').click();

    await page.getByPlaceholder('User name or email *').fill('Q2222222519');

    await page.getByPlaceholder('Password *').click();

    await page.getByPlaceholder('Password *').fill('123qwe');

    await page.getByRole('button', { name: 'Log in' }).click();
});
