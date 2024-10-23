class AddEmployeePage {
  visit() {
    cy.visit('/pim/viewEmployeeList');
  }

  selectEmployee(valueFN, valueLN) {
    cy.get('input[placeholder="Type for hints..."]').eq(0).type(valueFN, valueLN);
    cy.get(`span:contains(${valueLN})`).eq(0).click();
  }

  clickDeleteBtn() {
      cy.get('button[class*="oxd-table-cell-action-space"]').eq(1).click();
  }

  clickYesDeleteBtn() {
    cy.get('button[class*="label-danger"]').click();
  }

  clickSubmitBtn() {
    cy.get('button[type="submit"]').click();
  }

  clickEditBtn() {
      cy.get('button[class*="oxd-table-cell-action-space"]').eq(0).click();
  }
}

export default new AddEmployeePage();