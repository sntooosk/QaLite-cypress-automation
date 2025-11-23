import Login from './pages/Login'
import users from '../fixtures/users.json'

Cypress.Commands.add(
  'login',
  (email = users.email, password = users.password) => {
    const login = () => {
      Login.accessLoginPage()
      Login.fillCredentials({ email, password })
      Login.submitForm()
      Login.validateSuccess()
    }

    cy.session({ email, password }, login, { cacheAcrossSpecs: true })
    cy.visit('/admin')
  },
)
