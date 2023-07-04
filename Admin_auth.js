const { chromium } = require('playwright');
const fs = require('fs');
const environment=require('../PlaywrightAutomation/environmet')

// const websiteURL = 'https://testmovescoutpro.sirva.com/account/login';
// const username = 'admin';
// const password = '123qwe';

async function generateAuthJSON() {
  try {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(environment.Credential.baseUrl);

    await fillLoginForm(page);
    await submitLoginForm(page);

    await page.waitForNavigation();

    const storageState = await context.storageState();
    saveAuthJSON(storageState);

    await browser.close();

    console.log('Authentication JSON file generated successfully! for Admin');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

async function fillLoginForm(page) {
    await page.getByPlaceholder('User name or email *').click();

    await page.getByPlaceholder('User name or email *').fill(environment.Credential.Admin_Id);
  
    await page.getByPlaceholder('Password *').click();
  
    await page.getByPlaceholder('Password *').fill(environment.Credential.Admin_Password);
}

async function submitLoginForm(page) {
    await page.getByRole('button', { name: 'Log in' }).click();
}

function saveAuthJSON(storageState) {
  const json = JSON.stringify(storageState);
  fs.writeFileSync('adminauth.json', json);
}

generateAuthJSON();
