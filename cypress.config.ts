// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     baseUrl: "http://localhost:1234",
//   },
// });

// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     baseUrl: "http://localhost:4200/login",
//     excludeSpecPattern: ["**/1-getting-started/*", "**/2-advanced-examples"],
//     watchForFileChanges: false,
//     numTestsKeptInMemory: 2,
//     specPattern: "cypress/e2e/**/*.ts",
//   },
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://angular.realworld.io",
    excludeSpecPattern: ["**/1-getting-started/*", "**/2-advanced-examples"],
    watchForFileChanges: false,
    numTestsKeptInMemory: 2,
    specPattern: "cypress/integration/*.ts",
    
  },
});
