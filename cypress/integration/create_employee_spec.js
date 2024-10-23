import userEmployeeValues from "../support/userEmployeeValues";

import loginPage from "../pages/loginPage";
import dashboardPage from "../pages/dashboardPage";
import addEmployeePage from "../pages/addEmployeePage";

describe('An employee spec', () => {
  beforeEach(() => {
    loginPage.visit();
    cy.fixture('creds').then((credentials) => {
      cy.fillUserPassValues(credentials.username, credentials.password);
    });
    cy.url().should('include', '/dashboard');
  });

  it('should create an Employee', () => {
    dashboardPage.clickNavBarPIMBtn();
    addEmployeePage.clickAddBtn();
    addEmployeePage.specifyFirstName(userEmployeeValues.firstName);
    addEmployeePage.specifyMiddleName(userEmployeeValues.middleName);
    addEmployeePage.specifyLastName(userEmployeeValues.lastName);
    addEmployeePage.photoUpload();
    addEmployeePage.clickSaveBtn();
    cy.contains('Success');
  });
});

