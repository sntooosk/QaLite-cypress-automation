import LoginPage from './pages/Login'

const admin = Cypress.env('admin')
const user = Cypress.env('user')

Cypress.Commands.add('loginAsAdmin', () => {
  LoginPage.open()
  LoginPage.fillCredentials(admin)
  LoginPage.submit()
  LoginPage.expectSuccessfulLogin()
})

Cypress.Commands.add('loginAsUser', () => {
  LoginPage.open()
  LoginPage.fillCredentials(user)
  LoginPage.submit()
  LoginPage.expectSuccessfulLogin()
})
