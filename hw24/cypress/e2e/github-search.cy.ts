import { PageFactory } from "../support/pageObjects/pageFactory";
import { Pages } from "../support/types";
import { HomePage } from "../support/pageObjects/homePage";
import { getRandomNameGitHub } from "../support/random";
import { BASE_URL } from "../support/constants";

const homePage = PageFactory.getPage(Pages.HOME) as HomePage;

const randomName = getRandomNameGitHub();

describe('GitHub Official Site', () => {
    before(() => {
        homePage.visitPage();
    });

    it(`Should search by name`, () => {
        homePage.clickOnSearch();
        homePage.searchFor(randomName);
        const actualUrl = homePage.getPageUrl();
        actualUrl.should("include", `${BASE_URL}/search?q=${randomName}`);
    });

    it('should wait for the request to finish', () => {
        cy.intercept('POST', 'https://github.com/_graphql/GetSuggestedNavigationDestinations').as('GetSuggestedNavigationDestinations');
        homePage.visitPage();
        homePage.clickOnSearch();
        cy.wait('@GetSuggestedNavigationDestinations').then(data => {
            expect(data.response?.statusCode).to.eq(200);
            expect(data.response?.body.data.suggestions.nodes).to.have.length(0);
        });
    });
});
