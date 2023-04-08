import { BasePage } from "./basePage";
import { By, until, ThenableWebDriver, WebElement } from "selenium-webdriver";
import { BASE_URL } from "../helpers/constants";
import { driver } from "../config/driver";

export class PricingPage extends BasePage {
    constructor(driver: ThenableWebDriver) {
        super(driver);

        this.url = `${BASE_URL}/pricing`;
    }

    public async getFreePlanTitleElement(locator: string): Promise<WebElement> {
        return await this.driver.findElement(By.css(locator));
    }

    public async waitUntilElementLocated(locator: string): Promise<WebElement> {
        return await driver.wait(until.elementLocated(By.css(locator)));
    }
}

export const pricingPage = new PricingPage(driver);