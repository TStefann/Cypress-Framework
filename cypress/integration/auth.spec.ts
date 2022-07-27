import { HomePage } from "../pages/homepage.page";
import { LoginPage } from "../pages/login.page";

describe("Authentication scenarios", () => {
  beforeEach(() => {
    cy.visit("/");
  cy.intercept('POST', '/api/users/login').as('login')
  });

  it("Login success case", () => {
    cy.contains("Sign in").should('be.visible').click()
    LoginPage.typeEmail(LoginPage.users.email);
    LoginPage.typePassword(LoginPage.users.password);
    LoginPage.submitLoginForm();
    cy.wait("@login").its("response.statusCode").should("eq", 307);
    cy.wait("@login").its("response.statusCode").should("eq", 200);
    cy.url().should("not.contain", "/login");
    
  });

  it("Login unsuccessful case", () => {
    cy.contains("Sign in").should('be.visible').click()
    LoginPage.typeEmail(LoginPage.users.email);
    LoginPage.typePassword("wrongPassword");
    LoginPage.submitLoginForm();
    cy.wait("@login").its("response.statusCode").should("eq", 307);
    cy.wait("@login").its("response.statusCode").should("eq", 403);
    cy.contains(' email or password is invalid ').should('be.visible')

    cy.url().should("contain", "/login");
    
  });

   it("Login/Logout success case", () => {
    cy.contains("Sign in").should('be.visible').click()
    LoginPage.typeEmail(LoginPage.users.email);
    LoginPage.typePassword(LoginPage.users.password);
    LoginPage.submitLoginForm();
    cy.wait("@login").its("response.statusCode").should("eq", 307);
    cy.wait("@login").its("response.statusCode").should("eq", 200);
    cy.url().should("not.contain", "/login");
    HomePage.goToSettings()
    HomePage.logOutbutton()
    cy.contains("Sign in").should('be.visible')

    
  });
 
   
  });


