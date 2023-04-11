import { BasePage } from "./basePage";
import { ThenableWebDriver, WebElement } from "selenium-webdriver";
import { BASE_URL } from "../helpers/constants";
import { driver } from "../config/driver";

export class SignInPage extends BasePage {
    constructor(driver: ThenableWebDriver) {
        super(driver);
        this.url = `${BASE_URL}/login`;
    }

    public async getSignInInput(): Promise<WebElement> {
        return await this.waitUntilElementLocated('input[value="Sign in"]');
    }

    public async clickOnSignInInput() {
        return (await this.getSignInInput()).click();
    }

    public async getFlashErrorLabel(): Promise<WebElement> {
        return await this.waitUntilElementLocated('div[class="flash flash-full flash-error  "] div[aria-atomic="true"]');
    }
}

export const signInPage = new SignInPage(driver);
