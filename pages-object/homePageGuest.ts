import { type Locator, type Page, expect } from '@playwright/test';
import { promises } from 'dns';

export class HomepageGuest {
    readonly page: Page
    readonly headerPage: Locator
    readonly signupAndLoginButton: Locator 

    constructor (page: Page){
        this.page = page
        this.headerPage =page.locator ("img[alt='Website for automation practice']");
        this.signupAndLoginButton = page.locator("a[href='/login']");
    }

    async goto (URL: string): Promise<void> {// ไม่ได้มีการ returnค่าอะไร 
        await this.page.goto(URL)
        await this.page.waitForLoadState('networkidle') //รอให้Web loadเสร็จ
    }

    async verifyHomePageHeader () {
        await expect (this.headerPage).toBeVisible()
    }

    async clickSignupAndLoginButton (){
        await this.signupAndLoginButton.click()
    }
}