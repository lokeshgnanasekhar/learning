
Feature: This is My First Feature
  @smoke
  Scenario: This is My First Scenario
    And   I Click on Login button
    Then  I should enter "xyz@gmail.com" and "unlockme@123"
    And   I click submit


  @regression @smoke
  Scenario: This is My Second Scenario
    And   I Click on Login button
    Then  I should enter below details
      |username     |password   |
      |abc@gmail.com|password123|
    And   I click submit

  @regression @myscenrio
  Scenario Outline: This is My Third Scenario

    And   I Click on Login button
    Then  I should enter <username> and <password> details
    And   I click submit

    Examples:
      |username     |password   |
      |abc@gmail.com|password123|
      |Chai@gmail.com|test123|