import { until, ThenableWebDriver } from "selenium-webdriver";
import { BASE_URL } from "../helpers/constants";


export class BasePage {
    protected url!: string;

    constructor(protected driver: ThenableWebDriver) {
        this.url = BASE_URL;
    }

    public async visitPage() {
        await this.driver.get(this.url);
    }

    public async getPageTitle() {
        return await this.driver.getTitle();
    }

    public async waitUntilTitleContains(text: string) {
        return await this.driver.wait(until.titleContains(text), 2000);
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
