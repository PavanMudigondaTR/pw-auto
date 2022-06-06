import { PlansPricingPage } from '@pages/PlansPricingPage.pom';
import { test,expect } from '../pageFactory/pages/fixtures';

test.describe('Grouping tests with test describe', ()=> {
    test('@initial Test to check everything is working', async ({
        browser,
        page,
        plansPricingPage
    }) => {
        await test.step('Step 1', async () => {
            console.log('Loading test page...');
            const context = await browser.newContext({
                httpCredentials: {
                  username: 'ams_dev',
                  password: 'AMS_65dev',
                },
              });
              const page = await context.newPage();
              await page.goto('https://tax-tr-com-dev-ams.ewp.thomsonreuters.com/en-us/products/checkpoint-edge/plans-pricing');
        })
        await test.step('Step 2', async () => {
            console.log('step 2');
            await plansPricingPage.verifyPageHeading();
        });
        await test.step('Step 3', async () => {
            console.log('step 3');
            // await plansPricingPage.clickChooseAccountingFirmButton();
        });
        await test.step('Step 4', async () => {
            console.log('step 4');
            // await plansPricingPage.clickBusinessSectorNextButton();
        });
    });
});