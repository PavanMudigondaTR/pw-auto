import { Page } from '@playwright/test';

/**
 * This is a Page Object Model (POM) class for the application's Todo page. It
 * provides locators and common operations that make writing tests easier.
 * @see https://playwright.dev/docs/test-pom
 */
export class MailinatorPage {
  /**
   * Locators are used to reflect a element on the page with a selector.
   * @see https://playwright.dev/docs/api/class-locator
   */

  publicMailBox = this.page.locator('[placeholder="Enter Public Mailinator Inbox"]');
  goHomeButton = this.page.locator('text=GO');

  emailRecord = this.page.locator('text=Verify Your Account');

  jsonTab = this.page.locator('text=JSON');

  jsonContent = this.page.locator('');

  verificationCode = this.page.locator('');

  constructor(public readonly page: Page) {}

  /**
   * Write your reusable functions or operations here
   * @see https://playwright.dev/docs/test-pom
   */
}
