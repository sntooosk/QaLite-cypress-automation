import BasePage from '../BasePage'
import { ELEMENTS } from './elements'

class LoginPage extends BasePage {
  open() {
    this.visit('/')
  }

  typeEmail(email) {
    this.typeText(ELEMENTS.emailField, email)
  }

  typePassword(password) {
    this.typeText(ELEMENTS.passwordField, password)
  }

  submit() {
    this.click(ELEMENTS.submitButton)
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
    cy.getCookie('firebase:authUser').should('exist')

    cy.url().then((currentUrl) => {
      if (!currentUrl.includes('/admin')) {
        this.visit('/admin')
      }
    })

    this.expectUrlToInclude('/admin')
  }

  expectFeedbackMessage(message) {
    this.shouldContainText(ELEMENTS.feedbackMessage, message)
  }
}

export default new LoginPage()
