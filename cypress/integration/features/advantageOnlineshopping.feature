Feature: Gerenciamento de produtos no carrinho e processo de pagamento

  Scenario: Buscar um produto
    Given que eu estou na página inicial do site Advantage Online Shopping
    And clicar no ícone de lupa no cabeçalho do site
    And digitar "BOSE SOUNDLINK WIRELESS SPEAKER" na barra de pesquisa
    When clico em "View All"
    Then devo ver uma lista de produtos relacionados ao nome buscado

  Scenario: Adicionar um produto ao carrinho de compras
    Given que eu estou na página inicial do site Advantage Online Shopping
    And estou na página de resultados de busca
    And clico no produto desejado
    And escolher a cor e a quantidade
    When clicar no botão "Adicionar ao Carrinho"
    Then o produto deve ser adicionado ao carrinho

  Scenario: Verificar produtos no carrinho e na tela de pagamento
    Given que eu estou na página inicial do site Advantage Online Shopping
    And adicionei um produto ao carrinho
    When navegar até tela de order payment
    Then o produto deve estar listado na tela de pagamento com as seguintes informações: nome, cor, quantidade e preço

