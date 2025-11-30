class BasePage {
  visit(path = '/') {
    cy.visit(path)
  }

  getElement(selector) {
    return cy.get(selector)
  }

  click(selector, options = {}) {
    this.getElement(selector).should('be.visible').click(options)
  }

  typeText(selector, value) {
    this.getElement(selector).should('be.enabled').clear().type(value)
  }

  contains(selector, text) {
    return cy.contains(selector, text)
  }

  shouldContainText(selector, text) {
    this.getElement(selector).should('contain', text)
  }

  expectUrlToInclude(fragment) {
    cy.url().should('include', fragment)
  }

  rememberEntityId({ selector, name, envKey, prefix }) {
    if (!name) {
      throw new Error(
        'A valid name must be provided before capturing its identifier.',
      )
    }

    this.contains(selector, name)
      .should('have.attr', 'data-testid')
      .invoke('attr', 'data-testid')
      .then((idValue) => {
        const normalizedId = idValue?.replace(prefix, '')

        if (!normalizedId) {
          throw new Error(`Unable to capture the ${envKey} from the UI.`)
        }

        Cypress.env(envKey, normalizedId)
      })
  }

  openSavedCard({ selectorBuilder, envKey, fallbackId }) {
    const entityId = Cypress.env(envKey) || fallbackId

    if (!entityId) {
      throw new Error(
        `No value found in Cypress.env('${envKey}') and no fallbackId provided.`,
      )
    }

    this.click(selectorBuilder(entityId))
  }
}

export default BasePage
