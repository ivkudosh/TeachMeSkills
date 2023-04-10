import { BasePage } from "./basePage";
import { ThenableWebDriver } from "selenium-webdriver";
import { BASE_URL } from "../helpers/constants";
import { driver } from "../config/driver";

export class PricingPage extends BasePage {
    constructor(driver: ThenableWebDriver) {
        super(driver);
        this.url = `${BASE_URL}/pricing`;
    }

    public async getTextFreePlan(): Promise<string> {
        return await (await this.waitUntilElementLocated('div[data-min-seats="1"] h2[class="mb-2 h5-mktg"]')).getText();
    }
}

export const pricingPage = new PricingPage(driver);