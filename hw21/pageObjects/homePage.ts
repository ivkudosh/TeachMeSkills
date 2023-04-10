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
        await (await this.driver.findElement(By.xpath('//a[@href="/login"]'))).click();
    }

    public async getPriceButton(): Promise<WebElement> {
        return await this.driver.findElement(By.css('header a[href="/pricing"]'));
    }

    public async clickOnPriceButton(): Promise<void> {
        await (await this.driver.findElement(By.css('header a[href="/pricing"]'))).click();
    }

    public async getSearchField(): Promise<WebElement> {
        return await this.driver.findElement(By.css('input[data-unscoped-placeholder="Search GitHub"]'));
    }

    public async clickOnSearch(): Promise<void> {
        await (await this.driver.findElement(By.css('input[data-unscoped-placeholder="Search GitHub"]'))).click();
    }
}

export const homePage = new HomePage(driver);
