import { test, expect } from '@playwright/test';

test('Login User with correct email and password', async ({ page }) => {

const signUpBtn= page.locator("a[href='/login']");
const loginEmailInput= page.locator("input[data-qa='login-email']");
const LoginPasswordInput= page.locator("input[placeholder='Password']");
const loginBtn = page.locator("button[data-qa='login-button']");
const deleteAccountBtn = page.locator("a[href='/delete_account']");
const DeleteAccountTitle = page.getByText("Account Deleted!");

await page.goto('https://automationexercise.com/');
//Verify that home page is visible successfully
await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
//Click on 'Signup / Login' button
await signUpBtn.click(),
await page.waitForURL('https://automationexercise.com/login');

//Verify 'Login to your account' is visible
await expect(page.getByText('Login to your account')).toBeVisible();

//Enter correct email address and password
await loginEmailInput.fill('qademo@example.com');
await LoginPasswordInput.fill('P@ssword09');

//Click 'login' button
await loginBtn.click(),
await page.waitForURL('https://automationexercise.com');

//Verify that 'Logged in as username' is visible
await page.getByText('demoqa99').waitFor({ state: 'visible' });
await expect(page.getByText('demoqa99')).toBeVisible();

//Click 'Delete Account' button
await deleteAccountBtn.click();
await page.waitForURL('https://automationexercise.com/delete_account');
//Verify that 'ACCOUNT DELETED!' is visible
await expect(DeleteAccountTitle).toBeVisible()
    });


test('Login User with incorrect email and password', async ({ page }) => {

const signUpBtn= page.locator("a[href='/login']");
const loginEmailInput= page.locator("input[data-qa='login-email']");
const LoginPasswordInput= page.locator("input[placeholder='Password']");
const loginButton = page.locator("button[data-qa='login-button']");

await page.goto('https://automationexercise.com/');
//Verify that home page is visible successfully
await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
//Click on 'Signup / Login' button
await signUpBtn.click(),
await page.waitForURL('https://automationexercise.com/login');

//Verify 'Login to your account' is visible
await expect(page.getByText('Login to your account')).toBeVisible();

//Enter incorrect email address and password
await loginEmailInput.fill('abc.m@gmail.com');
await LoginPasswordInput.fill('P@ssw0rd09');

//Click 'login' button
await loginButton.click(),
//Verify error 'Your email or password is incorrect!' is visible
await expect(page.getByText('Your email or password is')).toBeVisible();


});