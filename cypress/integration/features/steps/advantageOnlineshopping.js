import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../pages/advantageOnlineshopping.page"
const nomeProduto = "BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES";

Given('que eu estou na página inicial do site Advantage Online Shopping', () => {
  HomePage.VisitPage();
});

And('clicar no ícone de lupa no cabeçalho do site', () => {
  HomePage.clicIconkMagnifyingGlass();
});

And('digitar {string} na barra de pesquisa', (nomeProduto) => {
  HomePage.searchProduct(nomeProduto);
});

When('clico em "View All"', () => {
  HomePage.btnViewAll();
});

Then('devo ver uma lista de produtos relacionados ao nome buscado', (nomeProduto) => {
  HomePage.verifyProductInList(nomeProduto);
});
