// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
import loginPage from "../pages/loginPage";

Cypress.Commands.add("fillUserPassValues", (loginValue, passValue) => {
  loginPage.fillUsername(loginValue);
  loginPage.fillPassword(passValue);
  loginPage.submit();
});

Cypress.Commands.add("hide", () => {
  cy.get('.orangehrm-login-error').invoke('css', 'visibility', 'hidden');
});