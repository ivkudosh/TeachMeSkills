import { BasePage } from "./basePage";
import { BASE_URL } from "../helpers/constants";
import { expect, Page } from "@playwright/test";

export class PricingPage extends BasePage {
    constructor(page: Page) {
        super(page);
        this.url = `${BASE_URL}/pricing`;
    }

    public async getFreePlanText() {
        return this.page.locator('div[data-min-seats="1"] h2[class="mb-2 h5-mktg"]').innerText();
    }

    public async checkFreePlanText(actualResult: string, expectedResult: string) {
        expect(actualResult).toEqual(expectedResult);
    }
}
