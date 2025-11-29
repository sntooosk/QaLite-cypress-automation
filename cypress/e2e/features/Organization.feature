Feature: Organization management

  Background:
    Given the user admin logs in with the default credentials
    And the user is on the organization page

  Scenario: Create a new organization
    When the user starts creating a new organization
    And the user enters the organization name fake
    Then the user saves the organization
    And the toast message "Nova organização criada." is displayed

  Scenario: Edit an existing organization
    When the user selects the saved organization card
    And the user opens the organization management menu
    And the user enters the organization new name fake
    Then the user updates the organization
    And the toast message "Organização atualizada com sucesso." is displayed

  Scenario: Delete an existing organization
    When the user selects the saved organization card
    And the user opens the organization management menu
    Then the user deletes the organization
    And the modal confirm delete is displayed
    And the toast message "Organização removida com sucesso." is displayed
