
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

    public getPageUrl() {
        return cy.url();
    }
}
