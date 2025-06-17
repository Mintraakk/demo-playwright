import { type Locator, type Page, expect } from '@playwright/test';

export class SignupNewUser {
    readonly page: Page;
    readonly titleEnterAccountInformation: Locator;
    readonly signupTextName: Locator;
    readonly signupTextEmail: Locator;
    readonly signupButton: Locator;
    readonly radioboxPrefixMr: Locator;
    readonly radioboxPrefixMrs: Locator;
    readonly signupTextPassword: Locator;
    readonly titleDateOfBirth: Locator;
    readonly dropDownDay: Locator;
    readonly dropDownMonth: Locator;
    readonly dropDownYear: Locator;
    readonly newsletterCheckbox: Locator;
    readonly receiveSpecialCheckbox: Locator;
    readonly titleAddressInformation: Locator;
    readonly signupTextFirstName: Locator;
    readonly signupTextLastName: Locator;
    readonly signupTextCompany: Locator;
    readonly signupTextAddress1: Locator;
    readonly signupTextAddress2: Locator;
    readonly dropdownCountry: Locator;
    readonly signupTextState: Locator; 
    readonly signupTextCity: Locator;
    readonly signupTextZipcode: Locator;
    readonly signupTextMobile: Locator;
    readonly createAccountButton: Locator;
    readonly titleAccountCreated: Locator;
    readonly continueButton: Locator;

    constructor (page: Page) {
        this.page = page;
        this.titleEnterAccountInformation = page.getByText("Enter Account Information");
        this.radioboxPrefixMr = page.locator("#id_gender1");
        this.radioboxPrefixMrs = page.locator("#id_gender2");
        this.signupTextName = page.locator("#name");
        this.signupTextEmail = page.locator("#email");
        this.signupTextPassword = page.locator("#password");
        this.titleDateOfBirth = page.getByLabel("Date of Birth");
        this.dropDownDay = page.locator("#days");
        this.dropDownMonth = page.locator("#months");
        this.dropDownYear = page.locator("#years");
        this.newsletterCheckbox = page.locator("#newsletter");
        this.receiveSpecialCheckbox = page.locator("#optin"); 
        this.titleAddressInformation = page.getByText("Address Information");
        this.signupTextFirstName = page.locator("#first_name");
        this.signupTextLastName = page.locator("#last_name");
        this.signupTextCompany = page.locator("#company");
        this.signupTextAddress1 = page.locator("#address1");
        this.signupTextAddress2 = page.locator("#address2");
        this.dropdownCountry = page.locator("#country");
        this.signupTextState = page.locator("#state");
        this.signupTextCity = page.locator("#city");
        this.signupTextZipcode = page.locator("#zipcode");
        this.signupTextMobile = page.locator("#mobile_number");
        this.createAccountButton = page.locator("button[data-qa='create-account']");
        this.titleAccountCreated = page.getByText('Account Created!');
        this.continueButton = page.locator(".btn.btn-primary");
    }
 
    async verifyEnterAccountInformationIsVisible() {
        await expect (this.titleEnterAccountInformation) .toBeVisible();
    }
       async selectTitlePrefix (prefix: string) { //select Prefix radiobox
        await this.page.click(`text=${prefix}`); //`` ตัวแปร prefix และนำมาแทนที่ในสตริงนั้นๆ
        //  จะถูกประมวลผลเป็น "text=Mrs." ตามdataที่ระบุ
    }

    async verifyInputTextName(name: string) {
        expect(this.signupTextName).toBeVisible();
        expect(this.signupTextName).toHaveValue(name);
    }
    async verifyInputTextEmail (email: string) {
        expect(this.signupTextEmail).toBeVisible();
        expect(this.signupTextEmail).toHaveValue(email);
    }

    async inputTextPassword(password: string) {
    expect(this.signupTextPassword).toBeVisible();
    await this.signupTextPassword.fill(password);
    }

    async selectDateOfBerth (day:string, month: string, year: string) {
        await this.dropDownDay.selectOption(day);
        await this.dropDownMonth.selectOption(month);
        await this.dropDownYear.selectOption(year);
    }
    async clickCheckboxNewsletter () {
        expect(this.newsletterCheckbox).toBeVisible();
        await this.newsletterCheckbox.check();
    }
    async clickCheckboxReceiveSpecial () {
        expect(this.receiveSpecialCheckbox).toBeVisible();
        await this.newsletterCheckbox.check();
    }
    async verifyTitleAddressInformationIsVisible () {
        expect(this.titleAddressInformation).toBeVisible();
    }
    async inputTextFirstName(firstName: string) {
        expect(this.signupTextFirstName).toBeVisible();
        await this.signupTextFirstName.fill(firstName);
    }
    async inputTextLastName(lastName: string){
        expect(this.signupTextLastName).toBeVisible();
        await this.signupTextLastName.fill(lastName);
    }
    async inputTextCompany (Company: string){
        expect(this.signupTextCompany).toBeVisible();
        await this.signupTextCompany.fill(Company);
    }
    async inputTextAddress1 (address1: string){
        expect(this.signupTextAddress1).toBeVisible();
        await this.signupTextAddress1.fill(address1);
    }
       async inputTextAddress2 (address2: string){
        expect(this.signupTextAddress2).toBeVisible();
        await this.signupTextAddress2.fill(address2);
    }
       async selectDropdownCountry (country: string){
        expect(this.dropdownCountry).toBeVisible();
        await this.dropdownCountry.selectOption(country);
       }
    async inputTextState(state: string){
        expect(this.signupTextState).toBeVisible();
        await this.signupTextState.fill(state);
    }
     async inputTextCity(city: string){
        expect(this.signupTextCity).toBeVisible();
        await this.signupTextCity.fill(city);
    }
     async inputTextZipcode(zipcode: string){
        expect(this.signupTextZipcode).toBeVisible();
        await this.signupTextZipcode.fill(zipcode);
    }
    async inputTextMobileNumber(mobileNumber: string){
        expect(this.signupTextMobile).toBeVisible();
        await this.signupTextMobile.fill(mobileNumber);
    }
     async clickCreateAccountButton (){
        expect(this.createAccountButton).toBeVisible();
        await this.createAccountButton.click();
    }
    async verifyAccountCreatedIsVisible(){
       await expect(this.titleAccountCreated).toBeVisible();
    }
    async clickContinueButton (){
        expect(this.continueButton).toBeVisible();
        await this.continueButton.click();
}
}