export class SignUp {
    static selectors = {
      emailInput: "[formcontrolname='email']",
      passwordInput: '[formcontrolname="password"]',
      submitLogin: 'button[type="submit"]',
      userNameInput: "[formcontrolname='username']",
      submitButton: "[type='submit']"
    };
  

    static typeUserName = (email: string) =>
    cy
      .get(this.selectors.userNameInput)
      .should("be.visible")
      .click()
      .clear()
      .type(email)
      .should("have.value", email);

    
    static typeEmail = (email: string) =>
    cy
      .get(this.selectors.emailInput)
      .should("be.visible")
      .click()
      .clear()
      .type(email)
      .should("have.value", email);

  static typePassword = (password: string) =>
    cy
      .get(this.selectors.passwordInput)
      .should("be.visible")
      .click()
      .clear()
      .type(password);

      static submitSignUp = () =>
      cy.get(this.selectors.submitLogin).should("be.visible").click();
}