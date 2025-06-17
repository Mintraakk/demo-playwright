import { test, expect } from '@playwright/test';
import { HomepageGuest } from '../../pages-object/homePageGuest';
import { SignupAndLoginPage} from '../../pages-object/SignupAndLoginPage';
import { SignupNewUser } from '../../pages-object/SignupNewUser';
import { HomePageCustomer } from '../../pages-object/homePageCustomer';
import * as data from '../../data/data.json';

test("Signup for New User", async ({ page }) => {
const homePage = new HomepageGuest (page);
const signupAndLoginPage = new SignupAndLoginPage (page);
const signupPage = new SignupNewUser (page);
const homePageCustomer = new HomePageCustomer (page);

//test step
await homePage.goto(data.baseURL); //Navigate to 'http://automationexercise.com'
await homePage.verifyHomePageHeader(); //Verify home page is visible successfully
await homePage.clickSignupAndLoginButton(); //Click on 'Signup / Login' button

await signupAndLoginPage.verifyNewUserSignupIsVisible(); //Verify 'New User Signup!' is visible
await signupAndLoginPage.inputSignupTextName(data.register.name);//Fill name 
await signupAndLoginPage.inputSignupTextEmail(data.register.email);//Fill email address
await signupAndLoginPage.clickSignupButton(); //Click 'Signup' button

await signupPage.verifyEnterAccountInformationIsVisible(); // Verify 'ENTER ACCOUNT INFORMATION' is visible
await signupPage.selectTitlePrefix(data.register.prefix); // select radiobox prefix
//Fill details: Title, Name, Email, Password, Date of birth
await signupPage.verifyInputTextName(data.register.name); 
await signupPage.verifyInputTextEmail(data.register.email);
await signupPage.inputTextPassword(data.register.password);
await signupPage.selectDateOfBerth(
    data.register.birthDay,
    data.register.birthMonth, 
    data.register.birthYear);
await signupPage.clickCheckboxNewsletter(); // click Check box
await signupPage.clickCheckboxReceiveSpecial(); // click Check box
await signupPage.verifyTitleAddressInformationIsVisible(); //Verify 'Address Information' is visible
await signupPage.inputTextFirstName(data.information.firstName); //Fill FirstName
await signupPage.inputTextLastName(data.information.lastName);//Fill lastName
await signupPage.inputTextCompany(data.information.company);//Fill company
await signupPage.inputTextAddress1(data.information.address1);//Fill address1
await signupPage.inputTextAddress2(data.information.address2);//Fill address2
await signupPage.selectDropdownCountry(data.information.country); //select dropdown
await signupPage.inputTextState(data.information.state);//Fill state
await signupPage.inputTextCity(data.information.city);//Fill City
await signupPage.inputTextZipcode(data.information.zipCode);//Fill zipcode
await signupPage.inputTextMobileNumber(data.information.mobileNumber);
await signupPage.clickCreateAccountButton(); //Click 'Create Account button'
await signupPage.verifyAccountCreatedIsVisible(); //Verify that 'ACCOUNT CREATED!' is visible
await signupPage.clickContinueButton(); //Click 'Continue' button

await homePageCustomer.verifyUserNameCustomer(data.register.name); //Verify that 'Logged in as username' is visible
await homePageCustomer.clickDeleteAccountButton(); // Click 'Delete Account' button
await homePageCustomer.verifyAccountDeleted();// Verify that 'ACCOUNT DELETED!' is visible
await homePageCustomer.clickContinueButton();//Click 'Continue' button

await homePage.verifyHomePageHeader(); //Verify home page is visible successfull

})