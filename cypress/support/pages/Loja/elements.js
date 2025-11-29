export const ELEMENTS = {
  storeNameInput: '[data-testid="store-name-input"]',
  storeUrlInput: '[data-testid="store-site-input"]',
  saveStoreButton: '[data-testid="save-store-button"]',
  storeCard: (id) => `[data-testid="store-card-${id}"]`,
  storeCardPrefix: '[data-testid^="store-card-"]',
  manageStoreButton: '.store-summary__actions .button',
  storeNewNameInput: '[data-testid="store-settings-name"]',
  buttonUpdateStore: '[data-testid="save-store-settings"]',
  deleteStoreButton: '[data-testid="delete-store-button"]',
}
