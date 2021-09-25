///  <reference types="cypress"/>


import { loginpage } from './../../pageObjects/Login-page';




Given('Open EJR URL', () => {
    loginpage.navigate()

})

When('I Type in', (datatable) => { 

    datatable.hashes().forEach(Element => {
        loginpage.clickLogin()
        loginpage.createEmail(Element.username)
        loginpage.tittle(Element.tittle)
        loginpage.firstName(Element.firstname)
        loginpage.lastName(Element.lastname)
        loginpage.password(Element.password)
        loginpage.day(Element.day)
        loginpage.month(Element.month)
        loginpage.year(Element.year)
        loginpage.newsletter()
        loginpage.specialOffer()
        loginpage.company(Element.company)
        loginpage.address(Element.address)
        loginpage.address2(Element.address2)
        loginpage.city(Element.city)
        loginpage.state(Element.state)
        loginpage.zip(Element.zip)
        loginpage.additionalInformation(Element.additionalInformation)
        loginpage.phone(Element.phone)
        loginpage.mobilePhone(Element.mobilePhone)
        loginpage.alias(Element.alias)
        loginpage.submitAcount()
        
      })

})

Then('User Name should be shown', () => {
    const inforAccount=cy.get(".info-account")
if (inforAccount.should('have.text', 'Welcome to your account. Here you can manage all of your personal information and orders.')){
  cy.log('Test Pass')
}
else
  Cypress.env('RETRIES', 2)
})