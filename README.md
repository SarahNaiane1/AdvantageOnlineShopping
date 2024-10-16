# Projeto de Testes Automatizados para Advantage Online Shopping

Este projeto contém testes automatizados para o site [Advantage Online Shopping](https://advantageonlineshopping.com/#/), utilizando o framework **Cypress** com **Cucumber** para escrever cenários de testes em BDD (Behavior-Driven Development).

## Tecnologias

- **Cucumber**: Para a escrita dos cenários de teste seguindo a abordagem BDD.
- **Cypress**: Framework para testes de ponta a ponta (E2E) e automação de testes.

## Requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/en/download/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/get-npm) ou [yarn](https://yarnpkg.com/getting-started) (gerenciador de pacotes)

## Instalação

Siga os passos abaixo para configurar o ambiente de testes:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/cypress-cucumber-project.git~

2.**Instale as dependências do projeto:**

   Entre no diretório do projeto:

   ```bash
      cd cypress-cucumber-project~
```
3.**Instale as dependências utilizando npm ou yarn::**
Com NPM: 

```bash
  npm install
```


Com yarn: 

```bash
  yarn install
```

4. **Estrutura do Projeto**
   
      cypress/integration: Contém os arquivos de especificação dos testes escritos em Cucumber.
      
      cypress/support: Contém arquivos de suporte, como funções auxiliares e configurações globais.
      
      cypress/fixtures: Contém dados de teste simulados (fixtures).
      
      cypress/plugins: Contém plugins e configurações do Cypress.
      
      cypress.json: Arquivo de configuração do Cypress.


6. Executando os Testes
```bash
npx cypress open
```

