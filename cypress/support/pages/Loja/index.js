import BasePage from '../BasePage'
import { ELEMENTS } from './elements'

class StorePage extends BasePage {
  constructor() {
    super()
    this.createdStoreName = ''
    this.createdStoreUrl = ''
  }

  enterStoreName(name) {
    this.createdStoreName = name
    this.typeText(ELEMENTS.storeNameInput, name)
  }

  enterStoreUrl(url) {
    this.createdStoreUrl = url
    this.typeText(ELEMENTS.storeUrlInput, url)
  }

  enterStoreNameSettings(name) {
    this.createdStoreName = name
    this.typeText(ELEMENTS.storeNewNameInput, name)
  }

  updateStore() {
    this.click(ELEMENTS.buttonUpdateStore)
  }

  deleteStore() {
    this.click(ELEMENTS.deleteStoreButton)
  }

  saveStore() {
    this.click(ELEMENTS.saveStoreButton)
  }

  openStoreMenu() {
    this.click(ELEMENTS.manageStoreButton)
  }

  rememberCreatedStoreId() {
    if (!this.createdStoreName) {
      throw new Error('Store name must be provided before saving it.')
    }

    cy.contains(ELEMENTS.storeCardPrefix, this.createdStoreName)
      .invoke('attr', 'data-testid')
      .then((idValue) => {
        const storeId = idValue?.replace('store-card-', '')

        if (!storeId) {
          throw new Error('Unable to capture the created store ID.')
        }

        Cypress.env('storeId', storeId)
      })
  }

  selectSavedStore() {
    const storeId = Cypress.env('storeId')

    if (!storeId) {
      this.click(ELEMENTS.storeCard('t9pU4YaVY1ny31E1LI6D'))
    } else {
      this.click(ELEMENTS.storeCard(storeId))
    }
  }
}

export default new StorePage()
