Feature: Organization management

  Background:
    Given the user is on the organization page

  Scenario: Create a new organization
    When the user starts creating a new organization
    And the user enters the organization name "Test Organization"
    Then the user saves the organization

  Scenario: Delete an existing organization
    When the user selects the saved organization card
    And the user opens the organization management menu
    Then the user deletes the organization
