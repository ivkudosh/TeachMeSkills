import { test } from "@playwright/test";
import { HomePage } from "../src/pageObjects/homePage";
import { SignInPage } from "../src/pageObjects/signInPage";
import { PricingPage } from "../src/pageObjects/pricingPage";
import { BASE_URL, INCORRECT_CREDENTIALS_MESSAGE, BASE_TITLE } from "../src/helpers/constants";
import { Plan, Pages } from "../src/helpers/types";
import { PageFactory } from "../src/pageObjects/pageFactory";
import { randomName } from "../src/helpers/random-name";

let homePage: HomePage;
let signInPage: SignInPage;
let pricingPage: PricingPage;

test.describe('Github Official Site tests', async () => {
    test.beforeEach(async ({ page }) => {
        homePage = PageFactory.getPage(page, Pages.HOME) as HomePage;
        await homePage.visitPage();
    });

    test('Should have correct page title', async ({ page }) => {
        await homePage.waitForTitleToBe(BASE_TITLE);
    });

    test('Should have "Sign In" button', async ({ page }) => {
        await homePage.clickOnSignInButton();
        await homePage.waitForUrlToBe(`${BASE_URL}/login`);
    });

    test(`Should be "${INCORRECT_CREDENTIALS_MESSAGE}" text after sign in with empty fields: Username or email address, Password`, async ({ page }) => {
        signInPage = PageFactory.getPage(page, Pages.SIGNIN) as SignInPage;

        await homePage.clickOnSignInButton();
        await signInPage.clickOnSignInInput();
        await signInPage.getFlashErrorLabelText();
    });

    test(`Should be ${Plan.FREE} text on the free plan`, async ({ page }) => {
        pricingPage = PageFactory.getPage(page, Pages.PRICING) as PricingPage;

        await homePage.clickOnPriceButton();
        await pricingPage.getFlashErrorLabelText(Plan.FREE);
    });

    test(`Should search by name`, async ({ page }) => {
        await homePage.clickOnSearch();
        await homePage.searchFor(randomName);
        await homePage.waitForUrlToBe(`${BASE_URL}/search?q=${randomName}`);
    });
});