import { expect } from "chai";
import { By, until, Builder, Capabilities, Key } from "selenium-webdriver";
import { getRandomNameGitHub } from "../random";

const baseUrl = "https://github.com";
const loginUrlXpath = '//a[@href="/login"]';
const priceUrlCss = 'header a[href="/pricing"]';
const nameGitHub = getRandomNameGitHub();
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("GitHub tests", () => {
    beforeEach(async () => {
        await driver.manage().window().maximize();
        await driver.get(baseUrl);
    });

    after(async () => {
        await driver.quit();
    });

    it('Should have correct page title', async () => {
        await driver.getTitle();
        await driver.wait(until.titleContains(`GitHub: Let’s build from here · GitHub`), 2000);
    });

    it(`Should have 'Sign In' button`, async () => {
        await driver.findElement(By.xpath(loginUrlXpath)).click();
        await driver.wait(until.urlIs(`${baseUrl}/login`));
    });

    it('Should be "Incorrect username or password." text after sign in with empty fields: Username or email address, Password', async () => {
        await driver.findElement(By.xpath(loginUrlXpath)).click();
        await driver.sleep(2000);
        await driver.findElement(By.css('input[value="Sign in"]')).click();
        const text = await driver.wait(until.elementLocated(By.css('div[class="flash flash-full flash-error  "] div[aria-atomic="true"]'))).getText();
        expect(text).to.be.equal("Incorrect username or password.");
    });

    it('Should be "Free" text on the free plan', async () => {
        await driver.findElement(By.css(priceUrlCss)).click();
        const text = await driver.wait(until.elementLocated(By.css('div[data-min-seats="1"] h2[class="mb-2 h5-mktg"]')));
        const checkText = await text.getText();
        expect(checkText).to.be.equal("Free");
    });

    it('Should search by name', async () => {
        await driver.findElement(By.css('input[data-unscoped-placeholder="Search GitHub"]')).click();
        await driver.findElement(By.css('input[data-unscoped-placeholder="Search GitHub"]')).sendKeys(nameGitHub);
        await driver.sleep(2000);
        await driver.findElement(By.css('input[data-unscoped-placeholder="Search GitHub"]')).sendKeys(Key.ENTER);
        await driver.wait(until.urlIs(`${baseUrl}/search?q=${nameGitHub}`));
    });
});