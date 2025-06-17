import { test, expect } from '@playwright/test';
import { HomepageGuest } from '../../pages-object/homePageGuest';
import { SignupAndLoginPage} from '../../pages-object/SignupAndLoginPage';
import { HomePageCustomer } from '../../pages-object/homePageCustomer';
import * as data from '../../data/data.json';

test("Login User with incorrect email and password", async ({ page }) => {
const homePage = new HomepageGuest (page);
const signupAndLoginPage = new SignupAndLoginPage (page);
const homePageCustomer = new HomePageCustomer (page); 


await homePage.goto(data.baseURL); 
await homePage.verifyHomePageHeader(); 
await homePage.clickSignupAndLoginButton(); 

await signupAndLoginPage.verifyLoginToYourAccountIsVisible();
await signupAndLoginPage.fillLoginTextFieldEmail(data.loginFail.email);
await signupAndLoginPage.fillLoginTextFieldPassword(data.loginFail.password);
await signupAndLoginPage.clickLoginButton();
await signupAndLoginPage. verifyErrorMessageLoginIsVisible();

})