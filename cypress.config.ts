import { defineConfig } from 'cypress'
import fs from 'fs'

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Tests Reporter',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: "https://angular.realworld.how",
    excludeSpecPattern: ["**/1-getting-started/*", "**/2-advanced-examples"],
    watchForFileChanges: false,
    numTestsKeptInMemory: 3,
    specPattern: "cypress/integration/*.ts",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on(
        'after:spec',
        (spec: Cypress.Spec, results: CypressCommandLine.RunResult) => {
          if (results && results.video) {
            // Do we have failures for any retry attempts?
            const failures = results.tests.some((test) =>
              test.attempts.some((attempt) => attempt.state === 'failed')
            )
            if (!failures) {
              // delete the video if the spec passed and no tests retried
              fs.unlinkSync(results.video)
            }
          }
        }
      )
    },
  },
});
