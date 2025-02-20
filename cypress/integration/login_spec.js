import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import UserEmployeeValues from "../support/userEmployeeValues";

describe('Sign In', () => {
  let credentials;

  beforeEach(() => {
    cy.fixture('creds').then((values) => {
      credentials = values;
    });
  });

  it('should log in using valid credentials', () => {
    const loginPage = new LoginPage();
    loginPage
      .visit()
      .enterUsername(credentials.username)
      .enterPassword(credentials.password)
      .submit();

    const homePage = new HomePage();
    homePage.
      loginVerification();
  });
});