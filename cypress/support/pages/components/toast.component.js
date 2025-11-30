import BasePage from '../base.page'
import { toastSelectors as s } from '../../selectors/toast'

class ToastComponent extends BasePage {
  expectMessage(message) {
    this.shouldContainText(s.container, message)
  }
}

export default new ToastComponent()
