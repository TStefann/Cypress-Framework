import { HomePage } from "../pages/homepage.page";
import { LoginPage } from "../pages/login.page";

describe('', () => {
    beforeEach(() => {
       cy.loginHeadless(LoginPage.users.email,LoginPage.users.password)
        cy.intercept('GET', 'api/tags').as('tags')
        
      });

      it('Filter articles by tagname ', () => {
        const tag = ' implementations '
        cy.wait("@tags").its("response.statusCode").should("eq", 307);
        cy.wait("@tags").its("response.statusCode").should("eq", 200);
        HomePage.filterByTag(tag)
        HomePage.filterArticleTagsAreDisplayed(tag)

      });
});