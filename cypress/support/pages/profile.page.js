import BasePage from './base.page'
import { profileSelectors as s } from '../selectors/profile'

class ProfilePage extends BasePage {
  constructor() {
    super()
    this.newLastName = ''
  }

  open() {
    this.visit('/profile')
  }

  updateLastName(lastName) {
    this.newLastName = lastName
    this.typeText(s.lastNameInput, lastName)
  }

  saveProfile() {
    this.click(s.updateButton)
  }

  expectUpdatedNameInHeader(name) {
    this.shouldContainText(s.headerUserName, name)
  }
}

export default new ProfilePage()
