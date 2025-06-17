import { test, expect } from '@playwright/test';
import * as data from '../../data/brandProduct.json';

test.describe('Positive API Test',() => { 
   test("Get All Brands List API should return 200 ", async ({ request }) => {
    
    //method GET
    const response = await request.get(data.brandProductURL); //goto endpoint
    expect(response.status()).toBe(200);

    const brandsBody = await response.json();
    expect(brandsBody).toBeTruthy(); //ตรวจสอบว่าproductsBody มีข้อมูลอยู่จริง
    console.log(brandsBody); //print jsonของproducts Body ออกมา 
  });
});


test.describe('Negative API Test',() => { 
test("Put to all Brands API should not be allowed", async ({ request }) => {
    const response = await request.put(data.brandProductURL,
        { 
          data: 
          { 
            "id": 1,
            "brand": "Zara"
          }
    },
);
const brandsBody= await response.json();
    //Response Code: 405
    expect(brandsBody .responseCode).toBe(405);
    //Response Message: This request method is not supported.
    expect(brandsBody .message).toBe("This request method is not supported.");
    console.log ("Response Body:", brandsBody );

});
    });
