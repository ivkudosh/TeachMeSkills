import { BasePage } from "./basePage";
import { BASE_URL } from "../helpers/constants";
import { expect, Page } from "@playwright/test";

export class SignInPage extends BasePage {
    constructor(page: Page) {
        super(page);
        this.url = `${BASE_URL}/login`;
    }

    public async getSignInInput() {
        return this.page.locator('input[value="Sign in"]');
    }

    public async clickOnSignInInput() {
        return (await this.getSignInInput()).click();
    }

    public async getFlashErrorLabelText() {
        return this.page.locator('div[class="flash flash-full flash-error  "] div[aria-atomic="true"]').innerText();
    }

    public async checkFlashErrorLabelText(actualResult: string) {
        expect(actualResult).toEqual('Incorrect username or password.');
    }
}
