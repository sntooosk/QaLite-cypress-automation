import Login from './pages/Login'
import users from '../fixtures/users.json'

const persistFirebaseAuth = () => {
  cy.window().then(
    (win) =>
      new Cypress.Promise((resolve, reject) => {
        const request = win.indexedDB.open('firebaseLocalStorageDb')

        request.onerror = () => reject(request.error)

        request.onsuccess = () => {
          const db = request.result
          const transaction = db.transaction('firebaseLocalStorage', 'readonly')
          const store = transaction.objectStore('firebaseLocalStorage')
          const getAllRequest = store.getAll()

          getAllRequest.onerror = () => reject(getAllRequest.error)

          getAllRequest.onsuccess = () => {
            getAllRequest.result.forEach(({ fbase_key, value }) => {
              win.localStorage.setItem(fbase_key, value)
            })

            resolve()
          }
        }
      }),
  )
}

Cypress.Commands.add(
  'login',
  (email = users.email, password = users.password) => {
    const login = () => {
      Login.accessLoginPage()
      Login.fillCredentials({ email, password })
      Login.submitForm()
      Login.validateSuccess()
      persistFirebaseAuth()
    }

    cy.session({ email, password }, login, {
      cacheAcrossSpecs: true,
      validate: () => {
        cy.window().its('localStorage.length').should('be.gt', 0)
      },
    })
    cy.visit('/admin')
  },
)
