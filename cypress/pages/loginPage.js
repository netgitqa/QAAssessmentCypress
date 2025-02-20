class LoginPage {
  constructor() {
    this.weblocators = {
      emailField: 'input[name="username"]',
      passwordField: 'input[name="password"]',
      submitBtn: 'button[type="submit"]'
      // submitBtn: 'button:contains("Login")',
    }
  }

  visit() {
    cy.visit('/');
    cy.hide();
    return this;
  }

  enterUsername(value) {
    cy.get(this.weblocators.emailField).type(value);
    return this;
  }

  enterPassword(value) {
    cy.get(this.weblocators.passwordField).type(value);
    return this;
  }

  submit() {
    cy.get(this.weblocators.submitBtn).click();
    return this;
  }
}
export default LoginPage;