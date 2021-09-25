Feature: Test EJR Login
 
  I want to test the Login in EJR application
  
  Scenario: Test login with a valid User 
    Given Open EJR URL
    When I Type in
        |    username  | tittle | firstname  |  lastname  | password  | day | month | year  |company|address|address2|city|state|zip|country|mobilePhone|alias|additionalInformation|phone|
        |    sebas1238@gmail.com  |Mr.|sebastian  |Londono Marin|realpage1234|2|February|1996|Real Page|Cr87a#32-81|Cr87a#32-81|Medellin|California|90048|United States|3135418670|dark0492|hola como estas|3302216|
    Then User Name should be shown