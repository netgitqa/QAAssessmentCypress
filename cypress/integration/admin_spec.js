import userAdminValues from "../support/userAdminValues";
import userEmployeeValues from "../support/userEmployeeValues";

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

  it('should create an Admin', () => {
    dashboardPage.clickNavBarAdminBtn();
    adminPage.clickAddBtn();
    adminPage.selectUserRole(userAdminValues.userRoleAdmin);
    adminPage.selectStatus(userAdminValues.adminStatusEnabled);
    adminPage.selectEmployee(userEmployeeValues.firstName, userEmployeeValues.lastName);
    adminPage.specifyUsername(userAdminValues.adminUsername1);
    adminPage.specifyAdminPass(userAdminValues.adminPass);
    adminPage.confirmAdminPass(userAdminValues.adminConfirmPass);
    adminPage.clickSubmitBtn();
    cy.contains('Success');
  });

  it('should edit an Admin', () => {
    dashboardPage.clickNavBarAdminBtn();
    adminPage.specifyUsername(userAdminValues.adminUsername1);
    adminPage.clickSubmitBtn();
    adminPage.clickEditBtn();
    adminPage.clickSubmitBtn();
    cy.contains('Success');
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