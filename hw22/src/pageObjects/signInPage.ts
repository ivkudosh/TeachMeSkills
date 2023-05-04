import { BasePage } from "./basePage";
import { BASE_URL } from "../helpers/constants";

export class SignInPage extends BasePage {
    constructor() {
        super();
        this.url = `${BASE_URL}/login`;
        this.pageIdentifier = this.getSignInInput();
    }

    public async getSignInInput() {
        return $('input[value="Sign in"]');
    }

    public async clickOnSignInInput() {
        await (await this.getSignInInput()).click();
    }

    public async getFlashErrorLabelText() {
        return $('div[class="flash flash-full flash-error  "] div[aria-atomic="true"]').getText();
    }
}

export const signInPage = new SignInPage();
