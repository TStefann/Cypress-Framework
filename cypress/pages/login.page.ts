export class LoginPage {
  static selectors = {
    emailInput: "[formcontrolname='email']",
    passwordInput: '[formcontrolname="password"]',
    submitLogin: 'button[type="submit"]',
    logInBtn: "a[routerlink= '/login']",
  };

  static users = {
    email: "123test123",
    password: "123test123",
  };

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

  static submitLoginForm = () =>
    cy.get(this.selectors.submitLogin).should("be.visible").click();
}
