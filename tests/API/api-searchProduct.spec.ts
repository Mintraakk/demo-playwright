import { test, expect } from '@playwright/test';


test.describe('Positive API Test',() => { 
   test("POST to Search Product API should return 200 and show product list", async ({ request }) => {
    
    //method post   
    const searchProduct = "jean"; 
    const response = await request.post("https://automationexercise.com/api/searchProduct",
        {
            form: {
                search_product: searchProduct,
            },
        }
    );
    
    const searchProductBody = await response.json();
    expect(response.status()).toBe(200);
    expect(searchProductBody).toBeTruthy(); //ตรวจสอบว่าproductsBody มีข้อมูลอยู่จริง
    expect(searchProductBody.products.length).toBeGreaterThan(0); //ค้นหาแล้วได้ของกลับมาต้องไม่เป็น0
    console.log(searchProductBody); //print jsonของproducts Body ออกมา 
  });
});


test.describe('Negative case API Test',() => { 
   test("POST To Search Product without search_product parameter API should return 400", async ({ request }) => {
    
    //method Post   
    const response = await request.post("https://automationexercise.com/api/searchProduct",
    {
        data: {name: ""}, //Search Product without parameter
    }
);
    const searchProductBody = await response.json();
    expect(searchProductBody .responseCode).toBe(400);//API should Response Code: 400
    expect(searchProductBody.message).toBe('Bad request, search_product parameter is missing in POST request.'); 
    console.log ("Response Body:", searchProductBody );
});
});


