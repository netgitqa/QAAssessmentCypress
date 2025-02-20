import userEmployeeValues from "../support/userEmployeeValues";

import loginPage from "../pages/loginPage";
import dashboardPage from "../pages/dashboardPage";
import addEmployeePage from "../pages/addEmployeePage";
import employeeListPage from "../pages/employeeListPage";

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

  it('should edit an Employee', () => {
    employeeListPage.visit();
    employeeListPage.selectEmployee(userEmployeeValues.firstName, userEmployeeValues.lastName);
    employeeListPage.clickSubmitBtn();
    employeeListPage.clickEditBtn();
    employeeListPage.clickSubmitBtn();
    cy.contains('Success');
  });

  it('should delete an Employee', () => {
    cy.intercept('https://js.stripe.com/v3', (req) => {
      req.continue((res) => {
        res.body = res.body.replace(
            'window.top.location.href',
            'window.self.location.href'
        );
        res.send();
      });
    });


    let employee

    cy.request({
      method: 'GET',

      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
      },

      url: `${Cypress.env('VALUE')}/apis/employee/*`,
    }).then((res) => {

      expect(res.status).to.eq(200)
      employee = res.body.employee;

    });

    employeeListPage.visit();
    employeeListPage.selectEmployee(userEmployeeValues.firstName, userEmployeeValues.lastName);
    employeeListPage.clickDeleteBtn();
    employeeListPage.clickYesDeleteBtn();
    cy.contains('Success');
  });
});

