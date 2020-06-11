Feature: Checking the rubber duck store

	Scenario: Go to the admin panel
		Given open "http://localhost/litecart/admin/login.php" page
		When i login with "admin" user and "admin" password
		And press element with text "login"
		Then i have to go to the page "http://localhost/litecart/admin/" page

	Scenario Outline: Check Header
		Given open "http://localhost/litecart/admin/" page
		When i Click <menu> 
		And i Check <menu_item>
		And i will return to the "http://localhost/litecart/admin/" page
		Then menu item exists

		Examples:
			| menu | menu_item |
			| "Appearence" | "Template" |
			| "Appearence" | "Logotype" |