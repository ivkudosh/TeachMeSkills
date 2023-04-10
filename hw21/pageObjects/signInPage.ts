import { BasePage } from "./basePage";
import { ThenableWebDriver } from "selenium-webdriver";
import { BASE_URL } from "../helpers/constants";
import { driver } from "../config/driver";

export class SignInPage extends BasePage {
    constructor(driver: ThenableWebDriver) {
        super(driver);
        this.url = `${BASE_URL}/login`;
    }
}

export const signInPage = new SignInPage(driver);
