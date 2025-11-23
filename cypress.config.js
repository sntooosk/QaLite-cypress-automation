require('dotenv').config()
const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  video: true,
  env: {
    VTEX_WORKSPACE: process.env.VTEX_WORKSPACE,
    VTEX_AUTH_COOKIE: process.env.VTEX_AUTH_COOKIE,
  },
  retries: {
    runMode: 2,
    openMode: 1,
  },
  defaultCommandTimeout: 120000,
  pageLoadTimeout: 180000,
  e2e: {
    setupNodeEvents(on) {
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    baseUrl: process.env.VTEX_WORKSPACE || 'https://qa-lite.vercel.app',
  },
})
