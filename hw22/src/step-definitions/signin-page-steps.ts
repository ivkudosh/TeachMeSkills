import { Then } from "@cucumber/cucumber";
import { signInPage } from "../pageObjects/signInPage";
import { expect } from "chai";
import { logger } from "../helpers/logger";
import { Pages } from "../helpers/types";

Then(/^the user clicks on "Sign In" input on "Sign In" page$/, async () => {
    logger.info(`Clicking on "Sign In" button on ${Pages.SIGN_IN} page...`);
    await signInPage.clickOnSignInInput();
});

Then(/^the user sees flash error with text "Sign In" on "Sign In" page$/, async (expectedText: string) => {
    logger.info(`Getting flash error with text ${expectedText} on ${Pages.SIGN_IN} page...`);
    const actualText = await signInPage.getFlashErrorLabelText();
    logger.info(`Flash error with text ${expectedText} on ${Pages.SIGN_IN} page...`);
    expect(actualText).to.be.equal(expectedText);
});
