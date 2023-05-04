import { BasePage } from "./basePage";
import { BASE_URL } from "../constants";
import { defaultTimeout } from "../constants";

export class HomePage extends BasePage {
    constructor() {
        super();
        this.url = BASE_URL;
    }

    public getSignInButton() {
        return cy.getElementByLinkName('a', '/login');
    }

    public clickOnSignInButton() {
        this.getSignInButton().click();
    }

    public getPriceButton() {
        return cy.get('header a[href="/pricing"]');
    }

    public clickOnPriceButton() {
        this.getPriceButton().click();
    }

    public getSearchField() {
        return cy.get('input[data-unscoped-placeholder="Search GitHub"]');
    }

    public clickOnSearch() {
        this.getSearchField().click();
    }

    public searchFor(key: string) {
        this.getSearchField().type(`${key}{enter}`, { delay: defaultTimeout / 4 });
    }
}
