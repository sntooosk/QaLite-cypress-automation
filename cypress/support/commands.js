import LoginPage from './pages/Login'
import users from '../fixtures/users.json'

// Bump SESSION_VERSION whenever the login flow or validation changes to avoid
// Cypress cache collisions with outdated session setups.
const SESSION_VERSION = 'v2'

Cypress.Commands.add(
  'login',
  (email = users.email, password = users.password) => {
    const performLogin = () => {
      LoginPage.open()
      LoginPage.fillCredentials({ email, password })
      LoginPage.submit()
      LoginPage.expectSuccessfulLogin()
    }

    cy.session(
      ['firebase:authUser', email, SESSION_VERSION],
      () => {
        performLogin()
      },
      {
        validate() {
          cy.getCookie('firebase:authUser').should('exist')
        },
        cacheAcrossSpecs: true,
      },
    )

    cy.visit('/admin')

    cy.url().then((currentUrl) => {
      if (currentUrl.includes('/login')) {
        performLogin()
        return
      }

      LoginPage.expectSuccessfulLogin()
    })
  },
)
