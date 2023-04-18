import { BasePage } from "./basePage";
import { BASE_URL } from "../helpers/constants";
import { randomName } from "../helpers/constants";

export class SearchPage extends BasePage {
    constructor() {
        super();
        this.url = `${BASE_URL}/search?q=${randomName}`;
        this.pageIdentifier = this.getResultsTextElement();
    }

    public async getResultsTextElement() {
        return await $('div[class="d-flex flex-column flex-md-row flex-justify-between border-bottom pb-3 position-relative"]');
    }

}

export const searchPage = new SearchPage();
