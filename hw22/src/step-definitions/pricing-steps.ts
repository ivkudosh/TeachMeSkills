import { Then } from "@cucumber/cucumber";
import { pricingPage } from "../pageObjects/pricingPage";
import { expect } from "chai";
import { logger } from "../helpers/logger";
import { Pages } from "../helpers/types";

Then(/^the user sees "(.+)" plan text on "(.+)" page$/, async (expectedText: string, pageName: Pages) => {
    logger.info(`Getting ${expectedText} plan text on ${pageName} page...`);
    const actualText = await pricingPage.getFreePlanLabelText();
    logger.info(`Checking ${expectedText} plan text on ${pageName} page...`);
    expect(actualText).to.be.equal(expectedText);
});
