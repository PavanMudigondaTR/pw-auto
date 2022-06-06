import { test as base } from '@playwright/test';
import { Page } from 'playwright';
import { PlansPricingPage } from '@pages/PlansPricingPage.pom';
// import { BuyNowPage } from './BuyNowPage.pom';
// import { SignInPopUpPage } from '@pages/SignInPopUpPage.pom';
// import { CreateAccountPage } from '@pages/CreateAccountPage.pom';
// import { VerifyEmailPage } from '@pages/VerifyEmailPage.pom';
// import { MailinatorPage } from '@pages/MailinatorPage.pom';
// import { CheckoutPage } from '@pages/CheckoutPage.pom';
// import { SummaryPage } from '@pages/SummaryPage.pom';
// import { SignInExistingAccountPage } from './SignInExistingAccountPage.pom';

/**
 * This adds a PlansPricingPage fixture which has access to the page instance
 * @see https://playwright.dev/docs/test-fixtures
 */

 export const test = base.extend<{
  plansPricingPage: PlansPricingPage;
  // buyNowPage: BuyNowPage;
  // signInPopUpPage: SignInPopUpPage;
  // createAccountPage: CreateAccountPage;
  // verifyEmailPage: VerifyEmailPage;
  // mailinatorPage: MailinatorPage;
  // checkoutPage: CheckoutPage;
  // summaryPage: SummaryPage;
  // signInExistingAccountPage: SignInExistingAccountPage;
}>({
  plansPricingPage: async ({ page }, use) => {
      await use(new PlansPricingPage(page));
  },
  // buyNowPage: async ({ page }, use) => {
  //   await use(new BuyNowPage(page));
  // },
  // signInPopUpPage: async ({ page }, use) => {
  //   await use(new SignInPopUpPage(page));
  // },
  // createAccountPage: async ({ page }, use) => {
  //   await use(new CreateAccountPage(page));
  // },
  // verifyEmailPage: async ({ page }, use) => {
  //   await use(new VerifyEmailPage(page));
  // },
  // mailinatorPage: async ({ page }, use) => {
  //   await use(new MailinatorPage(page));
  // },
  // checkoutPage: async ({ page }, use) => {
  //   await use(new CheckoutPage(page));
  // },
  // summaryPage: async ({ page }, use) => {
  //   await use(new SummaryPage(page));
  // },
  // signInExistingAccountPage: async ({ page }, use) => {
  //   await use(new SignInExistingAccountPage(page));
  // },  
});

export const expect = test.expect;
