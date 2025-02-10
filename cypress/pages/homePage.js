class HomePage {
  constructor() {
    this.weblocators = {
      loginAlert: 'Logged in'
    }

  }

  loginVerification() {
    cy.contains(this.weblocators.loginAlert,  {timeout:10000});
    return this;
  }
}
export default HomePage;