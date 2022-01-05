$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/features/AdactingFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking Through Adactin Application",
  "description": "",
  "id": "hotel-booking-through-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "user Enter Login",
  "description": "",
  "id": "hotel-booking-through-adactin-application;user-enter-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Launch The Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter \"\u003cUsername\u003e\" The User Name",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter \"\u003cPassword\u003e\" The Password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Click The Login Button",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "hotel-booking-through-adactin-application;user-enter-login;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 8,
      "id": "hotel-booking-through-adactin-application;user-enter-login;;1"
    },
    {
      "cells": [
        "A",
        "a@123"
      ],
      "line": 9,
      "id": "hotel-booking-through-adactin-application;user-enter-login;;2"
    },
    {
      "cells": [
        "B",
        "b@123"
      ],
      "line": 10,
      "id": "hotel-booking-through-adactin-application;user-enter-login;;3"
    },
    {
      "cells": [
        "jmramachandran",
        "Welcome@123"
      ],
      "line": 11,
      "id": "hotel-booking-through-adactin-application;user-enter-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 878100,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "user Enter Login",
  "description": "",
  "id": "hotel-booking-through-adactin-application;user-enter-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Launch The Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter \"A\" The User Name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter \"a@123\" The Password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Click The Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Browser()"
});
formatter.result({
  "duration": 4058009700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A",
      "offset": 12
    }
  ],
  "location": "Step_Definition.user_Enter_The_User_Name(String)"
});
formatter.result({
  "duration": 132415400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a@123",
      "offset": 12
    }
  ],
  "location": "Step_Definition.user_Enter_The_Password(String)"
});
formatter.result({
  "duration": 79210600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Login_Button()"
});
formatter.result({
  "duration": 352876700,
  "status": "passed"
});
formatter.after({
  "duration": 167500,
  "status": "passed"
});
formatter.before({
  "duration": 89200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "user Enter Login",
  "description": "",
  "id": "hotel-booking-through-adactin-application;user-enter-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Launch The Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter \"B\" The User Name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter \"b@123\" The Password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Click The Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Browser()"
});
formatter.result({
  "duration": 252301700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "B",
      "offset": 12
    }
  ],
  "location": "Step_Definition.user_Enter_The_User_Name(String)"
});
formatter.result({
  "duration": 76743400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "b@123",
      "offset": 12
    }
  ],
  "location": "Step_Definition.user_Enter_The_Password(String)"
});
formatter.result({
  "duration": 86526600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Login_Button()"
});
formatter.result({
  "duration": 318421000,
  "status": "passed"
});
formatter.after({
  "duration": 112600,
  "status": "passed"
});
formatter.before({
  "duration": 99800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "user Enter Login",
  "description": "",
  "id": "hotel-booking-through-adactin-application;user-enter-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Launch The Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter \"jmramachandran\" The User Name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter \"Welcome@123\" The Password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Click The Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Browser()"
});
formatter.result({
  "duration": 245192300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jmramachandran",
      "offset": 12
    }
  ],
  "location": "Step_Definition.user_Enter_The_User_Name(String)"
});
formatter.result({
  "duration": 88192500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome@123",
      "offset": 12
    }
  ],
  "location": "Step_Definition.user_Enter_The_Password(String)"
});
formatter.result({
  "duration": 117545900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Login_Button()"
});
formatter.result({
  "duration": 675585100,
  "status": "passed"
});
formatter.after({
  "duration": 124500,
  "status": "passed"
});
formatter.before({
  "duration": 62300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "search Hotel Screen",
  "description": "",
  "id": "hotel-booking-through-adactin-application;search-hotel-screen",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user Select A Location",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user Select A Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Select A Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Choose The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Enter Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Enter Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Select Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Select Childs Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Click On Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Select_A_Location()"
});
formatter.result({
  "duration": 303290800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_A_Hotel()"
});
formatter.result({
  "duration": 137513700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_A_Room_Type()"
});
formatter.result({
  "duration": 141115600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Choose_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 198638800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_Check_In_Date()"
});
formatter.result({
  "duration": 77244700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_Check_Out_Date()"
});
formatter.result({
  "duration": 75018900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_Adults_Per_Room()"
});
formatter.result({
  "duration": 207223700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_Childs_Per_Room()"
});
formatter.result({
  "duration": 236848800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_Search_Button()"
});
formatter.result({
  "duration": 553574700,
  "status": "passed"
});
formatter.after({
  "duration": 115900,
  "status": "passed"
});
formatter.before({
  "duration": 95600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "select A Hotel",
  "description": "",
  "id": "hotel-booking-through-adactin-application;select-a-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "user Click Radio Button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user Click The Enter Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_Radio_Button()"
});
formatter.result({
  "duration": 69342900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Enter_Button()"
});
formatter.result({
  "duration": 526303900,
  "status": "passed"
});
formatter.after({
  "duration": 104000,
  "status": "passed"
});
formatter.before({
  "duration": 86000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Book A Hotel",
  "description": "",
  "id": "hotel-booking-through-adactin-application;book-a-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "user Enter The First Name",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user Enter The Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Enter The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Enter The CC Number",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Select The CC Type",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Select Expiry Month",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Select Expiry Year",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Enter CVV No",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Click The Book Now Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_First_Name()"
});
formatter.result({
  "duration": 97130700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Last_Name()"
});
formatter.result({
  "duration": 81062100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Billing_Address()"
});
formatter.result({
  "duration": 89604900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_CC_Number()"
});
formatter.result({
  "duration": 119186200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_CC_Type()"
});
formatter.result({
  "duration": 204561000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_Expiry_Month()"
});
formatter.result({
  "duration": 216450900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_Expiry_Year()"
});
formatter.result({
  "duration": 355645300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_CVV_No()"
});
formatter.result({
  "duration": 80300100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Book_Now_Button()"
});
formatter.result({
  "duration": 70974900,
  "status": "passed"
});
formatter.after({
  "duration": 92000,
  "status": "passed"
});
formatter.before({
  "duration": 179500,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Logout The Page",
  "description": "",
  "id": "hotel-booking-through-adactin-application;logout-the-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "user Click The Logout Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Logout_Button()"
});
formatter.result({
  "duration": 6275310400,
  "status": "passed"
});
formatter.after({
  "duration": 122800,
  "status": "passed"
});
});