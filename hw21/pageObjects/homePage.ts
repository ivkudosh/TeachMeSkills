import { By, ThenableWebDriver, WebElement } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { driver } from "../config/driver";
import { BASE_URL } from "../helpers/constants";

export class HomePage extends BasePage {
    constructor(protected driver: ThenableWebDriver) {
        super(driver);
        this.url = BASE_URL;
    }

    public async getSignInButton(): Promise<WebElement> {
        return await this.driver.findElement(By.xpath('//a[@href="/login"]'));
    }

    public async clickOnSignInButton(): Promise<void> {
        await (await this.getSignInButton()).click();
    }

    public async getPriceButton(): Promise<WebElement> {
        return await this.driver.findElement(By.css('header a[href="/pricing"]'));
    }

    public async clickOnPriceButton(): Promise<void> {
        await (await this.getPriceButton()).click();
    }

    public async getSearchField(): Promise<WebElement> {
        return await this.driver.findElement(By.css('input[data-unscoped-placeholder="Search GitHub"]'));
    }

    public async clickOnSearch(): Promise<void> {
        await (await this.getSearchField()).click();
    }

    public async sendKeysSearchField(key: string): Promise<void> {
        await (await homePage.getSearchField()).sendKeys(key);
    }
}

export const homePage = new HomePage(driver);
