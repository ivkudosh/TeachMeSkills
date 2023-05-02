import { expect, Page } from "@playwright/test";

export class BasePage {
    protected url!: string;
    constructor(protected readonly page: Page) { }

    public async visitPage() {
        await this.page.goto(this.url);
    }

    public async getPageTitle() {
        return await this.page.title();
    }

    public async waitForUrlToBe(expectedUrl: string) {
        await expect(this.page).toHaveURL(expectedUrl);
    }
}
