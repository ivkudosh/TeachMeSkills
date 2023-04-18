@header
Feature: GitHub Price Text
    @sign-in-button
    Scenario: Verify "Free" plan text on "Pricing" page
        Given the user opens "Home" page via link
        Then the user clicks on "Pricing" button on "Home" page
        Then the user is on "Pricing" page
        Then the user sees "Free" plan text on "Pricing" page