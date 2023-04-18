import { Then } from "@cucumber/cucumber";
import { signInPage } from "../pageObjects/signInPage";
import { expect } from "chai";

Then(/^the user clicks on "Sign In" input on "Sign In" page$/, async () => {
    await signInPage.clickOnSignInInput();
});

Then(/^the user sees flash error with text "(.+)" on "Sign In" page$/, async (expectedText: string) => {
    const actualText = await signInPage.getFlashErrorLabelText();
    expect(actualText).to.be.equal(expectedText);
});
