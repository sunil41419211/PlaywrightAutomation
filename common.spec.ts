//common.spec.ts
import * as environment from '../PlaywrightAutomation/utils/environmet.json';

// let baseUrl="https://testmovescoutpro.sirva.com/account/login";

//For Admin Login Skip


export async function loginTestCodeforAdmin({ browser }) {
    const context = await browser.newContext({ storageState: "./adminauth.json" });
    const page = await context.newPage();
    await page.goto(environment.baseUrl);
    await page.waitForTimeout(5000);
}

//For User one Login Skip
export async function loginTestCodeforUserOne({ browser }) {
    const context = await browser.newContext({ storageState: "./oneauth.json" });
    const page = await context.newPage();
    await page.goto(environment.baseUrl);
    await page.waitForTimeout(5000);
}

//For User Two Login Skip
export async function loginTestCodeforUserTwo({ browser }) {
    const context = await browser.newContext({ storageState: "./twoauth.json" });
    const page = await context.newPage();
    await page.goto(environment.baseUrl);
    await page.waitForTimeout(5000);
}



