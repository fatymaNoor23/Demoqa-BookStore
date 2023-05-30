Feature: Verify Books Functionality on DemoQA website

  Scenario: Verify navigation functionality to the Books page
    Given the user is on the DemoQA website
    When the user click on the Books widget
    Then the user should be navigated to the Books page
    Then the user should see the search bar, login button, image, title, author, and publisher tab

  Scenario: Verify "You Don't Know JS" in search bar and its information
    When the user type 'You Don't Know JS' in the search bar and search
    Then the user should see the title, author name, publisher name, and image URL

  Scenario: Verify 'You Don't Know JS' in search bar using ISBN number
    When the user click on the 'You Don't Know JS' option
    Then the user should be navigated to the correct URL
    Then the user should see the title, subtitles, page numbers,description and website URL

  Scenario: Verify navigation back to book store page
    When the user click on the 'Back to Book Store' page
    Then the user should be navigated back to the Books page