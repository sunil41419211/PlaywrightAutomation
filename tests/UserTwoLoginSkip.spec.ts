import { test, expect } from '@playwright/test';
import { loginTestCodeforUserTwo } from '../common.spec';

test("User 2 >> Test for Website Login Skip ", async ({ browser }) => {
  test.setTimeout(450000)
  await loginTestCodeforUserTwo({ browser });
  const page = browser.contexts()[0].pages()[0];
  await page.waitForTimeout(10000);
  // Test Script Start from here


  await page.locator('//span[text()=" Lead Management "]').click();

  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: 'Agent Management ' }).click();
  await page.waitForTimeout(5000);

  await page.getByRole('link', { name: ' Custom Tariff' }).click();
  await page.waitForTimeout(5000);

  await page.getByRole('columnheader', { name: 'Custom Tariff Name Sortable ' }).getByRole('link', { name: '' }).click();
  await page.getByText('Filter').nth(1).click();
  await page.getByRole('textbox').nth(2).fill('jon');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('jon snow');
  await page.locator('kendo-grid-filter-menu-container').getByRole('button', { name: 'Filter' }).click();
  await page.locator('.dropdown-toggle').first().click();
  await page.getByRole('button', { name: ' Edit Custom Tariff' }).click();
  await page.waitForTimeout(5000);

  await page.getByRole('tab', { name: 'Transportation ' }).click();
  await page.waitForTimeout(5000);

  await page.getByRole('button', { name: 'Create' }).click();
  await page.waitForTimeout(5000);

  await page.locator('#type div').first().click();
  await page.getByRole('option', { name: 'Break Point Matrix' }).click();
  await page.locator('#customTariffTabs #name').click();
  var name = (Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10000));
  await page.locator('#customTariffTabs #name').fill('custom test' + name.toString());
  await page.locator('#customTariffTabs span').filter({ hasText: 'No' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('#breakPointGrid > .k-grid-aria-root > .k-grid-container > .k-grid-content > .k-grid-table-wrap > .k-grid-table > tbody > tr > td').first().click();
  await page.locator('#milesFrom0').fill('1');
  await page.locator('#milesTo0').click();
  await page.locator('#milesTo0').fill('1000');
  await page.locator('#weightFrom0').click();
  await page.locator('#weightFrom0').fill('1');
  await page.locator('#weightTo0').click();
  await page.locator('#weightTo0').fill('1000');
  await page.locator('#breakPoint0').click();
  await page.locator('#breakPoint0').fill('500');
  await page.locator('#baseRate0').click();
  await page.locator('#baseRate0').fill('12');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(9000);

  await page.getByRole('link', { name: 'Lead Management' }).click();
  await page.waitForTimeout(9000);

  await page.getByRole('columnheader', { name: 'First Name Sortable ' }).getByRole('link', { name: '' }).click();

  await page.getByText('Filter').nth(2).click();

  await page.getByRole('textbox').nth(3).fill('Automation_Lead_Intra');

  await page.getByRole('textbox').nth(3).click();

  await page.getByRole('textbox').nth(3).fill('Automation_Lead_Intra');

  await page.locator('kendo-grid-filter-menu-container').getByRole('button', { name: 'Filter' }).click();
  await page.waitForTimeout(5000);

  await page.locator('.dropdown-toggle').first().click();
  await page.getByRole('button', { name: ' Estimates' }).click();
  await page.waitForTimeout(5000);

  await page.getByRole('button', { name: 'Create' }).click();
  await page.waitForTimeout(5000);

  await page.getByText('Without Inventory').click();
  await page.getByRole('dialog', { name: '​ Create Estimates Close' }).getByRole('button', { name: 'Create' }).click();
  await page.waitForTimeout(15000);

  await page.locator('#pricingTariffId2').getByTitle('Clear all').click();
  await page.waitForTimeout(5000);

  await page.locator('#pricingTariffId2 div').first().click();
  await page.waitForTimeout(5000);

  await page.getByRole('option', { name: 'Local/Intrastate' }).click();
  await page.waitForTimeout(9000);

  await page.locator('.slider').first().click();
  await page.waitForTimeout(9000);

  await page.locator('#customTariffPicker div').first().click();
  await page.waitForTimeout(5000);

  await page.getByRole('option', { name: 'Phoenix CT' }).click();
  await page.waitForTimeout(9000);

  await page.locator('#calculationMode div').first().click();
  await page.waitForTimeout(5000);

  await page.getByRole('option', { name: 'Transportation per piece' }).click();
  await page.locator('#calculationMode > .ng-select-container > .ng-arrow-wrapper').click();
  await page.locator('input[name="bottomLineDiscount"]').click();
  await page.locator('input[name="packingDisc"]').click();
  await page.locator('input[name="sitDisc"]').click();
  var number = await page.locator('#numberOfPieces907').isVisible();
  if (number) {
    await page.locator('#numberOfPieces907').click();
    await page.locator('#numberOfPieces907').fill('11');
  }
  else {
    await page.locator('#numberOfPieces1646').click();
    await page.locator('#numberOfPieces1646').fill('11');
  }
  await page.getByRole('button', { name: 'Calculate Price' }).click();
  await page.waitForTimeout(9000);
  var price = await page.getByRole('row', { name: 'Transportation $1,600.00 $1,600.00' }).getByRole('button').isVisible();
  if (price) {
    await page.getByRole('row', { name: 'Transportation $1,600.00 $1,600.00' }).getByRole('button').click();
  }


});

