import userAdminValues from "../support/userAdminValues";
import userEmployeeValues from "../support/userEmployeeValues";

import loginPage from "../pages/loginPage";
import cartPage from "../pages/cartPage";

describe('User admin spec', () => {
  // beforeEach(() => {
  //   loginPage.visit();
  //   cy.url().should('include', 'coffee');
  // });

  it('Add coffee to the cart', () => {
    cy.visit('https://www.apartments.com');
    cy.wait(5000);
    cy.visit('https://www.apartments.com');
    cy.wait(5000);
    cy.wait('https://www.apartments.com');
    cy.wait(5000);
    // cartPage.clickCoffeeCup('Mocha');
    // cartPage.clickCoffeeCup('Americano');
    // cartPage.clickCoffeeCup('Espresso');
    // cy.contains('Success');
  });
});