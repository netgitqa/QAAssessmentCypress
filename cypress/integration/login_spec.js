import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import UserEmployeeValues from "../support/userEmployeeValues";

describe('Sign In', () => {
  it('should be logged in', () => {

    const loginPage = new LoginPage();
    loginPage
      .visit()
      .enterEmail(UserEmployeeValues.emailValue)
      .enterPassword(UserEmployeeValues.passValue)
      .submit();

    const homePage = new HomePage();
    homePage.
      loginVerification();

  });

  it('should not be logged in with an incorrect email value', () => {

    const loginPage = new LoginPage();
    loginPage
      .visit()
      .enterEmail(UserEmployeeValues.emailValue)
      .enterPassword(UserEmployeeValues.emailValue)
      .submit();

  });

  it('should not be logged in with an incorrect password value', () => {

    const loginPage = new LoginPage();
    loginPage
      .visit()
      .enterEmail(UserEmployeeValues.passValue)
      .enterPassword(UserEmployeeValues.passValue)
      .submit();

  });
});
