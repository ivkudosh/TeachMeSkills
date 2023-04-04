import { expect } from "chai";
import { By, until, Builder, Capabilities } from "selenium-webdriver";

const baseUrl = "https://github.com";

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("GitHub tests", () => {
    after(async () => {
        await driver.quit();
    });

    it('Should have correct page title', async () => {
        await driver.manage().window().maximize();
        await driver.get(baseUrl);
        await driver.getTitle();
        await driver.wait(until.titleContains(`GitHub: Let’s build from here · GitHub`), 2000);
    });

    it(`Should have 'Sign In' button`, async () => {
        await driver.manage().window().maximize();
        await driver.get(baseUrl);
        await driver.findElement(By.xpath('//a[@href="/login"]')).click();
        await driver.wait(until.urlIs(`${baseUrl}/login`));
    });

    it('Should have login input field', async () => {
        await driver.manage().window().maximize();
        await driver.get(baseUrl);
        await driver.findElement(By.css('header a[href="/login"]')).click();
        await driver.wait(until.elementLocated(By.id('login_field')), 2000);
    });

    it(`Should have password input field`, async () => {
        await driver.manage().window().maximize();
        await driver.get(baseUrl);
        await driver.findElement(By.css('header a[href="/login"]')).click();
        await driver.wait(until.elementLocated(By.id('password')));
    });

    it('Should have "Forgot password?" link', async () => {
        await driver.manage().window().maximize();
        await driver.get(baseUrl);
        await driver.findElement(By.css('header a[href="/login"]')).click();
        await driver.wait(until.elementLocated(By.css('div[class="position-relative"] a[href="/password_reset"]')));
    });

    it('Should be "Free" text on the free plan', async () => {
        await driver.manage().window().maximize();
        await driver.get(baseUrl);
        await driver.findElement(By.css('header a[href="/pricing"]')).click();
        const text = await driver.wait(until.elementLocated(By.css('div[data-min-seats="1"] h2[class="mb-2 h5-mktg"]')));
        const checkText = await text.getText();
        expect(checkText).to.be.equal("Free");
    });

    it('Should be a price 0 on the free plan', async () => {
        await driver.manage().window().maximize();
        await driver.get(baseUrl);
        await driver.findElement(By.css('header a[href="/pricing"]')).click();
        const text = await driver.wait(until.elementLocated(By.css('div[class="js-yearly-cost tooltipped-n tooltipped-multiline tooltipped-no-delay"] span[data-plan="free"]')));
        const checkText = await text.getText();
        expect(checkText).to.be.equal("0");
    });
});