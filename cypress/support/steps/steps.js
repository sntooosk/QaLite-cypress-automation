/* eslint-disable no-unused-vars */
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../pages/Login'
import OrganizationPage from '../pages/Organization'
import ProfilePage from '../pages/Profile'
import StorePage from '../pages/Loja'
import Toast from '../pages/components/Toast'
import ModalConfirmDelete from '../pages/components/ModalConfirmDelete'
const faker = require('faker-br')

/*----------------------------------------------------------------------------------*/
/* FAKER */

const firstNameFaker = faker.name.firstName()
const lastNameFaker = faker.name.lastName()
const fullNameFaker = `${firstNameFaker} ${lastNameFaker}`
const correctEmailFaker = faker.internet.email(firstNameFaker, lastNameFaker)
const invalidEmailFaker = faker.internet.email(
  firstNameFaker,
  lastNameFaker,
  'invalidprovider',
)
const passwordFaker = faker.internet.password(16)

const OrganizationFaker = faker.company.companyName()
const StoreFaker = faker.company.companyName()
const StoreUrlFaker = faker.internet.url()

/*----------------------------------------------------------------------------------*/
/* Navigation */

Given('the user is on the login page', () => {
  LoginPage.open()
})

Given('the user is on the organization page', () => {
  OrganizationPage.open()
})

/* Login */

When('the user provides the email fake', () => {
  LoginPage.typeEmail(invalidEmailFaker)
})

When('the user provides the password fake', () => {
  LoginPage.typePassword(passwordFaker)
})

When('the user submits the login form', () => {
  LoginPage.submit()
})

When('the user admin logs in with the default credentials', () => {
  cy.loginAsAdmin()
})

When('the user logs in with the default credentials', () => {
  cy.loginAsUser()
})

Then('the user should be logged in', () => {
  LoginPage.expectSuccessfulLogin()
})

/* Organization */

When('the user starts creating a new organization', () => {
  OrganizationPage.startNewOrganization()
})

When('the user enters the organization name fake', () => {
  OrganizationPage.enterOrganizationName(OrganizationFaker)
})

When('the user enters the organization new name fake', () => {
  OrganizationPage.enterOrganizationNameSettings(OrganizationFaker)
})

Then('the user saves the organization', () => {
  OrganizationPage.saveOrganization()
  OrganizationPage.rememberCreatedOrganizationId()
})

Then('the user updates the organization', () => {
  OrganizationPage.updateOrganization()
})

When('the user selects the saved organization card', () => {
  OrganizationPage.selectSavedOrganization()
})

When('the user opens the organization management menu', () => {
  OrganizationPage.openManagementMenu()
})

Then('the user deletes the organization', () => {
  OrganizationPage.deleteOrganization()
})

/* Toast */

When('the toast message {string} is displayed', (message) => {
  Toast.confirmMessage(message)
})

/* Modal */

When('the modal confirm delete is displayed', () => {
  ModalConfirmDelete.confirmMessage()
})

/* Profile */

When('the user visits the profile page', () => {
  ProfilePage.open()
})

When('the user types a new last name fake', () => {
  ProfilePage.typeLastName(lastNameFaker)
})

Then('the user updates the profile', () => {
  ProfilePage.saveProfile()
})

When('the user name Header last name fake', () => {
  ProfilePage.expectNameHeader(lastNameFaker)
})

/* Store */

When('the user starts creating a new store', () => {
  OrganizationPage.startNewStore()
})

When('the user enters the store dados faker', () => {
  StorePage.enterStoreName(StoreFaker)
  StorePage.enterStoreUrl(StoreUrlFaker)
})

Then('the user saves the store', () => {
  StorePage.saveStore()
  StorePage.rememberCreatedStoreId()
})

When('the user selects the saved store card', () => {
  StorePage.selectSavedStore()
})

When('the user opens the store management menu', () => {
  StorePage.openStoreMenu()
})

When('the user enters the store new name fake', () => {
  StorePage.enterStoreNameSettings(OrganizationFaker)
})

Then('the user updates the store', () => {
  StorePage.updateStore()
})

Then('the user deletes the store', () => {
  StorePage.deleteStore()
})
