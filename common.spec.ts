let baseUrl = "https://testmovescoutpro.sirva.com/account/login";

export async function loginTestCode({ browser, storageState }) {
  const context = await browser.newContext({ storageState });
  const page = await context.newPage();
  await page.goto(baseUrl);
  await page.waitForTimeout(5000);
}

// Admin Login
export async function loginTestCodeforAdmin({ browser }) {
  await loginTestCode({ browser, storageState: "./adminauth.json" });
}

// User one Login
export async function loginTestCodeforUserOne({ browser }) {
  await loginTestCode({ browser, storageState: "./oneauth.json" });
}

// User Two Login
export async function loginTestCodeforUserTwo({ browser }) {
  await loginTestCode({ browser, storageState: "./twoauth.json" });
}
