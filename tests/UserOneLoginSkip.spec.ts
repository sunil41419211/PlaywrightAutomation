import { test, expect } from '@playwright/test';
import { loginTestCodeforUserOne } from '../common.spec';

test("User 1 >> Test for Website Login Skip ", async ({ browser }) => {
  test.setTimeout(300000)
  await loginTestCodeforUserOne({ browser });
  const page = browser.contexts()[0].pages()[0];
  // Test Script Start from here

  await page.waitForTimeout(6000);

  await page.getByRole('link', { name: ' EZ Quote' }).click();

  await page.waitForTimeout(3000);

  await page.locator('input[name="shipperFirstName"]').click();

  await page.locator('input[name="shipperFirstName"]').fill('John');

  await page.locator('input[name="shipperLastName"]').click();

  await page.locator('input[name="shipperLastName"]').fill('Dove');

  await page.locator('#primaryPhoneTypeId span').first().click();

  await page.waitForTimeout(2000);

  await page.getByRole('option', { name: 'Home' }).click();

  await page.locator('#homePhoneInfo').fill('8888888888');

  await page.locator('#shipperEmailAddress').click();

  await page.waitForTimeout(2000);

  await page.locator('#shipperEmailAddress').fill('sunilprajapati@waiin.com');

  await page.waitForTimeout(2000);

  await page.locator('input[name="originPostalCode"]').click();

  await page.waitForTimeout(2000);

  await page.locator('input[name="originPostalCode"]').fill('92011');

  await page.waitForTimeout(2000);

  await page.getByText('92011').first().click();

  await page.waitForTimeout(3000);

  await page.locator('#originStreetAddress').click();

  await page.waitForTimeout(2000);

  await page.locator('#originStreetAddress').fill('TBD');

  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Postal Code').click();

  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Enter Postal Code').fill('77494');

  await page.waitForTimeout(3000);

  await page.getByText('77494').first().click();

  await page.locator('#brand > .ng-select-container > .ng-arrow-wrapper').first().click();

  await page.waitForTimeout(3000);

  await page.getByText('Allied Van Lines').click();

  await page.waitForTimeout(1000);

  await page.locator('#tariff span').first().click();

  await page.waitForTimeout(2000);

  await page.getByRole('option', { name: 'TPG' }).first().click();

  await page.waitForTimeout(1000);

  await page.locator('#weight').click();

  await page.waitForTimeout(2000);

  await page.locator('#weight').fill('3000');

  await page.waitForTimeout(2000);

  await page.locator('#miles').click();

  await page.waitForTimeout(2000);

  await page.locator('#miles').fill('400');

  await page.waitForTimeout(6000);

  // Get the current date
  const currentDate = new Date();
  // Calculate the third upcoming date
  const thirdDate = new Date();
  thirdDate.setDate(currentDate.getDate());

  const month = String(thirdDate.getMonth() + 1).padStart(2, '0');
  const day = String(thirdDate.getDate()).padStart(2, '0');
  const year = thirdDate.getFullYear();
  const formattedDate = month + day + year;
  console.log(formattedDate);

  await page.waitForTimeout(2000);

  await page.locator('(//input[@placeholder="null"])[2]').type(formattedDate);
 
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Calculate Price' }).click();

});

