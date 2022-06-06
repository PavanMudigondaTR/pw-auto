import { Page } from '@playwright/test';

/**
 * This is a Page Object Model (POM) class for the application's Todo page. It
 * provides locators and common operations that make writing tests easier.
 * @see https://playwright.dev/docs/test-pom
 */
export class SummaryPage {
  /**
   * Locators are used to reflect a element on the page with a selector.
   * @see https://playwright.dev/docs/api/class-locator
   */

  placeOrderButton = this.page.locator('button:has-text("Place order")');

  reviewOrderHeading = this.page.locator('text=Review order');

  orderDetails = this.page.locator('text=Order details');

  constructor(public readonly page: Page) {}

  /**
   * Write your reusable functions or operations here
   * @see https://playwright.dev/docs/test-pom
   */
}
