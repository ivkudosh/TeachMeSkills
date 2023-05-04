import './commands';
import '@shelex/cypress-allure-plugin';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            getElementByLinkName(cssSelector: string, linkNameText: string): Cypress.Chainable<JQuery<HTMLElement>>
        }
    }
}
