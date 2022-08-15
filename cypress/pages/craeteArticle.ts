export class CreateArticle {
  static selectors = {
    articleTitleInput: '[placeholder="Article Title"]',
    articleDetailsInput: '[formcontrolname="description"]',
    articleTextInput: '[formcontrolname="body"]',
    tagsInput: '[placeholder="Enter tags"]',
  };

  static createNewArticle = (
    title: string,
    articleDetails: string,
    articleText: string,
    tags: string
  ) => {
    cy.get(this.selectors.articleTitleInput)
      .should("be.visible")
      .click()
      .clear()
      .type(title)
      .should("have.value", title);

    cy.get(this.selectors.articleDetailsInput)
      .should("be.visible")
      .click()
      .clear()
      .type(articleDetails)
      .should("have.value", articleDetails);

    cy.get(this.selectors.articleTextInput)
      .should("be.visible")
      .click()
      .clear()
      .type(articleText)
      .should("have.value", articleText);

    cy.get(this.selectors.tagsInput)
      .should("be.visible")
      .click()
      .clear()
      .type(tags)
      .should("have.value", tags);

    cy.contains("Publish Article").should("be.visible").click();
  };
}
