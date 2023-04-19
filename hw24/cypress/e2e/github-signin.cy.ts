import { PageFactory } from "../support/pageObjects/pageFactory";
import { Pages } from "../support/types";
import { INCORRECT_CREDENTIALS_MESSAGE } from "../support/constants";
import { HomePage } from "../support/pageObjects/homePage";
import { SignInPage } from "../support/pageObjects/signInPage";

const homePage = PageFactory.getPage(Pages.HOME) as HomePage;
const signInPage = PageFactory.getPage(Pages.SIGNIN) as SignInPage;

describe('GitHub Official Site', () => {
    before(() => {
        homePage.visitPage();
    });

    it(`Should be "${INCORRECT_CREDENTIALS_MESSAGE}" text after sign in with empty fields: Username or email address, Password`, () => {
        homePage.clickOnSignInButton();
        signInPage.clickOnSignInInput();
        signInPage.getFlashErrorLabelText(INCORRECT_CREDENTIALS_MESSAGE);
    });
});
