const el = require('./elements').ELEMENTS

class LoginPage {
  accessLoginPage() {
    cy.visit('/')
  }

  typeEmail(email) {
    cy.get(el.inputEmail).type(email)
  }

  typePassword(password) {
    cy.get(el.inputPassword).type(password)
  }

  submitForm() {
    cy.get(el.buttonSubmit).click()
  }

  validateSuccess() {
    cy.url().should('contain', '/admin')
  }

  validateMessage(message) {
    cy.get(el.alertMessage).should('contain', message)
  }
}

export default new LoginPage()
