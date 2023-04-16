import { BasePage } from "./basePage";
import { BASE_URL } from "../helpers/constants";
import { Page } from "@playwright/test";

export class HomePage extends BasePage {
    constructor(protected readonly page: Page) {
        super(page);
        this.url = BASE_URL;
    }

    public async getSignInButton() {
        return this.page.locator('//a[@href="/login"]');
    }

    public async clickOnSignInButton() {
        await (await this.getSignInButton()).click();
    }

    public async getPriceButton() {
        return this.page.locator('header a[href="/pricing"]');
    }

    public async clickOnPriceButton() {
        await (await this.getPriceButton()).click();
    }

    public async getSearchField() {
        return this.page.locator('input[data-unscoped-placeholder="Search GitHub"]');
    }

    public async clickOnSearch() {
        await (await this.getSearchField()).click();
    }

    public async searchFor(text: string) {
        const searchInput = this.getSearchField();
        await (await searchInput).type(text, { delay: 200 });
        await this.page.keyboard.press("Enter");
    }
}
