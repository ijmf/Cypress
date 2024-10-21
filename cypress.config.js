const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    viewportHeight: 1080,
    viewportWidth: 1920,
    retries: {
      runMode: 0,
      openMode: 2,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
