/// <reference types="cypress" />

Cypress.Commands.add('getElementByLinkName', (cssSelector: string, linkNameText: string) => {
    return cy.get(`${cssSelector}[href="${linkNameText}"]`);
});