import { Page } from "@playwright/test";
import { Pages } from "../helpers/types";
import { HomePage } from "./homePage";
import { PricingPage } from "./pricingPage";
import { SignInPage } from "./signInPage";

export class PageFactory {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    static getPage(page: Page, pageName: Pages) {
        switch (pageName) {
            case Pages.HOME:
                return new HomePage(page);
            case Pages.PRICING:
                return new PricingPage(page);
            case Pages.SIGNIN:
                return new SignInPage(page);
            default:
                return new HomePage(page);
        }
    }
}
