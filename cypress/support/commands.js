// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//

Cypress.Commands.add("loginHeadless", (email, password) => {
  const userCredentials = {
    user: {
      email: email,
      password: password,
    },
  };

  cy.request(
    "POST",
    "https://api.realworld.io/api/users/login",
    userCredentials
  )
    .its("body")
    .then(body => {
      const token = body.user.token;
      cy.visit("/", {
        onBeforeLoad(win) {
          win.localStorage.setItem("jwtToken", token);
        },
      });
    });
});

Cypress.Commands.add("signUpHeadless", (email, password, userName) => {
  const userCredentials = {
    user: {
      email: email,
      password: password,
      username: userName,
    },
  };

  cy.request(
    "POST",
    "https://api.realworld.io/api/users",
    userCredentials
  ).then(resp => expect(resp.status).to.eq(201));
});
