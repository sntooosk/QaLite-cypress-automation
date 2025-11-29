Feature: Login

  Background:
    Given the user is on the login page

  Scenario: Login with default credentials admin
    When the user admin logs in with the default credentials
    Then the user should be logged in

  Scenario: Login with default credentials user
    When the user logs in with the default credentials
    Then the user should be logged in

  Scenario: Login with an incorrect password
    When the user provides the email fake
    And the user provides the password fake
    And the user submits the login form
    And the toast message "E-mail ou senha incorretos. Confira os dados informados." is displayed
