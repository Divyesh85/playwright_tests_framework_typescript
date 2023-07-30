import { test, expect } from '@playwright/test';

// test.describe("navigation", () => {
//   test.beforeEach(async ({ page }) => {
//     // Go to the starting url before each test.
//     await page.goto("https://playwright.dev/");
//   });

//   test("main navigation", async ({ page }) => {
//     // Assertions use the expect API.
//     await expect(page).toHaveURL("https://playwright.dev/");
//   });

//   test('has title', async ({ page }) => {
//     //await page.goto('https://playwright.dev/');
  
//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle(/Playwright/);
//   });

//   test('get started link', async ({ page }) => {
//     //await page.goto('https://playwright.dev/');
  
//     // Click the get started link.
//     await page.getByRole('link', { name: 'Get started' }).click();
  
//     // Expects the URL to contain intro.
//     await expect(page).toHaveURL(/.*intro/);
//   });
// });

test.describe("nmbrs prod envs", () => {
test('node 2', async ({ page }) => {
  await page.goto('https://node2.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
  await page.getByPlaceholder('Emailadres').click();
  await page.getByPlaceholder('Emailadres').fill('qasignals@nmbrs.nl');
  await page.getByPlaceholder('Wachtwoord').click();
  await page.getByPlaceholder('Wachtwoord').fill('SoftwareTesting1!');
  await page.getByRole('button', { name: 'Inloggen' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Live User' }).click();

  // Expect a title "to contain" a substring.
  
  await expect(page).toHaveTitle(/Node 2/);
  await page.getByRole('link', { name: 'home HOME' }).click();
  });

test('node 3', async ({ page }) => {
  await page.goto('https://node3.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
  await page.getByPlaceholder('Emailadres').click();
  await page.getByPlaceholder('Emailadres').fill('qasignals@nmbrs.nl');
  await page.getByPlaceholder('Wachtwoord').click();
  await page.getByPlaceholder('Wachtwoord').fill('SoftwareTesting1!');
  await page.getByRole('button', { name: 'Inloggen' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Live User' }).click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Node 3/);
  await page.getByRole('link', { name: 'home HOME' }).click();
  });

  test('node 4', async ({ page }) => {
    await page.goto('https://node4.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await page.getByPlaceholder('Emailadres').click();
    await page.getByPlaceholder('Emailadres').fill('qasignals@nmbrs.nl');
    await page.getByPlaceholder('Wachtwoord').click();
    await page.getByPlaceholder('Wachtwoord').fill('SoftwareTesting1!');
    await page.getByRole('button', { name: 'Inloggen' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Live User' }).click();
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node 4/);
    await page.getByRole('link', { name: 'home HOME' }).click();
    });

  test('node 5', async ({ page }) => {
    await page.goto('https://node5.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await page.getByPlaceholder('Emailadres').click();
    await page.getByPlaceholder('Emailadres').fill('qasignals@nmbrs.nl');
    await page.getByPlaceholder('Wachtwoord').click();
    await page.getByPlaceholder('Wachtwoord').fill('SoftwareTesting1!');
    await page.getByRole('button', { name: 'Inloggen' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Live User' }).click();
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node 5/);
    await page.getByRole('link', { name: 'home HOME' }).click();
    });
    
  test('node 6', async ({ page }) => {
    await page.goto('https://node6.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await page.getByPlaceholder('Emailadres').click();
    await page.getByPlaceholder('Emailadres').fill('qasignals@nmbrs.nl');
    await page.getByPlaceholder('Wachtwoord').click();
    await page.getByPlaceholder('Wachtwoord').fill('SoftwareTesting1!');
    await page.getByRole('button', { name: 'Inloggen' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Live User' }).click();
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node 6/);
    await page.getByRole('link', { name: 'home HOME' }).click();
    });
      
  test('node 7', async ({ page }) => {
    await page.goto('https://node7.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await page.getByPlaceholder('Emailadres').click();
    await page.getByPlaceholder('Emailadres').fill('qasignals@nmbrs.nl');
    await page.getByPlaceholder('Wachtwoord').click();
    await page.getByPlaceholder('Wachtwoord').fill('SoftwareTesting1!');
    await page.getByRole('button', { name: 'Inloggen' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Live User' }).click();
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node 7/);
    await page.getByRole('link', { name: 'home HOME' }).click();
    });

  test('node 8', async ({ page }) => {
    await page.goto('https://node8.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await page.getByPlaceholder('Emailadres').click();
    await page.getByPlaceholder('Emailadres').fill('qasignals@nmbrs.nl');
    await page.getByPlaceholder('Wachtwoord').click();
    await page.getByPlaceholder('Wachtwoord').fill('SoftwareTesting1!');
    await page.getByRole('button', { name: 'Inloggen' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Live User' }).click();
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/node8/);
    await page.getByRole('link', { name: 'home HOME' }).click();
    });

  test('node 9', async ({ page }) => {
    await page.goto('https://node9.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await page.getByPlaceholder('Emailadres').click();
    await page.getByPlaceholder('Emailadres').fill('qasignals@nmbrs.nl');
    await page.getByPlaceholder('Wachtwoord').click();
    await page.getByPlaceholder('Wachtwoord').fill('SoftwareTesting1!');
    await page.getByRole('button', { name: 'Inloggen' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Live User' }).click();
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/node9/);
    await page.getByRole('link', { name: 'home HOME' }).click();
    });

  test('node 10', async ({ page }) => {
    await page.goto('https://node10.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await page.getByPlaceholder('Emailadres').click();
    await page.getByPlaceholder('Emailadres').fill('qasignals@nmbrs.nl');
    await page.getByPlaceholder('Wachtwoord').click();
    await page.getByPlaceholder('Wachtwoord').fill('SoftwareTesting1!');
    await page.getByRole('button', { name: 'Inloggen' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Live User' }).click();
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/node10/);
    await page.getByRole('link', { name: 'home HOME' }).click();
    });

    test('node 11', async ({ page }) => {
    await page.goto('https://node11.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await page.getByPlaceholder('Emailadres').click();
    await page.getByPlaceholder('Emailadres').fill('qasignals@nmbrs.nl');
    await page.getByPlaceholder('Wachtwoord').click();
    await page.getByPlaceholder('Wachtwoord').fill('SoftwareTesting1!');
    await page.getByRole('button', { name: 'Inloggen' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Live User' }).click();
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node 11/);
    await page.getByRole('link', { name: 'home HOME' }).click();
    });

  test('node 12', async ({ page }) => {
    await page.goto('https://node12.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await page.getByPlaceholder('Emailadres').click();
    await page.getByPlaceholder('Emailadres').fill('qasignals@nmbrs.nl');
    await page.getByPlaceholder('Wachtwoord').click();
    await page.getByPlaceholder('Wachtwoord').fill('SoftwareTesting1!');
    await page.getByRole('button', { name: 'Inloggen' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Live User' }).click();
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node 12/);
    await page.getByRole('link', { name: 'home HOME' }).click();
    });

  test('node 13', async ({ page }) => {
    await page.goto('https://node13.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await page.getByPlaceholder('Emailadres').click();
    await page.getByPlaceholder('Emailadres').fill('qasignals@nmbrs.nl');
    await page.getByPlaceholder('Wachtwoord').click();
    await page.getByPlaceholder('Wachtwoord').fill('SoftwareTesting1!');
    await page.getByRole('button', { name: 'Inloggen' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Live User' }).click();
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/node13/);
    await page.getByRole('link', { name: 'home HOME' }).click();
    });

  test('node 14', async ({ page }) => {
    await page.goto('https://node14.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await page.getByPlaceholder('Emailadres').click();
    await page.getByPlaceholder('Emailadres').fill('qasignals@nmbrs.nl');
    await page.getByPlaceholder('Wachtwoord').click();
    await page.getByPlaceholder('Wachtwoord').fill('SoftwareTesting1!');
    await page.getByRole('button', { name: 'Inloggen' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Live User' }).click();
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node14/);
    await page.getByRole('link', { name: 'home HOME' }).click();
    });
  
    test('node 15', async ({ page }) => {
      await page.goto('https://node15.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
      await page.getByPlaceholder('Emailadres').click();
      await page.getByPlaceholder('Emailadres').fill('qasignals@nmbrs.nl');
      await page.getByPlaceholder('Wachtwoord').click();
      await page.getByPlaceholder('Wachtwoord').fill('SoftwareTesting1!');
      await page.getByRole('button', { name: 'Inloggen' }).click();
      await page.getByRole('listitem').filter({ hasText: 'Live User' }).click();
    
      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Node15/);
      await page.getByRole('link', { name: 'home HOME' }).click();
      });

  test('node 16', async ({ page }) => {
    await page.goto('https://node16.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await page.getByPlaceholder('Emailadres').click();
    await page.getByPlaceholder('Emailadres').fill('qasignals@nmbrs.nl');
    await page.getByPlaceholder('Wachtwoord').click();
    await page.getByPlaceholder('Wachtwoord').fill('SoftwareTesting1!');
    await page.getByRole('button', { name: 'Inloggen' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Live User' }).click();
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node 1/);
    await page.getByRole('link', { name: 'home HOME' }).click();
    });

    test('node 17', async ({ page }) => {
      await page.goto('https://node17new.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
      await page.getByPlaceholder('Email address').click();
      await page.getByPlaceholder('Email address').fill('qasignals@nmbrs.nl');
      await page.getByPlaceholder('Password').click();
      await page.getByPlaceholder('Password').fill('SoftwareTesting1!');
      await page.getByRole('button', { name: 'Login' }).click();

      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Node17new/);
      await page.getByRole('link', { name: 'home HOME' }).click();
    });

  test('node 18', async ({ page }) => {
    await page.goto('https://node18.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await page.getByPlaceholder('Emailadres').click();
    await page.getByPlaceholder('Emailadres').fill('qasignals@nmbrs.nl');
    await page.getByPlaceholder('Wachtwoord').click();
    await page.getByPlaceholder('Wachtwoord').fill('SoftwareTesting1!');
    await page.getByRole('button', { name: 'Inloggen' }).click();
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/node18/);
    await page.getByRole('link', { name: 'home HOME' }).click();
    });

    test('node 20', async ({ page }) => {
      await page.goto('https://node20.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
      await page.getByPlaceholder('Emailadres').click();
      await page.getByPlaceholder('Emailadres').fill('qasignals@nmbrs.nl');
      await page.getByPlaceholder('Wachtwoord').click();
      await page.getByPlaceholder('Wachtwoord').fill('SoftwareTesting1!');
      await page.getByRole('button', { name: 'Inloggen' }).click();
    
      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Node20/);
      await page.getByRole('link', { name: 'home HOME' }).click();
      });
});