const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Tests Reporter',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    videoOnFailOnly:true
  },
  e2e: {
    baseUrl: "https://angular.realworld.how",
    excludeSpecPattern: ["**/1-getting-started/*", "**/2-advanced-examples"],
    watchForFileChanges: false,
    numTestsKeptInMemory: 3,
    specPattern: "cypress/integration/*.ts",
    video:false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
