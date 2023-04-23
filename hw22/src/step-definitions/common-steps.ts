import { Given, Then } from "@cucumber/cucumber";
import { Pages } from "../helpers/types";
import { PageFactory } from "../pageObjects/pageFactory";
import { BASE_URL } from "../helpers/constants";
import { randomName } from "../helpers/constants";
import { expect } from "chai";
import { homePage } from "../pageObjects/homePage";
import { logger } from "../helpers/logger";

Given(/^the user opens "(.+)" page via link$/, async (pageName: Pages) => {
    logger.info(`Navigating to ${pageName} page...`);
    await PageFactory.getPage(pageName).visitPage();
});

Then(/^the user is on "(.+)" page$/, async (pageName: Pages) => {
    logger.info(`Waiting redirection to ${pageName} page...`);
    await PageFactory.getPage(pageName).waitForPage();
});

Then(/^the user clicks Enter on keyboard on "(.+)" page$/, async (pageName: Pages) => {
    logger.info(`Clicking Enter on keyboard on ${pageName} page...`);
    await PageFactory.getPage(pageName).pressEnter();
});

Then(/^the user sees that url of the "(.+)" page is with random name$/, async (pageName: Pages) => {
    logger.info(`Getting url with random name on ${pageName} page...`);
    const actualUrl = await PageFactory.getPage(pageName).getCurrentUrl();
    logger.info(`Checking url: ${BASE_URL}/search?q=${randomName} with random name on ${pageName} page...`);
    expect(actualUrl).to.be.include(`${BASE_URL}/search?q=${randomName}`);
});

Then(/^the user sees that url of the "(.+)" page is "(.+)"$/, async (pageName: Pages, expectedUrl: string) => {
    logger.info(`Getting url on ${pageName} page...`);
    const actualUrl = await PageFactory.getPage(pageName).getCurrentUrl();
    logger.info(`Checking url: ${expectedUrl} on ${pageName} page...`);
    expect(actualUrl).to.be.equal(expectedUrl);
});

Then(/^the user sees that the text of the title on "(.+)" page is "(.+)"$/, async (pageName: Pages, expectedText: string) => {
    logger.info(`Getting title on ${pageName} page...`);
    const actualText = await PageFactory.getPage(pageName).getPageTitle();
    logger.info(`Checking title: ${expectedText} on ${pageName} page...`);
    expect(actualText).to.be.equal(expectedText);
});
