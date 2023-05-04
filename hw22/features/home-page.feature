@home
Feature: GitHub Home Page title
    @title-text
    Scenario: Verify title on Home Page
        Given the user opens "Home" page via link
        Then the user sees that the text of the title on "Home" page is "GitHub: Let’s build from here · GitHub"
