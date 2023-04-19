import { PageFactory } from "../support/pageObjects/pageFactory";
import { Pages, Plan } from "../support/types";
import { HomePage } from "../support/pageObjects/homePage";
import { PricingPage } from "../support/pageObjects/pricingPage";

const homePage = PageFactory.getPage(Pages.HOME) as HomePage;
const pricingPage = PageFactory.getPage(Pages.PRICING) as PricingPage;

describe('GitHub Official Site', () => {
    before(() => {
        homePage.visitPage();
    });

    it(`Should be ${Plan.FREE} text on the free plan`, () => {
        homePage.clickOnPriceButton();
        pricingPage.getFreePlanLabelText();
    });
});
