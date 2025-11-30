Feature: Login

  Background:
    Given the user is on the login page

  Scenario: Login with admin credentials
    When the user admin logs in with the default credentials
    Then the user should be logged in

  Scenario: Login with standard user credentials
    When the user logs in with the default credentials
    Then the user should be logged in

  Scenario: Login with an incorrect password
    When the user provides the email fake
    And the user provides the password fake
    And the user submits the login form
    Then the toast message "E-mail ou senha incorretos. Confira os dados informados." is displayed
