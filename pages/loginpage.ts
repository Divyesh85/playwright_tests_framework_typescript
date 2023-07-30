import { expect, type Locator, type Page } from '@playwright/test';

export class loginpage {
  readonly page: Page;
  readonly emailaddress: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly profileList: Locator;
  readonly homeLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailaddress = page.locator('#txtEmail');
    this.password = page.locator('#txtPassword');
    this.loginButton = page.locator('#btnLogin');
    this.profileList = page.getByRole('listitem').filter({ hasText: 'Live User' });
    this.homeLink = page.getByRole('link', { name: 'home HOME' });  
  }

  async gotoLoginPage(url) {
    await this.page.goto(url);
  }

  async login(){
    await this.emailaddress.click();
    await this.emailaddress.fill('qasignals@nmbrs.nl');
    await this.password.click();
    await this.password.fill('SoftwareTesting1!');
    await this.loginButton.click();    
  }

  async selectProfile()
  {   
    await expect(this.profileList).toBeVisible();
    await this.profileList.click();
    await expect(this.homeLink).toBeVisible({ timeout: 6000 });
  }  
}