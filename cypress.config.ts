const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://angular.realworld.how",
    excludeSpecPattern: ["**/1-getting-started/*", "**/2-advanced-examples"],
    watchForFileChanges: false,
    numTestsKeptInMemory: 3,
    specPattern: "cypress/integration/*.ts",
  },
});
