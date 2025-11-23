import Login from './pages/Login'

const clearSavedSessions = () => {
  if (
    Cypress.session &&
    typeof Cypress.session.clearAllSavedSessions === 'function'
  ) {
    Cypress.session.clearAllSavedSessions()
  }
}

Cypress.Commands.add('resetSession', () => {
  cy.clearCookies()
  cy.clearLocalStorage()
  clearSavedSessions()
})

Cypress.Commands.add('login', (email, password) => {
  cy.resetSession()
  Login.accessLoginPage()
  Login.fillCredentials({ email, password })
  Login.submitForm()
})
