// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//  Cypress.Commands.add('loginHeadless', (email, password) => { 

//     cy.request('POST' , 'https://api.realworld.io/api/users/login' ,
//      {"email": email,
//     "password": password}).its('body').then(body => {
//         const token = body.user.token
//         cy.visit('/',{
//         oneBeforeLoad(win){
//             win.localStorage.setItem('jwToken', token)
//         }
//     }
//         )
//     })


//  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })