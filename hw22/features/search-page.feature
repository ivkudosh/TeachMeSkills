@Search
Feature: GitHub Search
    @searchBy-Name
    Scenario: Verify search by name
        Given the user opens "Home" page via link
        Then the user clicks on "Search" field on "Home" page
        Then the user fill random GitHub name in "Search" field on "Home" page
        Then the user is on "Home" page
        Then the user clicks Enter on keyboard on "Home" page
        Then the user is on "Search" page
        Then the user sees that url of the "Search" page with random name