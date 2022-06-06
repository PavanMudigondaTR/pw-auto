import { Page } from '@playwright/test';

/**
 * This is a Page Object Model (POM) class for the application's Todo page. It
 * provides locators and common operations that make writing tests easier.
 * @see https://playwright.dev/docs/test-pom
 */
export class BuyNowPage {
  emailTextField: any;
  numberOfUsersTextField: any;
  plusIcon: any;
  minusIcon: any;
  addAdditionalFeaturesLink: any;
  removeAddedFeatureLink: any;
  buyNowButton: any;
  
  /**
   * Locators are used to reflect a element on the page with a selector.
   * @see https://playwright.dev/docs/api/class-locator
   */


  constructor(page: Page) {
    this.emailTextField = page.locator("input[name='email']");
    this.numberOfUsersTextField = page.locator('input[type=text]');
    this.plusIcon = page.locator('[aria-label="Increase Number of users"]');
    this.minusIcon = page.locator('[aria-label="Decrease Number of users"]');
    this.addAdditionalFeaturesLink = page.locator('text=+ Add additional features');
    this.removeAddedFeatureLink = page.locator('text=Remove');
    this.buyNowButton = page.locator('button:has-text=("Buy now")');
  }

  /**
   * Write your reusable functions or operations here
   * @see https://playwright.dev/docs/test-pom
   */

  async clickChooseAccountingFirmButton(text: string) {
    await this.emailTextField.fill(text);
    await this.emailTextField.press('Enter');
  }
}
