Feature: Profile

  Background:
    Given the user admin logs in with the default credentials

  Scenario: Update Profile
    When the user visits the profile page
    And the user types a new last name fake
    Then the user updates the profile
    And the toast message "Perfil atualizado com sucesso." is displayed
    And the user name Header last name fake
