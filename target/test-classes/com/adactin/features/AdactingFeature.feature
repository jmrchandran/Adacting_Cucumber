Feature: Hotel Booking Through Adactin Application
Scenario Outline: user Enter Login
Given user Launch The Browser
When user Enter "<Username>" The User Name
And user Enter "<Password>" The Password
Then user Click The Login Button
Examples:
|Username|Password|
|A|a@123|
|B|b@123|
|jmramachandran|Welcome@123|

Scenario: search Hotel Screen
When user Select A Location
And user Select A Hotel
And user Select A Room Type
And user Choose The Number Of Rooms
And user Enter Check In Date
And user Enter Check Out Date
And user Select Adults Per Room
And user Select Childs Per Room
Then user Click On Search Button

Scenario: select A Hotel
When user Click Radio Button 
Then user Click The Enter Button

Scenario: Book A Hotel 
When user Enter The First Name
And user Enter The Last Name
And user Enter The Billing Address
And user Enter The CC Number
And user Select The CC Type
And user Select Expiry Month
And user Select Expiry Year
And user Enter CVV No
Then user Click The Book Now Button

Scenario: Logout The Page 
Then user Click The Logout Button

