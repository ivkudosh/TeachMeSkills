import { BasePage } from "./basePage";
import { By, until, ThenableWebDriver, WebElement } from "selenium-webdriver";
import { BASE_URL } from "../helpers/constants";
import { driver } from "../config/driver";

export class SignInPage extends BasePage {
    constructor(driver: ThenableWebDriver) {
        super(driver);

        this.url = `${BASE_URL}/login`;
    }

    public async waitUntilElementLocated(locator: string): Promise<WebElement> {
        return await this.driver.wait(until.elementLocated(By.css(locator)));
    }
}

export const signInPage = new SignInPage(driver);

