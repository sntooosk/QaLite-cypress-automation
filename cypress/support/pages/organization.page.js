import BasePage from './base.page'
import { organizationSelectors as s } from '../selectors/organization'
import seeds from '../../fixtures/entities.json'

class OrganizationPage extends BasePage {
  constructor() {
    super()
    this.currentOrganizationName = ''
  }

  open() {
    this.visit('/admin')
  }

  startNewOrganization() {
    this.click(s.newOrganizationButton)
  }

  startNewStore() {
    this.click(s.newStoreButton)
  }

  fillOrganizationName(name) {
    this.currentOrganizationName = name
    this.typeText(s.organizationNameInput, name)
  }

  fillOrganizationSettingsName(name) {
    this.currentOrganizationName = name
    this.typeText(s.organizationNameSettingsInput, name)
  }

  saveOrganization() {
    this.click(s.saveOrganizationButton)
  }

  updateOrganization() {
    this.click(s.updateOrganizationButton)
  }

  openManagementMenu() {
    this.click(s.manageOrganizationButton)
  }

  deleteOrganization() {
    this.click(s.deleteOrganizationButton)
  }

  rememberCreatedOrganizationId() {
    this.rememberEntityId({
      selector: s.organizationCardPrefix,
      name: this.currentOrganizationName,
      envKey: 'organizationId',
      prefix: 'organization-card-',
    })
  }

  selectSavedOrganization() {
    this.openSavedCard({
      selectorBuilder: s.organizationCard,
      envKey: 'organizationId',
      fallbackId: seeds.organizationId,
    })
  }
}

export default new OrganizationPage()
