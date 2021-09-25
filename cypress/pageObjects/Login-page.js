/// <reference types="cypress" />

class Loginpage {
      
  navigate() {
    cy.visit('http://automationpractice.com/index.php')
}

  clickLogin(){
    const login=cy.get('.login')
    login.click()
    login.wait(4000)

  }

  createEmail(value){
    const sentCreateEmail=cy.get("#email_create")
    sentCreateEmail.type(value)
    const createAcccount=cy.get("#SubmitCreate > span")
    createAcccount.click()
    createAcccount.wait(4000)
  }

  tittle(value){
    const tittle=cy.contains(value)
    tittle.click()
  }

  firstName(value){
    const create=cy.get("#customer_firstname")
    create.type(value)
  }
    
  lastName(value){
      const create=cy.get("#customer_lastname")
      create.type(value)
    }

    password(value){
      const create=cy.get("#passwd")
      create.type(value)
    }
    
    day(value){
      const create=cy.get("select#days").select(value)
      create.click
    }
    month(value){
      const create1=cy.get("select#months").select(value)
      create1.click
    }
    year(value){
      const create2=cy.get("select#years").select(value)
      create2.click
    }
    newsletter(){
      const newsletter=cy.get("#newsletter")
      newsletter.click
    }
    specialOffer(){
      const specialOffer=cy.get("#optin")
      specialOffer.click
    }
    company(value){
      const company=cy.get("#company")
      company.type(value)
    }

    address(value){
      const address=cy.get("#address1")
      address.type(value)
    }
    address2(value){
      const address2=cy.get("#address2")
      address2.type(value)
    }
    city(value){
      const city=cy.get("#city")
      city.type(value)
      city.wait(2000)
    }

    state(value){
      const state=cy.get("select#id_state").select(value)
      state.click
    }

    zip(value){
      const city=cy.get("#postcode")
      city.type(value)
    }

    country(value){
      const country=cy.get("select#id_country").select(value)
      country.click
    }
    additionalInformation(value){
      const additionalInformation=cy.get("#other")
      additionalInformation.type(value)
    }
    phone(value){
      const phone=cy.get("#phone")
      phone.type(value)
    }

    mobilePhone(value){
      const mobilePhone=cy.get("#phone_mobile")
      mobilePhone.type(value)
    }

    alias(value){
      const alias=cy.get("#alias")
      alias.clear().type(value)
      alias.wait(2000)
    }

    submitAcount(){
      const submit=cy.get("#submitAccount")
      submit.click()
    }
    
}

export const loginpage= new Loginpage();
