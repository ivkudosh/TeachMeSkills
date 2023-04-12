import { BasePage } from "./basePage";
import { BASE_URL } from "../helpers/constants";

export class PricingPage extends BasePage {
    constructor() {
        super();
        this.url = `${BASE_URL}/pricing`;
        this.pageIdentifier = this.getFreePlanLabel();

    }

    public async getFreePlanLabel() {
        return $('div[data-min-seats="1"] h2[class="mb-2 h5-mktg"]');
    }

    public async getFreePlanLabelText() {
        return (await $('div[data-min-seats="1"] h2[class="mb-2 h5-mktg"]')).getText();
    }
}

export const pricingPage = new PricingPage();
