class HomePage {
  VisitPage() {
    cy.viewport(1440, 900);
    cy.visit("/");
  }

  clicIconkMagnifyingGlass() {
    cy.get('svg[data-ng-click="openSearchProducts()"]').click();
  }

  searchProduct(nomeProduto) {
    cy.get('#autoComplete').type(nomeProduto);
  }

  clickOnSearch() {
    cy.get('div[id="search"] input').type('{enter}', { force: true });
  }

  btnViewAll() {
    cy.get('a[translate="View_All"]').click();
  }

  urlSearch() {
    cy.url().should('include', 'search');
  }

  clickProduct() {
    cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > li.ng-scope').click();
  }
  verifyProductInList(nomeProduto) {
    cy.get('div[data-ng-click="$event.stopPropagation()"] h3').eq(1)
      .contains('TOP RESULTS FOR: "BOSE SOUNDLINK WIRELESS SPEAKER') 
      .should('be.visible');
  }
  logo(){
    cy.get('.logoDemo').click()
  }
  clickColor(){
    cy.get('span.productColor').each(($color) => {
      // Clica em cada cor
      cy.wrap($color).click();
      cy.wrap($color).should('have.class', 'colorSelected');
    });
  }
}

export default new HomePage();
