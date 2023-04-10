import { expect } from "chai";
import { getRandomNameGitHub } from "../random";
import { HomePage } from "../pageObjects/homePage";
import { PricingPage } from "../pageObjects/pricingPage";
import { SignInPage } from "../pageObjects/signInPage";
import { BASE_URL } from "../helpers/constants";
import { Plan, Pages } from "../helpers/types";
import { Key } from "selenium-webdriver";
import { PageFactory } from "../pageObjects/pageFactory";

const homePage = PageFactory.getPage(Pages.HOME) as HomePage;
const pricingPage = PageFactory.getPage(Pages.PRICING) as PricingPage;
const signInPage = PageFactory.getPage(Pages.SIGNIN) as SignInPage;

const nameGitHub = getRandomNameGitHub();

describe("GitHub tests", () => {
    before(async () => {
        await homePage.maximizeWindow();
    });

    beforeEach(async () => {
        await homePage.visitPage();
    });

    after(async () => {
        await homePage.closeDriver();
    });

    it('Should have correct title on Home page', async () => {
        await homePage.waitUntilTitleContains("GitHub: Let’s build from here · GitHub");
    });

    it(`Should have 'Sign In' button`, async () => {
        await homePage.clickOnSignInButton();
        await homePage.waitUntilUrlIs(`${BASE_URL}/login`);
    });

    it('Should be "Incorrect username or password." text after sign in with empty fields: Username or email address, Password', async () => {
        await homePage.clickOnSignInButton();
        await (await signInPage.waitUntilElementLocated('input[value="Sign in"]')).click();
        const invalidCredentialsMessage = await (await signInPage.waitUntilElementLocated('div[class="flash flash-full flash-error  "] div[aria-atomic="true"]')).getText();
        expect(invalidCredentialsMessage).to.be.equal("Incorrect username or password.");
    });

    it(`Should be ${Plan.FREE} text on the free plan`, async () => {
        await homePage.clickOnPriceButton();
        const freePlanTitleElement = await pricingPage.waitUntilElementLocated('div[data-min-seats="1"] h2[class="mb-2 h5-mktg"]');
        const freePlanTitleText = await freePlanTitleElement.getText();
        expect(freePlanTitleText).to.be.equal(Plan.FREE);
    });

    it('Should search by name', async () => {
        await homePage.clickOnSearch();
        await (await homePage.getSearchField()).sendKeys(nameGitHub);
        await homePage.sleepDriver(2000);
        await (await homePage.getSearchField()).sendKeys(Key.ENTER);
        await homePage.waitUntilUrlIs(`${BASE_URL}/search?q=${nameGitHub}`);
    });
});
