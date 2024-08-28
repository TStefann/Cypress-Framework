import { faker } from "@faker-js/faker";
import { CreateArticle } from "../pages/craeteArticle";
import { HomePage } from "../pages/homepage.page";
import { LoginPage } from "../pages/login.page";

describe("", () => {
  beforeEach(() => {
    cy.loginHeadless(LoginPage.users.email, LoginPage.users.password);
    cy.intercept("GET", "api/tags").as("tags");
    cy.intercept("POST", "/api/articles").as("article");
  });

  const tag = " implementations ";

  it("Filter articles by tagname ", () => {
    const tag = " implementations ";
    
    cy.wait("@tags").its("response.statusCode").should("eq", 200);
    HomePage.filterByTag(tag);
    HomePage.filterArticleTagsAreDisplayed(tag);
  });

  it("Create a new article and check it in Global Feed", () => {
    const articleTitle = faker.random.word();
    const articleDetails = faker.random.word();
    const articleText = faker.random.words();

    HomePage.goToNewArticle();
    CreateArticle.createNewArticle(
      articleTitle,
      articleDetails,
      articleText,
      tag
    );
    
    cy.wait("@article").its("response.statusCode").should("eq", 201);

    cy.visit("/");
    cy.contains("Global Feed").should("be.visible").click();

    HomePage.checkArticleDetails(articleTitle, articleDetails);
  });
});
