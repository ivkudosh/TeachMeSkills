import { expect } from "chai";
import { By, until, Builder, Capabilities, Key } from "selenium-webdriver";
import { getRandomNameGitHub } from "../random";

const baseUrl = "https://github.com";
const loginButtonLocator = '//a[@href="/login"]';
const priceButtonLocator = 'header a[href="/pricing"]';
const searchInputLocator = 'input[data-unscoped-placeholder="Search GitHub"]';

const nameGitHub = getRandomNameGitHub();
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

enum Plan {
    FREE = "Free"
}

describe("GitHub tests", () => {
    before(async () => {
        await driver.manage().window().maximize();
    });

    beforeEach(async () => {
        await driver.get(baseUrl);
    });

    after(async () => {
        await driver.quit();
    });

    it('Should have correct page title', async () => {
        await driver.wait(until.titleContains(`GitHub: Let’s build from here · GitHub`), 2000);
    });

    it(`Should have 'Sign In' button`, async () => {
        await driver.findElement(By.xpath(loginButtonLocator)).click();
        await driver.wait(until.urlIs(`${baseUrl}/login`));
    });

    it('Should be "Incorrect username or password." text after sign in with empty fields: Username or email address, Password', async () => {
        await driver.findElement(By.xpath(loginButtonLocator)).click();
        await driver.wait(until.elementLocated(By.css('input[value="Sign in"]'))).click();
        const invalidCredentialsMessage = await driver.wait(until.elementLocated(By.css('div[class="flash flash-full flash-error  "] div[aria-atomic="true"]'))).getText();
        expect(invalidCredentialsMessage).to.be.equal("Incorrect username or password.");
    });

    it(`Should be ${Plan.FREE} text on the free plan`, async () => {
        await driver.findElement(By.css(priceButtonLocator)).click();
        const freePlanTitleElement = await driver.wait(until.elementLocated(By.css('div[data-min-seats="1"] h2[class="mb-2 h5-mktg"]')));
        const freePlanTitleText = await freePlanTitleElement.getText();
        expect(freePlanTitleText).to.be.equal(Plan.FREE);
    });

    it('Should search by name', async () => {
        await driver.findElement(By.css(searchInputLocator)).click();
        await driver.findElement(By.css(searchInputLocator)).sendKeys(nameGitHub);
        await driver.sleep(2000);
        await driver.findElement(By.css(searchInputLocator)).sendKeys(Key.ENTER);
        await driver.wait(until.urlIs(`${baseUrl}/search?q=${nameGitHub}`));
    });
});
