class HomePage {
  constructor() {
    this.weblocators = {
      loginAlert: 'Dashboard'
    }
  }



  loginVerification() {
    cy.contains(this.weblocators.loginAlert,  {timeout:10000});
    cy.url().should('include', 'dashboard')
    return this;
  }
}
export default HomePage;