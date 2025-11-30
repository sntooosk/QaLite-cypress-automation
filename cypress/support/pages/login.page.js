import BasePage from './base.page'
import { loginSelectors as s } from '../selectors/login'

class LoginPage extends BasePage {
  open() {
    this.visit('/login')
  }

  typeEmail(email) {
    this.typeText(s.emailInput, email)
  }

  typePassword(password) {
    this.typeText(s.passwordInput, password)
  }

  submit() {
    this.click(s.submitButton)
  }

  fillCredentials({ email, password }) {
    if (email) {
      this.typeEmail(email)
    }

    if (password) {
      this.typePassword(password)
    }
  }

  expectSuccessfulLogin() {
    cy.url().should(($url) => {
      expect($url).to.satisfy((currentUrl) => {
        return (
          currentUrl.includes('/admin') || currentUrl.includes('/dashboard')
        )
      })
    })
  }
}

export default new LoginPage()
