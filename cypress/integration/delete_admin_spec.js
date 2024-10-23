import userAdminValues from "../support/userAdminValues";

import loginPage from "../pages/loginPage";
import dashboardPage from "../pages/dashboardPage";
import adminPage from "../pages/adminPage";

describe('User admin spec', () => {
  beforeEach(() => {
    loginPage.visit();
    cy.fixture('creds').then((credentials) => {
      cy.fillUserPassValues(credentials.username, credentials.password);
    });
    cy.url().should('include', '/dashboard');
  });

  it('should delete an Admin', () => {
    dashboardPage.clickNavBarAdminBtn();
    adminPage.specifyUsername(userAdminValues.adminUsername1);
    adminPage.clickSubmitBtn();
    adminPage.clickDeleteBtn();
    adminPage.clickYesDeleteBtn();
    cy.contains('Success');
  });
});