import { Page } from '@playwright/test';

/**
 * This is a Page Object Model (POM) class for the application's Todo page. It
 * provides locators and common operations that make writing tests easier.
 * @see https://playwright.dev/docs/test-pom
 */

export class CreateAccountPage {
  /**
   * Locators are used to reflect a element on the page with a selector.
   * @see https://playwright.dev/docs/api/class-locator
   */

  pageHeading = this.page.locator('text=Create an account');
  signInLink = this.page.locator('text=sign in to your existing account');

  firstNameBox = this.page.locator('#firstName');
  lastNameBox = this.page.locator('#lastName');
  emailBox = this.page.locator('#email');

  newPassword = this.page.locator('#newPassword');

  confirmNewPassword = this.page.locator('#passwordConfirmation');

  preferredLanguage = this.page.locator('id=expand-button-1');

  AcceptTerms = this.page.locator('.Checkbox-checkbox');
  ContinueButton = this.page.locator('button:has-text("Continue")');

  constructor(public readonly page: Page) {}
  /**
   * Write your reusable functions or operations here
   * @see https://playwright.dev/docs/test-pom
   */
}
