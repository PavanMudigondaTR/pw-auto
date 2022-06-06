import { Page } from '@playwright/test';
import {test, expect} from './fixtures';

/**
 * This is a Page Object Model (POM) class for the application's Todo page. It
 * provides locators and common operations that make writing tests easier.
 * @see https://playwright.dev/docs/test-pom
 */
export class PlansPricingPage {
  homePageHeading: any;
  chooseAccountingFirmButton: any;
  accountingFirmUnselectButton: any;
  accountingFirmSelectedTick: any;
  chooseCorporationButton: any;
  corporationUnselectButton: any;
  businessSectorNextButton: any;
  taxRadioButton: any;
  accountingRadioButton: any;
  auditRadioButton: any;
  practiceAreaNextButton: any;
  compareRecommendedPlans: any;
  numberOfUsersTextField: any;
  goodPlanButton: any;
  betterPlanButton: any;
  bestPlanButton: any;
  planNextButton: any;
  stateReportersDropDown: any;
  selectState: any;
  stateReportersNextButton: any;
  addon192DollarsPlanButton: any;
  addon240DollarsPlanButton: any;
  confirmationOnSelectionOfStates: any;
  continueToYourPlanSummaryButton: any;
  /**
   * Locators are used to reflect a element on the page with a selector.
   * @see https://playwright.dev/docs/api/class-locator
   */


  constructor(public readonly page: Page) {
    this.page = page;
    this.homePageHeading = page.locator(
      "text=Checkpoint Edge plans and pricing"
    );
    this.chooseAccountingFirmButton = page.locator(
      'button:has-text("Choose Accounting firm")'
    );
    this.accountingFirmUnselectButton = page.locator(
      'button:has-text("Accounting firm Selected")'
    );
    this.accountingFirmSelectedTick = page.locator(
      "span.tr-SelectionLabel-title.tr-Typography.tr-Typography--left"
    );
    this.chooseCorporationButton = page.locator(
      `//span[contains(text(),'Choose Corporation')]`
    );
    this.corporationUnselectButton = page.locator(
      `//span[contains(text(),'Corporation Selected')]`
    );
    this.businessSectorNextButton = page.locator(
      `#content-2 button:has-text("Next step")`
    );
    this.taxRadioButton = page.locator(`text=TaxReceive access >> span`);
    this.accountingRadioButton = page.locator(
      `text=AccountingReceive access >> span`
    );
    this.auditRadioButton = page.locator(`text=AuditReceive access >> span`);
    this.practiceAreaNextButton = page.locator(
      `#content-4 button:has-text("Next step")`
    );
    this.compareRecommendedPlans = page.locator(
      "text=Compare recommended plans"
    );
    this.numberOfUsersTextField = page.locator("id=numberofusers");
    this.goodPlanButton = page.locator(
      "text=$114.00/MonthSelect Plan >> button"
    );
    this.betterPlanButton = page.locator(
      "text=$175.00/MonthSelect Plan >> button"
    );
    this.bestPlanButton = page.locator(
      "text=$236.00/MonthSelect Plan >> button"
    );
    this.planNextButton = page.locator(
      '#content-6 button:has-text("Next step")'
    );
    this.stateReportersDropDown = page.locator(
      'div[role="combobox"] >> text=Select'
    );
    this.selectState = page.locator(
      'div[role="combobox"] >> text=place holder'
    );
    this.stateReportersNextButton = page.locator(
      '#content-14 div:has-text("Next step") >> nth=2'
    );
    this.addon192DollarsPlanButton = page.locator(
      "text=Checkpoint Catalyst, Annual subscription"
    );
    this.addon240DollarsPlanButton = page.locator("text=Checkpoint 50 States");
    this.confirmationOnSelectionOfStates = page.locator(
      "text=Youve successfully selected 3 State Reporters."
    );
    this.continueToYourPlanSummaryButton = page.locator(
      'button:has-text("Continue to your plan summary")'
    );
  }

  async verifyPageHeading(): Promise<void> {
    await expect(this.homePageHeading).toHaveText(
      "Checkpoint Edge plans and pricing"
    );
  }

  async clickChooseAccountingFirmButton(): Promise<void> {
    await this.chooseAccountingFirmButton.click();
  }

  async verifyUnselectButtonisDisplayed(): Promise<void> {
    await this.accountingFirmUnselectButton.isEnabled();
  }
  async clickBusinessSectorNextButton(): Promise<void> {
    await this.businessSectorNextButton.click();
  }

  async clickTaxRadioButton(): Promise<void> {
    await this.taxRadioButton.click();
  }

  async clickPracticeAreaNextButton(): Promise<void> {
    await this.practiceAreaNextButton.click();
  }
  async verifyRecommendedPlansSectionDisplay(): Promise<void> {
    await this.compareRecommendedPlans.isVisible();
  }
  async enterSelectNumberOfUsers(users = "1"): Promise<void> {
    await this.numberOfUsersTextField.fill(users);
  }

  async selectGoodPlanButton(): Promise<void> {
    await this.goodPlanButton.click();
  }

  async selectCustomizePlanNextButton(): Promise<void> {
    await this.planNextButton.click();
  }


}
