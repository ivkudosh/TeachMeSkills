import { Then } from "@cucumber/cucumber";
import { signInPage } from "../pageObjects/signInPage";
import { expect } from "chai";

Then(/^the user is on "Sign In" page$/, async () => {
    await signInPage.waitForPage();
});

Then(/^the user sees that url of the "Sign In" page is "(.+)"$/, async (expectedUrl: string) => {
    const actualUrl = await signInPage.getCurrentUrl();
    expect(actualUrl).to.be.equal(expectedUrl);
});

Then(/^the user clicks on "Sign In" input on "Sign In" page$/, async () => {
    await signInPage.clickOnSignInInput();
});

Then(/^the user sees flash error with text "(.+)" on "Sign In" page$/, async (expectedText: string) => {
    const actualText = await signInPage.getFlashErrorLabelText();
    expect(actualText).to.be.equal(expectedText);
});