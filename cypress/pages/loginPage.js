class LoginPage {
  constructor() {
    this.weblocators = {
      emailField: 'input[id="email"]',
      passwordField: 'input[id="password"]',
      submitBtn: 'button:contains("Log in")',
    }
  }

  visit() {
    cy.visit('/');
    return this;
  }

  enterEmail(value) {
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