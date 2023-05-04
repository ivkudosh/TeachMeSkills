import { Then } from "@cucumber/cucumber";
import { signInPage } from "../pageObjects/signInPage";
import { expect } from "chai";
import { logger } from "../helpers/logger";

Then(/^the user clicks on "Sign In" input on "Sign In" page$/, async () => {
    logger.info(`Clicking on "Sign In" button on "Sign In" page...`);
    await signInPage.clickOnSignInInput();
});

Then(/^the user sees flash error with text "(.+)" on "Sign In" page$/, async (expectedText: string) => {
    logger.info(`Getting flash error with text ${expectedText} on "Pricing" page...`);
    const actualText = await signInPage.getFlashErrorLabelText();
    logger.info(`flash error with text ${expectedText} on "Pricing" page...`);
    expect(actualText).to.be.equal(expectedText);
});
