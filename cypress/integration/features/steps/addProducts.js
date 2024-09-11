import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../pages/advantageOnlineshopping.page"
import AddProducts from "../../../pages/addProductsPage.page";

const nomeProduto = "BOSE SOUNDLINK WIRELESS SPEAKER";
Given('que eu estou na página inicial do site Advantage Online Shopping', () => {
    HomePage.VisitPage();
});


And('estou na página de resultados de busca', () => {
    HomePage.logo()
    HomePage.clicIconkMagnifyingGlass();
    HomePage.searchProduct(nomeProduto);

});

And('clico no produto desejado', () => {
    HomePage.btnViewAll()
    HomePage.clickProduct()

});
And('escolho a cor e a quantidade', () => {
    AddProducts.clickColor()
    AddProducts.addQt()

});
When('clico no botão "Adicionar ao Carrinho"', () => {
    AddProducts.addToCart()

});
Then('o produto deve ser adicionado ao carrinho', () => {
    AddProducts.openCart()
    AddProducts.totalProducts()
});