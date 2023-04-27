@header
Feature: GitHub Header Buttons
    @sign-in-button
    Scenario: SignUp Header Button
        Given the user opens "Home" page via link
        Then the user clicks on "Sign In" button on "Home" page
        Then the user is on "Sign In" page
        Then the user sees that url of the "Sign In" page is "https://github.com/login"
