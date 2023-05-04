import { BasePage } from "./basePage";
import { BASE_URL } from "../constants";

export class SignInPage extends BasePage {
    constructor() {
        super();
        this.url = `${BASE_URL}/login`;
    }

    public getSignInInput() {
        return cy.get('input[value="Sign in"]');
    }

    public clickOnSignInInput() {
        this.getSignInInput().click();
    }

    public getFlashErrorLabel() {
        return cy.get('div[class="flash flash-full flash-error  "] div[aria-atomic="true"]');
    }
}
