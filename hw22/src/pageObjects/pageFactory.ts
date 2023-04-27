import { Pages } from "../helpers/types";
import { homePage } from "./homePage";
import { pricingPage } from "./pricingPage";
import { signInPage } from "./signInPage";
import { searchPage } from "./searchPage";

export class PageFactory {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    static getPage(pageName: Pages) {
        switch (pageName) {
            case Pages.HOME:
                return homePage;
            case Pages.PRICING:
                return pricingPage;
            case Pages.SIGN_IN:
                return signInPage;
            case Pages.SEARCH:
                return searchPage;
            default:
                return homePage;
        }
    }
}
