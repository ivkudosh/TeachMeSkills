import { BasePage } from "./basePage";
import { BASE_URL } from "../helpers/constants";
import { Page } from "@playwright/test";

export class SignInPage extends BasePage {
    constructor(page: Page) {
        super(page);
        this.url = `${BASE_URL}/login`;
    }

    public getSignInInput() {
        return this.page.locator('input[value="Sign in"]');
    }

    public async clickOnSignInInput() {
        return (await this.getSignInInput()).click();
    }

    public getFlashErrorLabelText() {
        return this.page.locator('div[class="flash flash-full flash-error  "] div[aria-atomic="true"]').innerText();
    }
}
