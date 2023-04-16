import { BasePage } from "./basePage";
import { BASE_URL } from "../helpers/constants";
import { expect, Page } from "@playwright/test";

export class PricingPage extends BasePage {
    constructor(page: Page) {
        super(page);
        this.url = `${BASE_URL}/pricing`;
    }

    public async getFlashErrorLabelText(expectedFreePlanText: string) {
        await expect(this.page.locator('div[data-min-seats="1"] h2[class="mb-2 h5-mktg"]')).toHaveText(expectedFreePlanText);
    }
}

