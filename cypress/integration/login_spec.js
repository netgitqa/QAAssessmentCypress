import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import UserEmployeeValues from "../support/userEmployeeValues";

describe('Sign In', () => {
  it('should not submit with an incorrect email value', () => {

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
});
