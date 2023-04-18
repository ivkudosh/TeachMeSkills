import { BasePage } from "./basePage";
import { BASE_URL } from "../helpers/constants";

export class HomePage extends BasePage {
    constructor() {
        super();
        this.url = BASE_URL;
        this.pageIdentifier = this.getSearchField();

    }

    public async getSignInButton() {
        return $('//a[@href="/login"]');
    }


    public async clickOnSignInButton() {
        await (await this.getSignInButton()).click();
    }

    public async getPriceButton() {
        return $('header a[href="/pricing"]');
    }

    public async clickOnPriceButton() {
        await (await this.getPriceButton()).click();
    }

    public async getSearchField() {
        return $('input[data-unscoped-placeholder="Search GitHub"]');
    }

    public async clickOnSearchField() {
        await (await this.getSearchField()).click();
    }

    public async setValueSearchField(key: string) {
        await (await this.getSearchField()).setValue(key);
    }
}

export const homePage = new HomePage();
