const faker = require('faker-br')

export const buildPersonData = () => {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()

  return {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    email: faker.internet.email(firstName, lastName).toLowerCase(),
    invalidEmail: `${firstName}.${lastName}@invalidprovider`,
    password: faker.internet.password(16, true),
  }
}

export const buildOrganizationData = () => ({
  name: faker.company.companyName(),
})

export const buildStoreData = () => ({
  name: faker.company.companyName(),
  url: faker.internet.url(),
})
