import { BasePage } from "./basePage";
import { BASE_URL } from "../constants";

export class PricingPage extends BasePage {
    constructor() {
        super();
        this.url = `${BASE_URL}/pricing`;
    }

    public getFreePlanLabel() {
        return cy.get('div[data-min-seats="1"] h2[class="mb-2 h5-mktg"]');
    }
}
