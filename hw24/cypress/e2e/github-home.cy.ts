import { PageFactory } from "../support/pageObjects/pageFactory";
import { Pages } from "../support/types";
import { BASE_URL, homePageTitleText } from "../support/constants";
import { HomePage } from "../support/pageObjects/homePage";

const homePage = PageFactory.getPage(Pages.HOME) as HomePage;

describe('GitHub Official Site', () => {
    beforeEach(() => {
        homePage.visitPage();
    });

    it('Should have correct title on Home page', () => {
        homePage.waitUntilTitleIs(homePageTitleText);
    });

    it('Should have "Sign In" button', () => {
        homePage.clickOnSignInButton();
        homePage.waitUntilUrlIs(`${BASE_URL}/login`);
    });
});
