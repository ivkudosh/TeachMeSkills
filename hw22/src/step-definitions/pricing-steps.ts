import { Then } from "@cucumber/cucumber";
import { pricingPage } from "../pageObjects/pricingPage";
import { expect } from "chai";
import { logger } from "../helpers/logger";

Then(/^the user sees "(.+)" plan text on "Pricing" page$/, async (expectedText: string) => {
    logger.info(`Getting ${expectedText} plan text on "Pricing" page...`);
    const actualText = await pricingPage.getFreePlanLabelText();
    logger.info(`Checking ${expectedText} plan text on "Pricing" page...`);
    expect(actualText).to.be.equal(expectedText);
});
