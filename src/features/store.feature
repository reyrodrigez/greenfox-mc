Feature: Store
  As a developer I want to reach
  a unified iterface of my schemas

  Scenario: Receive data from the store
    Given I have a registered schema "Test"
    When I get key "0" from the "Test" schema from the store
    Then I get "value" from the store

  Scenario: Add new items
    Given I have a registered schema "Test"
    Given I add new item to schema "Test"
    When I get key "1" from the "Test" schema from the store
    Then I get "test" from the store

