class CartPage {
    clickCoffeeCup(value) {
        cy.get('div[aria-label="' + value + '"]').click();
    }

    selectUserRole(value) {
        cy.get('.oxd-select-wrapper').eq(0).click();
        cy.get('div[role="option"]').eq(1).click();
    }

    selectStatus(value) {
        cy.get('.oxd-select-wrapper').eq(1).click();
        cy.get('div[role="option"]').eq(1).click();
    }

    selectEmployee(valueFN, valueLN) {
        cy.get('input[placeholder="Type for hints..."]').type(valueFN, valueLN);
        cy.get(`span:contains(${valueLN})`).click();
    }

    specifyUsername(value) {
        cy.get('input[class^="oxd-input"]').eq(1).type(value);
    }

    specifyAdminPass(value) {
        cy.get('input[type="password"]').eq(0).focus().type(value);
    }

    confirmAdminPass(value) {
        cy.get('input[type="password"]').eq(1).type(value);
    }

    clickAddBtn() {
        cy.get('button[class^="oxd-button"]').eq(2).click();
    }

    clickSubmitBtn() {
        cy.get('button[type="submit"]').click();
    }

    clickEditBtn() {
        cy.get('button[class*="oxd-table-cell-action-space"]').eq(1).click();
    }

    clickDeleteBtn() {
        cy.get('button[class*="oxd-table-cell-action-space"]').eq(0).click();
    }

    clickYesDeleteBtn() {
        cy.get('button[class*="label-danger"]').click();
    }
}

export default new CartPage();