import { Then } from "@cucumber/cucumber";
import { homePage } from "../pageObjects/homePage";
import { expect } from "chai";
import { randomName } from "../helpers/constants";

Then(/^the user sees that the text of the title on "Home" page is "(.+)"$/, async (expectedText: string) => {
    const actualText = await homePage.getPageTitle();
    expect(actualText).to.be.equal(expectedText);
});

Then(/^the user clicks on "Sign In" button on "Home" page$/, async () => {
    await homePage.clickOnSignInButton();
});

Then(/^the user clicks on "Pricing" button on "Home" page$/, async () => {
    await homePage.clickOnPriceButton();
});

Then(/^the user clicks on "Search" field on "Home" page$/, async () => {
    await homePage.clickOnSearchField();
});

Then(/^the user fills random GitHub name in "Search" field on "Home" page$/, async () => {
    await homePage.setValueSearchField(randomName);
});

Then(/^the user waits until search input element is displayed on "Home" page$/, async () => {
    await homePage.waitForDisplayedSearchInput();
});
