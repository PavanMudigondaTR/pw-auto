import { Page } from '@playwright/test';

/**
 * This is a Page Object Model (POM) class for the application's Todo page. It
 * provides locators and common operations that make writing tests easier.
 * @see https://playwright.dev/docs/test-pom
 */
export class SignInExistingAccountPage {
  /**
   * Locators are used to reflect a element on the page with a selector.
   * @see https://playwright.dev/docs/api/class-locator
   */

  TRLogo = this.page.locator('img[alt="Thomson Reuters"]');
  pageTitle = this.page.locator('text=Sign in to Digital Commerce Platform (DCP)');
  emailTextField = this.page.locator('input[name="username"]');
  signInButton = this.page.locator('button:has-text("Sign in")');

  passwordTextField = this.page.locator('input[name="password"]');

  resetPasswordLink = this.page.locator('text=Reset your password');

  editUserNameLink = this.page.locator('text=Edit');

  constructor(public readonly page: Page) {}
  /**
   * Write your reusable functions or operations here
   * @see https://playwright.dev/docs/test-pom
   */
}
