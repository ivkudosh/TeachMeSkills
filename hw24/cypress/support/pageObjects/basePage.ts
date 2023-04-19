
export class BasePage {
    protected url!: string;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }

    public visitPage() {
        cy.visit(this.url);
    }

    public getPageTitle() {
        return cy.title();
    }

    public waitUntilTitleIs(titleText: string) {
        return this.getPageTitle().should("include", titleText);
    }

    public getPageUrl() {
        return cy.url();
    }

    public waitUntilUrlIs(url: string) {
        return this.getPageUrl().should("include", url);
    }
}
