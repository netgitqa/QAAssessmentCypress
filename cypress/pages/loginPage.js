class LoginPage {
  visit() {
    cy.visit('/auth/login');
  }

  fillUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  getErrorMessage() {
    return cy.get('.error-message');
  }
}

export default new LoginPage();