const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 800,
  responseTimeout: 30000,
  defaultCommandTimeout: 10000,
  screenshotOnRunFailure: true,
  projectId: '64j9y2',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    // baseUrl: 'https://coffee-cart.app', 'https://qa.irispro.co'
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',

    specPattern: [
      'cypress/integration/login_spec.js',
      'cypress/integration/library_spec.js',
      'cypress/integration/coffee_spec.js',
      'cypress/integration/create_employee_spec.js',
      'cypress/integration/create_admin_spec.js',
      'cypress/integration/edit_employee_spec.js',
      'cypress/integration/edit_admin_spec.js',
      'cypress/integration/delete_admin_spec.js',
      'cypress/integration/delete_employee_spec.js'
    ],
  },
});
