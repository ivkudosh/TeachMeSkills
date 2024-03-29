import { By, until, ThenableWebDriver, WebElement } from "selenium-webdriver";

export class BasePage {
    protected url!: string;
    constructor(protected driver: ThenableWebDriver) { }

    public async visitPage() {
        await this.driver.get(this.url);
    }

    public async waitUntilTitleContains(text: string) {
        return await this.driver.wait(until.titleContains(text), 2000);
    }

    public async waitUntilUrlIs(url: string): Promise<boolean> {
        return await this.driver.wait(until.urlIs(url));
    }

    public async waitUntilElementLocated(locator: string): Promise<WebElement> {
        return await this.driver.wait(until.elementLocated(By.css(locator)));
    }

    public async maximizeWindow() {
        await this.driver.manage().window().maximize();
    }

    public async closeDriver() {
        await this.driver.quit();
    }

    public async sleepDriver(time: number) {
        await this.driver.sleep(time);
    }
}
