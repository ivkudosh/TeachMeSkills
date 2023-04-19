import { Pages } from "../types";
import { HomePage } from "./homePage";
import { PricingPage } from "./pricingPage";
import { SignInPage } from "./signInPage";

export class PageFactory {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    static getPage(pageName: Pages) {
        switch (pageName) {
            case Pages.HOME:
                return new HomePage();
            case Pages.PRICING:
                return new PricingPage();
            case Pages.SIGNIN:
                return new SignInPage();
            default:
                return new HomePage();
        }
    }
}
