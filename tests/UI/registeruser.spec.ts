import { test, expect } from '@playwright/test';

test('Register User', async ({ page }) => {
const usernameInputLocator = page.locator("input[data-qa='signup-name']");
const emailInputLocator = page.locator("input[data-qa='signup-email']");
const signUpBtn = page.locator("button[data-qa='signup-button']"); //ปุ่ม signup
const signupInformation = page.getByText("Enter Account Information"); //header signup page
const passwordInputLocator = page.locator('id=password');
const dateOfBirthDropDown = page.locator('id=days');
const monthOfBirthDropDown = page.locator('id=months');
const yearOfBirthDropDown= page.locator('id=years');
const newsletterCheckboxLocator = page.getByRole('checkbox', { name: 'newsletter' });
const receiveCheckboxLocator = page.getByRole('checkbox', { name: 'optin' });
const firstInputLocator = page.locator('id=first_name');
const lastInputLocator = page.locator('id=last_name');
const companyInputLocator = page.locator('id=company'); 
const address1InputLocator = page.locator('id=address1'); 
const address2InputLocator = page.locator('id=address2'); 
const countryDropDown = page.locator('id=country');
const stateInputLocator= page.locator('id=state');
const cityInputLocator= page.locator('id=city');
const zipcodeInputLocator = page.locator('id=zipcode');
const mobileNumberInputLocator = page.locator('id=mobile_number');
const createAccountBtn = page.locator("button[data-qa='create-account']"); 
const accountCreatedVerify = page.getByText('Account Created!');
const continueBtn = page.locator(".btn.btn-primary");
const deleteAccountBtn =page.locator("a[href='/delete_account']");
const DeleteAccountTitle = page.getByText("Account Deleted!");


await page.goto('https://automationexercise.com/');

// Verify that home page is visible successfully
await page.locator('.col-sm-4').first().click();
// Click on 'Signup / Login' button
await page.getByRole('link', { name: 'Signup / Login' }).click();
// Verify 'New User Signup!' is visible
await expect(page.locator('#form')).toContainText('New User Signup!');
// Enter name and email address
await usernameInputLocator.fill('demoqa09');
await expect(usernameInputLocator).toHaveValue('demoqa09');
await emailInputLocator.fill('abcdeqa.m@gmail.com');
await expect(emailInputLocator).toHaveValue('abcdqa.m@gmail.com');
//Click 'Signup' button

await signUpBtn.click(),
await Promise.all ([ //จะรอจนกว่าทั้งการคลิกจะเสร็จสิ้น และ URL จะเปลี่ยนไป
    page.waitForURL('https://automationexercise.com/signup'),

]);
//Verify that 'ENTER ACCOUNT INFORMATION' is visible
await expect(signupInformation).toHaveText('Enter Account Information');

//Fill details: Title, Name, Email, Password, Date of birth
await page.getByRole('radio', { name: 'Mrs.' }).check();
await passwordInputLocator.fill('P@ssword09');
//select day 9
await dateOfBirthDropDown.selectOption('9');
await expect(dateOfBirthDropDown).toHaveValue('9'); //ตรวจสอบว่าเลือก ถูกต้อง
await monthOfBirthDropDown.selectOption('4');
await expect(monthOfBirthDropDown).toHaveValue('4'); 
await yearOfBirthDropDown.selectOption('1993');
await expect(yearOfBirthDropDown).toHaveValue('1993');

// Select checkbox 'Sign up for our newsletter!'
await newsletterCheckboxLocator.setChecked(true); 
await expect(newsletterCheckboxLocator).toBeChecked();
// Select checkbox 'Receive special
await page.locator('#optin').setChecked(true);

//Fill details Address Information
await firstInputLocator.fill('Anna');
await expect(firstInputLocator).toHaveValue('Anna');
await lastInputLocator.fill('Justin');
await expect(lastInputLocator).toHaveValue('Justin'); 
await companyInputLocator.fill('ABC Company');
await expect(companyInputLocator).toHaveValue('ABC Company');
await address1InputLocator.fill('270 Orchard Building');
await expect(address1InputLocator).toHaveValue('270 Orchard Building');
await address2InputLocator.fill('Orchard road');
await expect(address2InputLocator).toHaveValue('Orchard road');
await countryDropDown.selectOption('Singapore');
await expect(countryDropDown).toHaveValue('Singapore'); 
await stateInputLocator.fill('Orchard');
await expect(stateInputLocator).toHaveValue('Orchard');
await cityInputLocator.fill('Orchard');
await expect(cityInputLocator).toHaveValue('Orchard');
await zipcodeInputLocator.fill('238115');
await expect(zipcodeInputLocator).toHaveValue('238115');
await mobileNumberInputLocator.fill('+65 1800 699 2824');
await expect(mobileNumberInputLocator).toHaveValue('+65 1800 699 2824');
// Click 'Create Account button'
await createAccountBtn.click();
await Promise.all ([ //จะรอจนกว่าทั้งการคลิกจะเสร็จสิ้น และ URL จะเปลี่ยนไป
    page.waitForURL('https://automationexercise.com/account_created'),
    ]);
//Verify that 'ACCOUNT CREATED!' is visible
await expect(accountCreatedVerify).toHaveText('Account Created!');
await expect(accountCreatedVerify).toBeVisible()
// Click 'Continue' button
await continueBtn.click();
await page.waitForURL('https://automationexercise.com');
//  Verify that 'Logged in as username' is visibl
await page.getByText('demoqa09').waitFor({ state: 'visible' });
await expect(page.getByText('demoqa09')).toBeVisible();

//Click 'Delete Account' button
//await deleteAccountBtn.click();
//await page.waitForURL('https://automationexercise.com/delete_account');
//Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
//await expect(DeleteAccountTitle).toBeVisible()
//await continueBtn.click();
//await page.waitForURL('https://automationexercise.com');

});


test('Register User with existing email', async ({ page }) => {

const signupUsernameInput = page.locator("input[data-qa='signup-name']");
const signupEmailInput = page.locator("input[data-qa='signup-email']");
const signUpBtn = page.locator("a[href='/login']");

await page.goto('https://automationexercise.com/'); 
//Verify that home page is visible successfully
await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
//Click on 'Signup / Login' button
await signUpBtn.click(),
await page.waitForURL('https://automationexercise.com/login');
//Verify 'New User Signup!' is visible
await expect(page.getByText('Login to your account')).toBeVisible();
// Enter name and already registered email address
await signupUsernameInput.fill('ABCD');
await signupEmailInput.fill('abcqa.m@gmail.com');
//Click 'Signup' button
await signUpBtn.click();
//Verify error 'Email Address already exist!' is visible
await expect(page.getByText('Email Address already exist!')).toBeVisible
});
