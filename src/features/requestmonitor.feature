Feature: Request Monitor service
  As a sysadmin I want to be able to
  monitor the incoming requests

  Scenario: Register incoming request
    When the system get an Incoming request
    Then I see "1" for "totalIncomingRequests" in the statistics
