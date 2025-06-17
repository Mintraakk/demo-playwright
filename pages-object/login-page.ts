import { Locator, Page } from "@playwright/test"
import { promises } from "dns";

export class Loginpage {//ชื่อ classสร้างตัวพิมพ์ใหญ่ 

readonly page: Page; //ตัวแปร page
readonly usernameInputLocator: Locator;
readonly passwordInputLocator: Locator;
readonly loginBtnLocator: Locator;

constructor(page: Page){
this.page = page; 
this.usernameInputLocator = this.page.locator('id=userName');
this.passwordInputLocator = this.page.locator('id=password');
this.loginBtnLocator = this.page.locator('id=login');
}

//สร้าง functionหรือ methods เพื่อนำไปใช้
async login (userName: string, password: string) { // function login 
await this.usernameInputLocator.fill(userName); //ใส่ค่าusername
await this.passwordInputLocator.fill(password); //ใส่ค่าpassword

await Promise.all([ //รอให้Page ทำการ redirectไปที่profile page
    this.page.waitForURL('https://demoqa.com/profile'),
    await this.loginBtnLocator.click()  //คลิกปุ่มlogin
]);
 }

}


