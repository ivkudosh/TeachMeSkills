import { Given } from "@cucumber/cucumber";
import { Pages } from "../helpers/types";
import { PageFactory } from "../pageObjects/pageFactory";

Given(/^the user opens "(.+)" page via link$/, async (pageName: Pages) => {
    await PageFactory.getPage(pageName).visitPage();
});
