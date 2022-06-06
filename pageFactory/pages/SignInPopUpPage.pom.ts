import { Page } from '@playwright/test';

/**
 * This is a Page Object Model (POM) class for the application's Todo page. It
 * provides locators and common operations that make writing tests easier.
 * @see https://playwright.dev/docs/test-pom
 */
export class SignInPopUpPage {
  /**
   * Locators are used to reflect a element on the page with a selector.
   * @see https://playwright.dev/docs/api/class-locator
   */
  signInHeadingButton = this.page.locator('h2:has-text("Sign in")');
  signInToContinueButton = this.page.locator('button:has-text("Sign in to continue")');
  createAnAccountButton = this.page.locator('button:has-text("Create an account")');
  closeButton = this.page.locator('[aria-label="Close login popup"]');

  constructor(public readonly page: Page) {}
  /**
   * Write your reusable functions or operations here
   * @see https://playwright.dev/docs/test-pom
   */
}
