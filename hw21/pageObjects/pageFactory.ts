import { Pages } from "../helpers/types";
import { homePage } from "./homePage";
import { pricingPage } from "./pricingPage";
import { signInPage } from "./signInPage";

export class PageFactory {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    static getPage(pageName: Pages) {
        switch (pageName) {
            case Pages.HOME:
                return homePage;
            case Pages.PRICING:
                return pricingPage;
            case Pages.SIGNIN:
                return signInPage;
            default:
                return homePage;
        }
    }
}