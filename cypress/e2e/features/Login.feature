@logout
Feature: Login

  Background:
    Given the user is on the login page

  Scenario: Login with default credentials
    When the user logs in with the default credentials
    Then the user should be logged in

  Scenario: Login with an incorrect password
    When the user provides the email "juliano.cassimiro@qualitydigital.global"
    And the user provides the password "invalid_password"
    And the user submits the login form
    Then the login feedback message "E-mail ou senha incorretos. Confira os dados informados." is shown
