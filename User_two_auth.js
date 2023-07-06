const { chromium } = require('playwright');
const fs = require('fs');
const environment = require('./utils/environmet.json');

// const websiteURL = 'https://testmovescoutpro.sirva.com/account/login';
// const username = 'Q2222000236';
// const password = '123qwe';

async function generateAuthJSON() {
  try {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(environment.baseUrl);

    await fillLoginForm(page);
    await submitLoginForm(page);

    await page.waitForNavigation();

    const storageState = await context.storageState();
    saveAuthJSON(storageState);

    await browser.close();

    console.log('Authentication JSON file generated successfully! for User Two');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

async function fillLoginForm(page) {
    await page.getByPlaceholder('User name or email *').click();

    await page.getByPlaceholder('User name or email *').fill(environment.User_Id_Two);
  
    await page.getByPlaceholder('Password *').click();
  
    await page.getByPlaceholder('Password *').fill(environment.User_Id_Two_Password);
}

async function submitLoginForm(page) {
    await page.getByRole('button', { name: 'Log in' }).click();
}

function saveAuthJSON(storageState) {
  const json = JSON.stringify(storageState);
  fs.writeFileSync('twoauth.json', json);
}

generateAuthJSON();
