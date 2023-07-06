import { test, expect } from '@playwright/test';
import { loginTestCodeforUserTwo } from '../common.spec';

test("User 1 >> Test for Website Login Skip ", async ({ browser }) => {
  test.setTimeout(20000)
  await loginTestCodeforUserTwo({ browser });
  const page = browser.contexts()[0].pages()[0];
  await page.waitForTimeout(6000);
  // Test Script Start from here

  await page.getByRole('link', { name: 'Agent Management ' }).click();

  await page.waitForTimeout(3000);

  await page.getByRole('link', { name: 'Local Carrier' }).click();

  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Create' }).click();

  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Local Carrier Name').click();

  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Local Carrier Name').fill('PlaywrightTest');

  await page.waitForTimeout(4000);

  await page.locator('#agencyName span').first().click();

  await page.waitForTimeout(3000);

  await page.getByText('2222222-NAVL Training Agency-Chicago').click();

  await page.waitForTimeout(4000);

  await page.getByPlaceholder('Enter Address').click();

  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Address').type('1122');

  await page.waitForTimeout(2000);

  await page.locator('.pac-icon').first().click();

  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Email Address').click();

  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Email Address').fill('suneel.prajapati@waiin.com');

  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Contact').fill('8543072841');

  await page.waitForTimeout(2000);

  await page.locator('input[placeholder="Enter Primary Phone"]').click();

  await page.waitForTimeout(2000);

  await page.locator('input[placeholder="Enter Primary Phone"]').type('8543072841');

  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Save' }).click();

  //Write Validation Here
});

