const el = require('./elements').ELEMENTS

class LoginPage {
  accessLoginPage() {
    cy.visit('/')
  }

  typeEmail(email) {
    cy.get(el.inputEmail).clear()
    cy.get(el.inputEmail).type(email)
  }

  typePassword(password) {
    cy.get(el.inputPassword).clear()
    cy.get(el.inputPassword).type(password)
  }

  submitForm() {
    cy.get(el.buttonSubmit).click()
  }

  fillCredentials({ email, password }) {
    if (email) {
      this.typeEmail(email)
    }

    if (password) {
      this.typePassword(password)
    }
  }

  validateSuccess() {
    cy.url().should('contain', '/admin')
  }

  validateMessage(message) {
    cy.get(el.alertMessage).should('contain', message)
  }
}

export default new LoginPage()
