import { ELEMENTS } from './elements'
import BasePage from '../../BasePage'

class ModalConfirmDeleteComponents extends BasePage {
  constructor() {
    super()
  }
  confirmMessage() {
    this.click(ELEMENTS.confirmDeleteButton)
  }
}

export default new ModalConfirmDeleteComponents()
