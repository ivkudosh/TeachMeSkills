import { Then } from "@cucumber/cucumber";
import { pricingPage } from "../pageObjects/pricingPage";
import { expect } from "chai";

Then(/^the user sees "(.+)" plan text on "Pricing" page$/, async (expectedText: string) => {
    const actualText = await pricingPage.getFreePlanLabelText();
    expect(actualText).to.be.equal(expectedText);
});
