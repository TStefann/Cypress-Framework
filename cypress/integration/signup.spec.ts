import { SignUp } from "../pages/signup.page";
import { faker } from '@faker-js/faker';
import { LoginPage } from "../pages/login.page";
import { Helpers } from "../helpers";

const randomUserName = faker.internet.userName() 
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

describe("Sign in a new user", () => {
    beforeEach(() => {
      cy.visit("/");
    cy.intercept('POST', '/api/users').as('signUp')
    });
  
    it("Signup new user successful", () => {
     
        cy.contains("Sign up").should('be.visible').click()
        cy.url().should("contain", "/register");

        SignUp.typeUserName(randomUserName)
        SignUp.typeEmail(randomEmail)
        SignUp.typePassword(randomPassword)
        SignUp.submitSignUp()
        cy.wait("@signUp").its("response.statusCode").should("eq", 307);
         cy.wait("@signUp").its("response.statusCode").should("eq", 200);
         cy.url().should("not.contain", "/register");

    })

    it("Signup existing user", () => {
     
      cy.contains("Sign up").should('be.visible').click()
      cy.url().should("contain", "/register");

      SignUp.typeUserName(randomUserName)
      SignUp.typeEmail(randomEmail)
      SignUp.typePassword(randomPassword)
      SignUp.submitSignUp()
      // cy.wait("@signUp").its("response.statusCode").should("eq", 307);
      //  cy.wait("@signUp").its("response.statusCode").should("eq", 200);
       cy.url().should("contain", "/register");
       cy.contains("email has already been taken").should('be.visible')
       cy.contains("username has already been taken").should('be.visible')


  })
    
    it("Signup new user and Login", () => {
      const randomUserName = faker.internet.userName() 
      const randomEmail = faker.internet.email();
      const randomPassword = faker.internet.password();

      Helpers.signUpHeadless(randomEmail, randomPassword,randomUserName)
       cy.contains("Sign in").should('be.visible').click()
       LoginPage.typeEmail(randomEmail);
       LoginPage.typePassword(randomPassword);
       LoginPage.submitLoginForm();
      })

})