@error-message
Feature: GitHub Error message
    @sign-in-input
    Scenario: Verify error message after sign in with empty fields
        Given the user opens "Home" page via link
        Then the user clicks on "Sign In" button on "Home" page
        Then the user is on "Sign In" page
        Then the user clicks on "Sign In" input on "Sign In" page
        Then the user sees flash error with text "Incorrect username or password." on "Sign In" page

