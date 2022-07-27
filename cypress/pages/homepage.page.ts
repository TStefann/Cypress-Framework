export class HomePage {
    static selectors = {
      settingButton: "[href='/settings']",
      passwordInput: '[formcontrolname="password"]',
      submitLogin: 'button[type="submit"]',
      tagsBox: '[class=tag-list]',
      tagLabel: '.tag-pill',
      articlePreview: '.article-preview',
      articleLabel: '.tag-outline'

    };
  
  
    static goToSettings = () =>
    cy.get(this.selectors.settingButton).should("be.visible").click();

    static logOutbutton = () =>
    cy.contains('logout.').should("be.visible").click();

    static filterByTag = (tag : string) => {
        cy.get(this.selectors.tagsBox).within(() =>{
            cy.get(this.selectors.tagLabel).contains(tag).should('be.visible').click()
        })}


        static filterArticleTagsAreDisplayed = (tag : string) => {
                cy.get(this.selectors.articlePreview).should('be.visible').each(($el,) => {
                    cy.wrap($el).within(() =>{
                cy.get(this.selectors.articleLabel).should('be.visible').and('contain.text', tag)
            })}

                )}
        }
        
               


        


        


