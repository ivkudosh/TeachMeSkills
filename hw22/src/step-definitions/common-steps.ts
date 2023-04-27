import { Given, Then } from "@cucumber/cucumber";
import { Pages } from "../helpers/types";
import { PageFactory } from "../pageObjects/pageFactory";
import { BASE_URL } from "../helpers/constants";
import { randomName } from "../helpers/constants";
import { expect } from "chai";

Given(/^the user opens "(.+)" page via link$/, async (pageName: Pages) => {
    await PageFactory.getPage(pageName).visitPage();
});

Then(/^the user is on "(.+)" page$/, async (pageName: Pages) => {
    await PageFactory.getPage(pageName).waitForPage();
});

Then(/^the user clicks Enter on keyboard on "(.+)" page$/, async (pageName: Pages) => {
    await PageFactory.getPage(pageName).pressEnter();
});

Then(/^the user sees that url of the "(.+)" page is with random name$/, async (pageName: Pages) => {
    const actualUrl = await PageFactory.getPage(pageName).getCurrentUrl();
    expect(actualUrl).to.be.include(`${BASE_URL}/search?q=${randomName}`);
});

Then(/^the user sees that url of the "(.+)" page is "(.+)"$/, async (pageName: Pages, expectedUrl: string) => {
    const actualUrl = await PageFactory.getPage(pageName).getCurrentUrl();
    expect(actualUrl).to.be.equal(expectedUrl);
});

Then(/^the user sees that the text of the title on "(.+)" page is "(.+)"$/, async (pageName: Pages, expectedText: string) => {
    const actualText = await PageFactory.getPage(pageName).getPageTitle();
    expect(actualText).to.be.equal(expectedText);
});
