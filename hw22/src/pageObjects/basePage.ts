export class BasePage {
    protected url!: string;
    protected pageIdentifier!: Promise<WebdriverIO.Element>;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }

    public async visitPage() {
        await browser.url(this.url);
    }

    public async getPageTitle() {
        return browser.getTitle();
    }

    public async getCurrentUrl() {
        return browser.getUrl();
    }

    public async waitForPage() {
        await (await this.pageIdentifier).waitForDisplayed();
    }

    public async pressEnter() {
        await browser.keys("Enter");
    }
}
