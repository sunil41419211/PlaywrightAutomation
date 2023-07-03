import { test, expect } from '@playwright/test';

test('test for admin auth file', async ({ page }) => {

    test.setTimeout(300000);
  
      await page.goto("https://testmovescoutpro.sirva.com/account/login");
  
    await page.getByPlaceholder('User name or email *').click();
  
    await page.getByPlaceholder('User name or email *').fill('admin');
  
    await page.getByPlaceholder('Password *').click();
  
    await page.getByPlaceholder('Password *').fill('123qwe');
  
    await page.getByRole('button', { name: 'Log in' }).click();
  

  
  });