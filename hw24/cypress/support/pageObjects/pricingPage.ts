import { BasePage } from "./basePage";
import { BASE_URL } from "../constants";
import { Plan } from "../types";

export class PricingPage extends BasePage {
    constructor() {
        super();
        this.url = `${BASE_URL}/pricing`;
    }

    public getFreePlanLabel() {
        return cy.get('div[data-min-seats="1"] h2[class="mb-2 h5-mktg"]');
    }

    public getFreePlanLabelText() {
        return this.getFreePlanLabel().should("have.text", Plan.FREE);
    }
}
