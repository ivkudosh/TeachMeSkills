import { Then } from "@cucumber/cucumber";
import { Pages } from "../helpers/types";
import { homePage } from "../pageObjects/homePage";
import { randomName } from "../helpers/constants";
import { logger } from "../helpers/logger";

Then(/^the user clicks on "Sign In" button on "(.+)" page$/, async (pageName: Pages) => {
    logger.info(`Clicking on "Sign In" button on ${pageName} page...`);
    await homePage.clickOnSignInButton();
});

Then(/^the user clicks on "Pricing" button on "(.+)" page$/, async (pageName: Pages) => {
    logger.info(`Clicking on "Pricing" button on ${pageName} page...`);
    await homePage.clickOnPriceButton();
});

Then(/^the user clicks on "Search" field on "(.+)" page$/, async (pageName: Pages) => {
    logger.info(`Clicking on "Search" field on ${pageName} page...`);
    await homePage.clickOnSearchField();
});

Then(/^the user fills random GitHub name in "Search" field on "(.+)" page$/, async (pageName: Pages) => {
    logger.info(`Setting random value in "Search" field on ${pageName} page...`);
    await homePage.setValueSearchField(randomName);
});

Then(/^the user waits until search input element is displayed on "(.+)" page$/, async (pageName: Pages) => {
    logger.info(`Waiting until search input element is displayed on ${pageName} page...`);
    await homePage.waitForDisplayedSearchInput();
});
