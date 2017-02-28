Feature: Recalculate Requests service
  As a sysadmin I want to be able to
  Recalcualate the cache content

  Scenario: Recalculate the cache
    Given the system get an Incoming request
    When the cache was recalculated
    Then I get "1" for key "totalIncomingRequests"

