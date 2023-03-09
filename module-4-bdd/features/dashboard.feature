Feature: Dashboard

  Scenario: Dashboard page should have "Appointment Planner - Syncfusion Angular Components Showcase App" title
    When I open "Dashboard" page
    Then Page title should "be equal to" "Appointment Planner - Syncfusion Angular Components Showcase App"

 Scenario: It should be possible to open doctors modal window
    When I open "Dashboard" page
    And I click "Doctors" link from the side menu
    And I click add new doctor button from list header
    Then modal window should be displayed

 Scenario: It should be possible to open patients modal window
    Given  I open "Dashboard" page
    When I click "Patients" link from the side menu
    And I click add new patient button from list header
    Then I set value patients name


