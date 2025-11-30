import {
  buildOrganizationData,
  buildPersonData,
  buildStoreData,
} from '../utils/testData'

const context = {
  person: buildPersonData(),
  organization: buildOrganizationData(),
  store: buildStoreData(),
}

export const resetScenarioContext = () => {
  context.person = buildPersonData()
  context.organization = buildOrganizationData()
  context.store = buildStoreData()
}

export const getScenarioContext = () => context
