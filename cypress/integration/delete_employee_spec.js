import userEmployeeValues from "../support/userEmployeeValues";

import loginPage from "../pages/loginPage";
import employeeListPage from "../pages/employeeListPage";
import adminPage from "../pages/adminPage";

describe('An employee spec', () => {
  beforeEach(() => {
    loginPage.visit();
    cy.fixture('creds').then((credentials) => {
      cy.fillUserPassValues(credentials.username, credentials.password);
    });
    cy.url().should('include', '/dashboard');
  });

  it('should delete an Employee', () => {
    employeeListPage.visit();
    employeeListPage.selectEmployee(userEmployeeValues.firstName, userEmployeeValues.lastName);
    adminPage.clickSubmitBtn();
    employeeListPage.clickDeleteBtn();
    employeeListPage.clickYesDeleteBtn();
    cy.contains('Success');
  });
});

