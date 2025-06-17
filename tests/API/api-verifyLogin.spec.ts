import { test, expect } from '@playwright/test';
import * as data from '../../data/data.json';


test.describe('Positive API Test', () => {
    test("POST To Verify Login with valid details should return 200 ", async ({ request }) => {

        //method post  
        const response = await request.post("https://automationexercise.com/api/verifyLogin",
            {
                form: {
                    email: (data.login.email),
                    password: (data.login.password),
                },
            }
        );
        const verifyLogin = await response.json();
        expect(verifyLogin.responseCode).toBeOK;
        expect(verifyLogin).toBeTruthy();
        console.log(verifyLogin); //print jsonของproducts Body ออกมา 

    });

    test("POST To Verify Login without email parameter API should return 400 ", async ({ request }) => {

        //method post  
        const response = await request.post("https://automationexercise.com/api/verifyLogin",
            {
                form: {

                    password: (data.login.password),
                },
            }
        );
        const verifyLogin = await response.json(); // เก็บไว้ในตัวแปรชื่อ verifyLogin รอผลจากที่เราrequestไป  รอให้การอ่านและแปลงข้อมูล JSON เสร็จ
        expect(verifyLogin.responseCode).toBe(400);
        expect(verifyLogin).toBeTruthy();
        expect(verifyLogin.message).toBe('Bad request, email or password parameter is missing in POST request.')
        console.log(verifyLogin); //print jsonของproducts Body ออกมา 

    });

test("DELETE To Verify Login API should return 405 ", async ({ request }) => {

        //method delete  
        const response = await request.delete("https://automationexercise.com/api/verifyLogin",);

        const verifyDeleteLogin = await response.json();
        expect(response.status()).toBe(200); // response header
        expect(verifyDeleteLogin.responseCode).toBe(405); // response body
        expect(verifyDeleteLogin).toBeTruthy();
        expect(verifyDeleteLogin.message).toBe('This request method is not supported.'); 
        console.log(verifyDeleteLogin); //print jsonของproducts Body ออกมา

    });

test("POST To Verify Login with invalid details API should return 404", async ({ request }) => {

        //method post  
        const response = await request.post("https://automationexercise.com/api/verifyLogin",
            {
                form: {
                    email: (data.loginFail.email),
                    password: (data.loginFail.password),
                },
            }
        );
        const verifyLogin = await response.json();
        expect(verifyLogin.responseCode).toBe(404);
        expect(verifyLogin).toBeTruthy();
        expect(verifyLogin.message).toBe('User not found!');
        console.log(verifyLogin); //print jsonของproducts Body ออกมา 
 });
    });



