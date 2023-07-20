import { test, expect } from '@playwright/test';
import { loginTestCodeforAdmin } from '../common.spec';

test("Admin >> Test for Website Login Skip", async ({ browser }) => {
    test.setTimeout(300000)
    await loginTestCodeforAdmin({ browser });
    // Validate that the login was successful
    const page = browser.contexts()[0].pages()[0];
    await page.waitForTimeout(10000);
    // Test Script Start from here

    await page.getByRole('link', { name: 'Lead Management' }).click();
  await page.waitForTimeout(10000);
  await page.getByRole('columnheader', { name: 'First Name Sortable ' }).getByRole('link', { name: '' }).click();
  await page.getByRole('columnheader', { name: 'First Name Sortable ' }).getByRole('link', { name: '' }).dblclick();
  await page.getByText('Filter').nth(2).click();
  await page.waitForTimeout(8000);
  await page.locator('kendo-grid-string-filter-menu').getByRole('textbox').first().click();
  await page.locator('kendo-grid-string-filter-menu').getByRole('textbox').first().fill('STSRegistraionSeed2');//Id For Dev 114235,Id for Test 103347 
  await page.locator('kendo-grid-filter-menu-container').getByRole('button', { name: 'Filter' }).click();
  await page.waitForTimeout(8000);
  await page.locator('.dropdown-toggle').first().click();
  await page.waitForTimeout(8000);
  await page.getByRole('button', { name: ' Estimates' }).getByText('Estimates').click();
  await page.waitForTimeout(8000);
  await page.getByRole('button', { name: 'Create' }).click();
  await page.waitForTimeout(8000);
  await page.getByText('With Inventory').click();
  await page.waitForTimeout(8000);
  await page.getByRole('dialog', { name: '​ Create Estimates Close' }).getByRole('button', { name: 'Create' }).click();
  await page.waitForTimeout(15000);
  await page.getByRole('tab', { name: 'Estimates' }).click();
  
  await page.waitForTimeout(12000);
  await page.locator('.ng-arrow-wrapper').first().click();
  await page.waitForTimeout(8000);
  await page.locator('#pricingTariffId2').getByRole('textbox').type('Auto Only');
  await page.waitForTimeout(10000);
  await page.getByRole('option', { name: 'Auto Only' }).click();
  await page.waitForTimeout(8000);

  await page.locator('div[class="d-flex align-items-center mr-5"] span[class="off"]').click()
  await page.waitForTimeout(8000);
 
  await page.getByRole('button', { name: 'Add Auto Spot' }).click();

  await page.waitForTimeout(8000);
  await page.locator('td').first().click();
  await page.waitForTimeout(8000);
  await page.getByRole('gridcell').filter({ hasText: 'Select Make×' }).locator('span').nth(2).click();
 // await page.getByText('BENTLEY').type('BENTLY');
  await page.waitForTimeout(8000);
  await page.getByText('BENTLEY').click();
  await page.waitForTimeout(8000);
  await page.getByRole('gridcell', { name: 'Select Model' }).locator('span').first().click();
  await page.waitForTimeout(8000);
  // await page.getByText('AZURE').type('AZURE');
  await page.getByText('AZURE').click();
  await page.waitForTimeout(8000);
  await page.getByRole('treeitem', { name: 'Auto Spot ' }).locator('input[type="number"]').first().click()
  await page.waitForTimeout(3000);
// Get the current date
const currentDate = new Date();

// Calculate the third upcoming date
const thirdDate = new Date();
thirdDate.setDate(currentDate.getDate() + 5);

// Check if the third date is a weekend day (Saturday or Sunday)
const dayOfWeek = thirdDate.getDay();
if (dayOfWeek === 0) {
  // If it's a Sunday, add one more day to get the next weekday
  thirdDate.setDate(thirdDate.getDate() + 1);
} else if (dayOfWeek === 6) {
  // If it's a Saturday, skip one more day
  thirdDate.setDate(thirdDate.getDate() + 2);
}

console.log(thirdDate);

const month = thirdDate.toLocaleString('default', { month: 'long' });
const day = thirdDate.getDate();
const year = thirdDate.getFullYear();
//const weekDay = thirdNextDate.get;

  await page.getByRole('treeitem', { name: 'Auto Spot ' }).locator('input[type="number"]').first().fill(`${year}`)
  await page.waitForTimeout(8000);
  await page.getByRole('treeitem', { name: 'Auto Spot ' }).getByRole('button', { name: 'Toggle calendar' }).nth(1).click();

  await page.getByTitle(`${month} ${day}, ${year}`).getByText(`${day}`).click();
  // await page.getByTitle('Monday, March 6, 2023').getByText('6').click();


  await page.getByRole('button', { name: 'Get Quote' }).click();
  await page.waitForTimeout(50000);
  await page.getByRole('row', { name: '2023 BENTLEY AZURE ' }).getByRole('checkbox').first().click();
  await page.waitForTimeout(28000);
  await page.getByRole('button', { name: 'Calculate Price' }).click();
  await page.waitForTimeout(28000);
  var price =  await page.locator('span').filter({ hasText: 'Estimate Pricing' }).locator('span').isVisible();
  if(price)
  {
    await page.waitForTimeout(28000);
  await page.locator('span').filter({ hasText: 'Estimate Pricing' }).locator('span').click();
  }
  await page.getByRole('button', { name: 'Register With STS' }).click();
  await page.waitForTimeout(32000);
  await page.locator('#paymentMethod > .ng-select-container > .ng-arrow-wrapper').click();
  await page.waitForTimeout(18000);
  await page.getByRole('option', { name: 'CSH' }).getByText('CSH').click();
  await page.waitForTimeout(18000);
  var save_button = await page.getByRole('button', { name: 'Save & Register' }).isDisabled();
   if (save_button) {
    await page.getByRole('button', { name: 'Save & Register' });
   }
   else
   {
    await page.getByRole('button', { name: 'Save & Register' }).click();
   }


});


