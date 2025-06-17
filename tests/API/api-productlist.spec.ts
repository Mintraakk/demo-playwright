import { test, expect } from '@playwright/test';
import * as data from '../../data/productList.json';


test.describe('Positive API Test',() => { 
   test("Get All Products List API should return 200 ", async ({ request }) => {
    
    const response = await request.get(data.productURL); //method GET
    expect(response.status()).toBe(200);

    const productsBody = await response.json();
    expect(productsBody).toBeTruthy(); //ตรวจสอบว่าproductsBody มีข้อมูลอยู่จริง
    console.log(productsBody); //print jsonของproducts Body ออกมา 
  });
});




test.describe('Negative API Test',() => { 
    test("Post to products list should not be allowed", async ({request}) => {
        const response = await request.post(data.productURL,
    {
        data: {name: "ABCD Product"}, //ส่ง data เข้าไป
    }
);
    const productsBody = await response.json();
    console.log ("Response Body:", productsBody );
    //Response Code: 405
    expect(productsBody .responseCode).toBe(405);
    //Response Message: This request method is not supported.
    expect(productsBody .message).toBe("This request method is not supported.");

});

});