import { Given, Then } from "@cucumber/cucumber";
import { Pages } from "../helpers/types";
import { PageFactory } from "../pageObjects/pageFactory";
import { homePage } from "../pageObjects/homePage";
import { pricingPage } from "../pageObjects/pricingPage";
import { searchPage } from "../pageObjects/searchPage";
import { BASE_URL } from "../helpers/constants";
import { randomName } from "../helpers/constants";
import { expect } from "chai";
import { signInPage } from "../pageObjects/signInPage";



Given(/^the user opens "(.+)" page via link$/, async (pageName: Pages) => {
    await PageFactory.getPage(pageName).visitPage();
});

Then(/^the user is on "Home" page$/, async () => {
    await homePage.waitForPage();
});

Then(/^the user clicks Enter on keyboard on "Home" page$/, async () => {
    await homePage.pressEnter();
});

Then(/^the user is on "Pricing" page$/, async () => {
    await pricingPage.waitForPage();
});

Then(/^the user is on "Search" page$/, async () => {
    await searchPage.waitForPage();
});

Then(/^the user sees that url of the "Search" page with random name$/, async () => {
    const actualUrl = await searchPage.getCurrentUrl();
    expect(actualUrl).to.be.include(`${BASE_URL}/search?q=${randomName}`);
});

Then(/^the user is on "Sign In" page$/, async () => {
    await signInPage.waitForPage();
});

Then(/^the user sees that url of the "Sign In" page is "(.+)"$/, async (expectedUrl: string) => {
    const actualUrl = await signInPage.getCurrentUrl();
    expect(actualUrl).to.be.equal(expectedUrl);
});
