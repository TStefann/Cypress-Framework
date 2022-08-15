declare namespace Cypress {
  interface Chainable {
    loginHeadless(email: string, password: string): Chainable<any>;
    signUpHeadless(email: string, password: string, userName: string);
  }
}
