import { test, expect } from '@playwright/test';
import { loginpage } from '../pages/loginpage';

    test.describe("nmbrs prod envs", () => {
    test('node 2', async ({ page }) => {

    const loginPage = new loginpage(page);
    await loginPage.gotoLoginPage('https://node2.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await loginPage.login();
    await loginPage.selectProfile();    
      // Expect a title "to contain" a substring.
      
    await expect(page).toHaveTitle(/Node 2/);
    });

    test('node 3', async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.gotoLoginPage('https://node3.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await loginPage.login();
    await loginPage.selectProfile(); 
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node 3/);
    });
    test('node 4', async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.gotoLoginPage('https://node4.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await loginPage.login();
    await loginPage.selectProfile(); 
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node 4/);
    });

    test('node 5', async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.gotoLoginPage('https://node5.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await loginPage.login();
    await loginPage.selectProfile(); 
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node 5/);
    });
    test('node 6', async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.gotoLoginPage('https://node6.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await loginPage.login();
    await loginPage.selectProfile(); 
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node 6/);
    });
    test('node 7', async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.gotoLoginPage('https://node7.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await loginPage.login();
    await loginPage.selectProfile(); 
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node 7/);
    });
    test('node 8', async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.gotoLoginPage('https://node8.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await loginPage.login();
    await loginPage.selectProfile(); 
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/node8/);
    });

    test('node 9', async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.gotoLoginPage('https://node9.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await loginPage.login();
    await loginPage.selectProfile(); 
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/node9/);
    });

    test('node 10', async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.gotoLoginPage('https://node10.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await loginPage.login();
    await loginPage.selectProfile(); 
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/node10/);
    });

    test('node 11', async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.gotoLoginPage('https://node11.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await loginPage.login();
    await loginPage.selectProfile(); 
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node 11/);
    });

    test('node 12', async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.gotoLoginPage('https://node12.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await loginPage.login();
    await loginPage.selectProfile(); 
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node 12/);
    });

    test('node 13', async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.gotoLoginPage('https://node13.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await loginPage.login();
    await loginPage.selectProfile(); 
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/node13/);
    });

    test('node 14', async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.gotoLoginPage('https://node14.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await loginPage.login();
    await loginPage.selectProfile(); 
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node14/);
    });

    test('node 15', async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.gotoLoginPage('https://node15.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await loginPage.login();
    await loginPage.selectProfile(); 
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node15/);
    });

    test('node 16', async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.gotoLoginPage('https://node16.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await loginPage.login();
    await loginPage.selectProfile(); 
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node 1/);
    });

    test('node 17', async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.gotoLoginPage('https://node17new.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await loginPage.login();
    
    //await loginPage.selectProfile(); 
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node17new/);
    });

    test('node 18', async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.gotoLoginPage('https://node18.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await loginPage.login();
    //await loginPage.selectProfile(); 
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/node18/);
    });

    test('node 20', async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.gotoLoginPage('https://node20.nmbrs.nl/applications/Common/Login.aspx?ReturnUrl=%2f');
    await loginPage.login();
    //await loginPage.selectProfile(); 
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Node20/);
    });
});