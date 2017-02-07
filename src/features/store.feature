Feature: Store
  As a developer I want to reach
  a unified iterface of my schemas

  Scenario: I can use a schema
    Given I have a registered schema "Test"
    When I get "test" key from the "Test" schema from the store
    Then I get "value" from the store
