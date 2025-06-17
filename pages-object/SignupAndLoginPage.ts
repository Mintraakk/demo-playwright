import { type Locator, type Page, expect } from '@playwright/test';

export class SignupAndLoginPage {
readonly page: Page; //ประกาศตัวแปร page แบบ read-only
readonly titleNewSignup: Locator;
readonly signupTextName: Locator;
readonly signupTextEmail: Locator;
readonly signupButton: Locator;
readonly titleLoginAccount: Locator;
readonly loginTextEmail: Locator;
readonly loginTextPassword: Locator;
readonly loginButton: Locator;
readonly errorLoginInCorrect: Locator;
readonly errorEmailAlreadyExist: Locator;
 
constructor (page: Page) {  //Locators สำหรับ Elements บนหน้า Login
this.page = page;
this.titleNewSignup = page.locator("div[class='signup-form'] h2");
this.signupTextName = page.getByPlaceholder('Name');
this.signupTextEmail = page.locator("input[data-qa='signup-email']");
this.signupButton = page.locator("button[data-qa='signup-button']"); 

this.titleNewSignup = page.locator("div[class='login-form'] h2");
this.loginTextEmail = page.locator("input[data-qa='login-email']");
this.loginTextPassword = page. getByPlaceholder('Password');
this.loginButton = page.locator ("button[data-qa='login-button']"); 

this.errorLoginInCorrect = page.getByText("Your email or password is incorrect!");
this.errorEmailAlreadyExist = page.getByText ("Email Address already exist!");
}

// สร้างMethod สำหรับนำทางไปยังหน้านั้นๆ 
// action ในหน้านั้นๆ 
async verifyNewUserSignupIsVisible() {
    await expect (this.titleNewSignup).toBeVisible();
}
async inputSignupTextName(name: string){
    expect (this.signupTextName).toBeVisible();
    await this.signupTextName.fill(name);
}

async inputSignupTextEmail(email: string){
    expect (this.signupTextEmail).toBeVisible();
    await this.signupTextEmail.fill(email);
}
async clickSignupButton(){
    await this.signupButton.click();
}
async verifyLoginToYourAccountIsVisible() {
    await expect(this.titleLoginAccount).toBeVisible();
  }
  async fillLoginTextFieldEmail(email: string) {
    await this.loginTextEmail.fill(email);
  }
  async fillLoginTextFieldPassword(password: string) {
    await this.loginTextPassword.fill(password);
  }
  async clickLoginButton() {
    await this.loginButton.click();
  }
  async verifyErrorMessageLoginIsVisible() {
    await expect(this.errorLoginInCorrect).toBeVisible();
  }
  async verifyErrorMessageEmailAlreadyExistIsVisible() {
    await expect(this.errorEmailAlreadyExist).toBeVisible();
  }
}