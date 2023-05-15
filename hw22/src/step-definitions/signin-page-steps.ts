import { Then } from "@cucumber/cucumber";
import { signInPage } from "../pageObjects/signInPage";
import { expect } from "chai";
import { logger } from "../helpers/logger";
import { Pages } from "../helpers/types";

Then(/^the user clicks on "Sign In" input on "(.+)" page$/, async (pageName: Pages) => {
    logger.info(`Clicking on "Sign In" button on ${pageName} page...`);
    await signInPage.clickOnSignInInput();
});

Then(/^the user sees flash error with text "(.+)" on "(.+)" page$/, async (expectedText: string, pageName: Pages) => {
    logger.info(`Getting flash error with text ${expectedText} on ${pageName} page...`);
    const actualText = await signInPage.getFlashErrorLabelText();
    logger.info(`Flash error with text ${expectedText} on ${pageName} page...`);
    expect(actualText).to.be.equal(expectedText);
});
