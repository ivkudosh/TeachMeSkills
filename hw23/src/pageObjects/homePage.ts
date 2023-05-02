import { BasePage } from "./basePage";
import { BASE_URL } from "../helpers/constants";
import { Page } from "@playwright/test";

export class HomePage extends BasePage {
    constructor(protected readonly page: Page) {
        super(page);
        this.url = BASE_URL;
    }

    public getSignInButton() {
        return this.page.locator('//a[@href="/login"]');
    }

    public async clickOnSignInButton() {
        await this.getSignInButton().click();
    }

    public getPriceButton() {
        return this.page.locator('header a[href="/pricing"]');
    }

    public async clickOnPriceButton() {
        await this.getPriceButton().click();
    }

    public getSearchField() {
        return this.page.locator('input[data-unscoped-placeholder="Search GitHub"]');
    }

    public async clickOnSearch() {
        await this.getSearchField().click();
    }

    public async searchFor(text: string) {
        const searchInput = this.getSearchField();
        await (searchInput).type(text, { delay: 200 });
        await this.page.keyboard.press("Enter");
    }
}
