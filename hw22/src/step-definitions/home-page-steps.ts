import { Then } from "@cucumber/cucumber";
import { homePage } from "../pageObjects/homePage";
import { randomName } from "../helpers/constants";
import { logger } from "../helpers/logger";

Then(/^the user clicks on "Sign In" button on "Home" page$/, async () => {
    logger.info(`Clicking on "Sign In" button on "Home" page...`);
    await homePage.clickOnSignInButton();
});

Then(/^the user clicks on "Pricing" button on "Home" page$/, async () => {
    logger.info(`Clicking on "Pricing" button on "Home" page...`);
    await homePage.clickOnPriceButton();
});

Then(/^the user clicks on "Search" field on "Home" page$/, async () => {
    logger.info(`Clicking on "Search" field on "Home" page...`);
    await homePage.clickOnSearchField();
});

Then(/^the user fills random GitHub name in "Search" field on "Home" page$/, async () => {
    logger.info(`Setting random value in "Search" field on "Home" page...`);
    await homePage.setValueSearchField(randomName);
});

Then(/^the user waits until search input element is displayed on "Home" page$/, async () => {
    logger.info(`Waiting until search input element is displayed on "Home" page...`);
    await homePage.waitForDisplayedSearchInput();
});
