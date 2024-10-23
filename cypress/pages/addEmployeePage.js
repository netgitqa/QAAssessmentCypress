class AddEmployeePage {
  selectUserRole(value) {
    cy.get('.oxd-select-wrapper').eq(0).click();
    cy.get(`span:contains(${value})`).eq(2).click();
  }

  selectStatus(value) {
    cy.get('.oxd-select-wrapper').eq(1).click();
    cy.get(`span:contains(${value})`).click();
   }

  selectEmployee(value) {
    cy.get('input[placeholder="Type for hints..."]').type(value);
    cy.get(`span:contains(${value})`).click();
  }

  specifyFirstName(value) {
    cy.get('input[name="firstName"]').type(value);
  }

  specifyMiddleName(value) {
    cy.get('input[name="middleName"]').type(value);
  }

  specifyLastName(value) {
    cy.get('input[name="lastName"]').type(value);
  }

  clickAddBtn() {
    cy.get('button[class^="oxd-button"]').eq(2).click();
  }

  clickSaveBtn() {
    cy.get('button[type="submit"]').click();
  }

  photoUpload() {
    cy.get('input[type=file]').selectFile('cypress/fixtures/photo.png', {force: true});
  }
}

export default new AddEmployeePage();