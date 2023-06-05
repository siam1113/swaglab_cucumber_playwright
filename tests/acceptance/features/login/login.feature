Feature: Login
  Scenario: Login with username and password
    Given I am on the login page for valid login
    When I enter username and password
    Then I should be on the home page

  Scenario: Login with invalid username and password
    Given I am on the login page for invalid login
    When I enter invalid username and password
    Then I should be in home page

  
