import { test, expect } from '@playwright/test';

test('Login User with incorrect email and password', async ({ page }) => {

const signUpBtn= page.locator("a[href='/login']");
const loginEmailInput= page.locator("input[data-qa='login-email']");
const LoginPasswordInput= page.locator("input[placeholder='Password']");
const loginBtn = page.locator("button[data-qa='login-button']");
const logoutBtn = page.locator("a[href='/logout']");


await page.goto('https://automationexercise.com/');
//Verify that home page is visible successfully
await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
//Click on 'Signup / Login' button
await signUpBtn.click(),
await page.waitForURL('https://automationexercise.com/login');

//Verify 'Login to your account' is visible
await expect(page.getByText('Login to your account')).toBeVisible();

//Enter correct email address and password
await loginEmailInput.fill('abcqa.m@gmail.com');
await LoginPasswordInput.fill('P@ssword09');

//Click 'login' button
await loginBtn.click(),
//Verify that 'Logged in as username' is visible
await page.getByText('demoqa09').waitFor({ state: 'visible' });
await expect(page.getByText('demoqa09')).toBeVisible();

//Click 'Logout' button
await logoutBtn.click(),
await page.waitForURL('https://automationexercise.com/login');


});