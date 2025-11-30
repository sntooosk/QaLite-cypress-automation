export const organizationSelectors = {
  newOrganizationButton: '[data-testid="new-organization-button"]',
  organizationNameInput: '[data-testid="organization-name-input"]',
  organizationNameSettingsInput: '[data-testid="organization-settings-name"]',
  saveOrganizationButton: '[data-testid="save-organization-button"]',
  updateOrganizationButton: '[data-testid="save-organization-settings"]',
  manageOrganizationButton: '[data-testid="manage-organization-button"]',
  deleteOrganizationButton: '[data-testid="delete-organization-button"]',
  organizationCardPrefix: '[data-testid^="organization-card-"]',
  organizationCard: (id) => `[data-testid="organization-card-${id}"]`,
  newStoreButton: '[data-testid="new-store-button"]',
}
