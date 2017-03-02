Feature: Message queue
  As a developer I want to be able to use
  message queues to create a "communication" layer
  between the processes.

Scenario: Publish a message
  When I publish "test" message to queue "test-queue"
  Then "test-queue" queue contains "1" message

Scenario: Consume a message
  Given I publish "test" message to queue "test-queue"
  When A process consume the queue "test-queue"
  Then I see "1" processed message
