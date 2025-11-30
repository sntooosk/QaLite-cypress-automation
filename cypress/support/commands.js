import LoginPage from './pages/login.page'

const ensureCredentials = (credentials, role) => {
  if (!credentials?.email || !credentials?.password) {
    throw new Error(
      `Missing ${role} credentials in Cypress environment variables.`,
    )
  }
}

Cypress.Commands.add('loginWithCredentials', (credentials) => {
  ensureCredentials(credentials, 'provided')
  LoginPage.open()
  LoginPage.fillCredentials(credentials)
  LoginPage.submit()
  LoginPage.expectSuccessfulLogin()
})

Cypress.Commands.add('loginAsAdmin', () => {
  const admin = Cypress.env('admin')
  ensureCredentials(admin, 'admin')
  cy.loginWithCredentials(admin)
})

Cypress.Commands.add('loginAsUser', () => {
  const user = Cypress.env('user')
  ensureCredentials(user, 'user')
  cy.loginWithCredentials(user)
})
