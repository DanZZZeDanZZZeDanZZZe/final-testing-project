Feature: Checking the rubber duck store

Scenario: Go to the admin panel
		Given open "http://localhost/litecart/admin/login.php" page
		When i login with "admin" user and "admin" password
		And press element with text "login"
		Then i have to go to the page "http://localhost/litecart/admin/" page

