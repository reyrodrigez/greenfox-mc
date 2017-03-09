Feature: Request Monitor service
  As a sysadmin I want to be able to
  monitor the incoming requests

  Scenario: Register incoming request
    When the system get an Incoming request
    Then I see "1" for "totalIncomingRequests" in the statistics
    Then I see "1" request in the database

  Scenario: Recalculate the requests
    Given the system get an Incoming request
    When the system recalculate the requests
    Then I see "1" for "totalIncomingRequests" in the statistics
    Then I see "1" request in the database


