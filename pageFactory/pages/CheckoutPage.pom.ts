import { Page } from '@playwright/test';

/**
 * This is a Page Object Model (POM) class for the application's Todo page. It
 * provides locators and common operations that make writing tests easier.
 * @see https://playwright.dev/docs/test-pom
 */
export class CheckoutPage {
  /**
   * Locators are used to reflect a element on the page with a selector.
   * @see https://playwright.dev/docs/api/class-locator
   */

   pageHeading = page.locator('text=Checkout');
   firstNameBox = page.locator('input[name="firstName"]');
   lastNameBox = page.locator('input[name="lastName"]');
   businessEmailBox = page.locator('input[name="businessEmailAddress"]');
   orgTypeDropDown = page.locator('select[name="typeOfOrganization"]');
   orgNameBox = page.locator('input[name="organizationName"]');
   continueToPaymentButton = page.locator('button:has-text("Continue to payment")');
   billingAddressLabel = page.locator('text=Billing address');
   addressFirstLineBox = page.locator('input[role="combobox"]');
   addressFirstLineDropDown = page.locator('button:has-text("`${address}`")');
   addressSecondLineBox = page.locator('input[name="addressLineOptional"]');
   addressCityBox = page.locator('input[name="city"]');
   phoneNumberBox = page.locator('input[name="phoneNumber"]');
   this.zipCodeBox = page.locator('input[name="postalCode"]');
   this.selectBankAccountRadio = page.locator('[type=radio]:left-of(:text("Bank account"))');
   this.selectCreditCardRadio = page.locator('[type=radio]:left-of(:text("Credit card"))');
   this.routingNumberBox = page.locator('input[name="routingNumber"]');
   this.accountNumberBox = page.locator('input[name="accountNumber"]');
   this.termsCheck = page.locator('text=I acknowledge');
   this.continueToAddUserButton = page.locator('button:has-text("Continue to add user")');
   this.addFirstUserLabel = page.locator('button:has-text("Add first user")');
   this.primaryUserYesRadio = page.locator('[type=radio]:left-of(:text("Yes"))');
   this.primaryUserNoRadio = page.locator('[type=radio]:left-of(:text("No"))');
   this.primaryFirstNameBox = page.locator('id=addUserFirstName');
   this.primaryLastNameBox = page.locator('addUserLastName');
   this.primaryEmailBox = page.locator('emailAddress');
   this.positionDropDown = page.locator('select[name="position"]');
   this.reviewOrderButton = page.locator('button:has-text("Review order")');

  constructor(public readonly page: Page) {}
  /**
   * Write your reusable functions or operations here
   * @see https://playwright.dev/docs/test-pom
   */
}
