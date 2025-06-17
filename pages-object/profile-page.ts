import { Locator, Page } from "@playwright/test"

export class ProfilePage 
{
    //สร้างตัวแปร
    readonly page: Page; 
    readonly usernameLabelLocator: Locator;
    readonly logoutBtnLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameLabelLocator = this.page.locator('id=userName-value');
        this.logoutBtnLocator = this.page.locator('id=submit');

    }
    async logout(){
    await Promise.all([
    this.page.waitForURL('https://demoqa.com/login'),
    await this.logoutBtnLocator.click()  //คลิกปุ่มlogout
]);

    }
    


}