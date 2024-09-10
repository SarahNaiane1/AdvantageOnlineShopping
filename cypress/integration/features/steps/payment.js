import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../pages/advantageOnlineshopping.page"
import AddProductsPage from "../../../pages/addProductsPage.page"
import PaymentPage from "../../../pages/payment.page"

const nomeProduto = "BOSE SOUNDLINK WIRELESS SPEAKER";
Given('que eu estou na página inicial do site Advantage Online Shopping', () => {
    HomePage.VisitPage();
});
And('adicionei um produto ao carrinho', () => {
    HomePage.logo()
    HomePage.clicIconkMagnifyingGlass();
    HomePage.searchProduct(nomeProduto);
    HomePage.btnViewAll()
    HomePage.clickProduct()
    AddProductsPage.clickColor()
    AddProductsPage.addQt()
    AddProductsPage.addToCart()
    AddProductsPage.openCart()
    AddProductsPage.totalProducts()
});
When('navegar até tela de order payment', () => {
    PaymentPage.btnCheckout()

});
Then('o produto deve estar listado na tela de pagamento com as seguintes informações: nome, cor, quantidade e preço', () => {
 
    PaymentPage.paymentDataValidation()



});



