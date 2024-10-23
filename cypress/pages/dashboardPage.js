class DashboardPage {
  clickNavBarAdminBtn() {
    cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click();
  }

  clickNavBarPIMBtn() {
    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
  }
}

export default new DashboardPage();