import LoginPage from './pages/Login'
import users from '../fixtures/users.json'

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
      ['firebase:authUser', email],
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
