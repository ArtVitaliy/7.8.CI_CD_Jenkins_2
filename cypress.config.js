const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8ozg3u",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
