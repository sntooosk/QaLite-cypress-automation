import BasePage from '../base.page'
import { confirmModalSelectors as s } from '../../selectors/confirmModal'

class ConfirmModalComponent extends BasePage {
  confirmDeletion() {
    this.click(s.confirmDeleteButton)
  }
}

export default new ConfirmModalComponent()
