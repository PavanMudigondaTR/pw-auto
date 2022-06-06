import { Page } from '@playwright/test';

/**
 * This is a Page Object Model (POM) class for the application's Todo page. It
 * provides locators and common operations that make writing tests easier.
 * @see https://playwright.dev/docs/test-pom
 */
export class VerifyEmailPage {
  /**
   * Locators are used to reflect a element on the page with a selector.
   * @see https://playwright.dev/docs/api/class-locator
   */

  firstBox = this.page.locator('[aria-label="1 field out of 5"]');

  secondBox = this.page.locator('[aria-label="2 field out of 5"]');

  thirdBox = this.page.locator('[aria-label="3 field out of 5"]');

  fourthBox = this.page.locator('[aria-label="4 field out of 5"]');

  fifthBox = this.page.locator('[aria-label="5 field out of 5"]');

  createYourAccountButton = this.page.locator('button:has-text("Create your account")');

  constructor(public readonly page: Page) {}

  /**
   * Write your reusable functions or operations here
   * @see https://playwright.dev/docs/test-pom
   */
}
