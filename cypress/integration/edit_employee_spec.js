import userEmployeeValues from "../support/userEmployeeValues";

import loginPage from "../pages/loginPage";
import employeeListPage from "../pages/employeeListPage";

describe('An employee spec', () => {
  beforeEach(() => {
    loginPage.visit();
    cy.fixture('creds').then((credentials) => {
      cy.fillUserPassValues(credentials.username, credentials.password);
    });
    cy.url().should('include', '/dashboard');
  });

  it('should edit an Employee', () => {
    employeeListPage.visit();
    employeeListPage.selectEmployee(userEmployeeValues.firstName, userEmployeeValues.lastName);
    employeeListPage.clickSubmitBtn();
    employeeListPage.clickEditBtn();
    employeeListPage.clickSubmitBtn();
    cy.contains('Success');
  });
});

