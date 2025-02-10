import LoginPage from "../pages/loginPage";
import LibraryPage from "../pages/libraryPage";
import UserEmployeeValues from "../support/userEmployeeValues";

describe('FE Library component', () => {
  beforeEach(() => {
    const loginPage = new LoginPage();
    loginPage
        .visit()
        .enterEmail(UserEmployeeValues.emailValue)
        .enterPassword(UserEmployeeValues.passValue)
        .submit();
  });

  it('should upload a PDF file to the library', () => {
    const libraryPage = new LibraryPage();
    libraryPage
        .visit()
        .clickAddButton()
        .attachFile()
        // .clickUploadButton();
  });
});
