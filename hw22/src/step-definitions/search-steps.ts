import { Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { searchPage } from "../pageObjects/searchPage";
import { randomName } from "../helpers/constants";
import { BASE_URL } from "../helpers/constants";

Then(/^the user is on "Search" page$/, async () => {
    await searchPage.waitForPage();
});

Then(/^the user sees that url of the "Search" page with random name$/, async () => {
    const actualUrl = await searchPage.getCurrentUrl();
    expect(actualUrl).to.be.equal(`${BASE_URL}/search?q=${randomName}&type=`);
});




