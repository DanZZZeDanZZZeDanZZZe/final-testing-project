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
			| menu 					 | menu_item             |
			| "Appearence"   | "Template"            |
			| "Appearence"   | "Logotype"            |
			| "Catalog"      | "Catalog"             |
			| "Catalog"      | "Option Groups"       |
			| "Catalog"      | "Manufacturers"       |
			| "Catalog"      | "Suppliers" 		       |
			| "Catalog"      | "Delivery Statuses"   |
			| "Catalog"      | "Sold Out Statuses"   |
			| "Catalog"      | "Quantity Units"      |
			| "Customers"    | "Customers"           |
			| "Customers"    | "Newsletter"          |
			| "Geo"  			   | "Zones" 			         |
			| "Languages"    | "Languages"           |
			| "Languages"    | "Storage Encoding"    |
			| "Modules"      | "Background Jobs"     |
			| "Modules"      | "Customer"            |
			| "Modules"      | "Shipping"            |
			| "Modules"      | "Payment"             |
			| "Modules"      | "Order Total"         |
			| "Modules"      | "Order Success"       |
			| "Modules"      | "Order Action"        |
			| "Orders"       | "Orders" 			       |
			| "Orders"       | "Order Statuses"      |
			| "Pages"        | "Pages" 					     |
			| "Reports"      | "Monthly Sales"       |
			| "Reports"      | "Most Sold Products"  |
			| "Settings"     | "Store Info"          |
			| "Settings"     | "Defaults"            |
			| "Settings"     | "General"             |
			| "Settings"     | "Images"              |
			| "Settings"     | "Checkout"            |
			| "Settings"     | "Advanced"            |
			| "Settings"     | "Security"            |
			| "Slide"        | "Slide"               |
			| "Tax"          | "Tax Classes"         |
			| "Tax" 				 | "Tax Rates"           |
			| "Translations" | "Search Translations" |
			| "Translations" | "Scan Files"   			 |  
			| "User"         | "User" 						   |
			| "vQmods"       | "vQmods" 					   |