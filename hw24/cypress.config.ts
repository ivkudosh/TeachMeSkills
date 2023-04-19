import { defineConfig } from "cypress";
import { defaultTimeout, BASE_URL, assetsFolder } from "./cypress/support/constants";

export default defineConfig({
  e2e: {
    supportFile: "hw24/cypress/support/index.ts",
    specPattern: "hw24/cypress/e2e/**/*.cy.ts",
    defaultCommandTimeout: defaultTimeout * 2,
    baseUrl: BASE_URL,
    video: true,
    downloadsFolder: `${assetsFolder}/downloads`,
    screenshotsFolder: `${assetsFolder}/screenshots`,
    fixturesFolder: "hw24/cypress/fixtures",
    reporter: "spec",
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
