import { By, until, ThenableWebDriver, WebElement } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { driver } from "../config/driver";
import { BASE_URL } from "../helpers/constants";

export class HomePage extends BasePage {
    constructor(protected driver: ThenableWebDriver) {
        super(driver);
        this.url = BASE_URL;
    }

    public async getSignInButtonElement(locator: string): Promise<WebElement> {
        return await this.driver.findElement(By.xpath(locator));
    }

    public async clickOnSignInButtonElement(locator: string): Promise<void> {
        await (await this.driver.findElement(By.xpath(locator))).click();
    }

    public async getPriceButtonElement(locator: string): Promise<WebElement> {
        return await this.driver.findElement(By.css(locator));
    }

    public async clickOnPriceButtonElement(locator: string): Promise<void> {
        await (await this.driver.findElement(By.css(locator))).click();
    }

    public async getSearchElement(locator: string): Promise<WebElement> {
        return await this.driver.findElement(By.css(locator));
    }

    public async clickOnSearchElement(locator: string): Promise<void> {
        await (await this.driver.findElement(By.css(locator))).click();
    }

    public async waitUntilUrlIs(url: string): Promise<boolean> {
        return await driver.wait(until.urlIs(url));
    }
}

export const homePage = new HomePage(driver);