<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A aplicação foi desenvolvida utilizando uma estrutura NESTJS com NodeJS. Essa combinação proporciona velocidade e uma aplicação robusta, eficiente e escalonável.</p>
  
## Descrição

Olá e bem-vindo ao README da nossa aplicação! Aqui estão as instruções detalhadas sobre como você pode configurar e executar a aplicação localmente em seu ambiente de desenvolvimento.

## Pré-Requisito

Antes de começar, certifique-se de ter instalado em sua máquina local:

- <a href="http://nodejs.org" target="_blank">Node.js</a> - versão LTS recomendada
- GIT - para baixar o conteúdo dessa API
- <a href="https://docs.nestjs.com/cli/overview" target="_blank">Nest CLI</a> - (opcional, mas recomendado para desenvolvimento com NestJS)

## Configuração do Ambiente

```bash
$ git clone https://github.com/JaSilva1987/apiPiorFilme.git
```

## Instalação das dependências

```bash
$ cd apiPiorFilme
npm install
```

## Executando a Aplicação

```bash
# Gerando o Build da Aplicação
$ npm run build

# Executando em modo Produtivo
$ npm run start:prod
```

Ao Executar o sistema irá criar a base de dados e a tabela necessário para executar a aplicação.

Isso iniciará o servidor e a aplicação estará acessível em http://localhost:3005/api por padrão.

Tambem é possivel acessar via POSTMAN importando o arquivo swagger-spec.json gerado na raiz da aplicação.

Caso precise dentro da pasta database/arquivoImportacao encontra-se o CSV para realizar a importação do arquivo.

O endpoint POST Importa filmes de arquivo CSV, basta informar a URL de um arquivo CSV que o usuário de execução da aplicação tenha permissão de leitura para que a tabela filmes iniciazada no start da aplicação seja populada.

## Testes

```bash
$ npm run test

# test coverage
$ npm run test:cov
```

## Verificando cobertura de testes

```bash
$ npm run test:cov
```

## Por que TYPESCRIPT

Mais conhecido como um superset do Javascript, ou seja, um conjunto de ferramentas, o TypeScript foi criado com o objetivo de incluir recursos que não estão presentes no JS. Por meio dele é possível definir a tipagem estática, parâmetros e retorno de funções.

## Comparativo

| JavaScript                                                                                          | TypeScript                                                                                                                                    |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Dinâmicamente Tipada                                                                                | TypeScript é um superconjunto de Javascript que compila em JavaScript simples.                                                                |
| Não há necessidade de tipagem                                                                       | Apresenta os erros em tempo de codificação                                                                                                    |
| JavaScript é uma linguagem baseada em intérprete para adicionar interatividade a uma página da web  | Feedback mais rápido                                                                                                                          |
| Javascript é uma linguagem de script.                                                               | TypeScript é uma linguagem de programação orientada a objetos.                                                                                |
| Javascript não precisa de um compilador. Ele roda no navegador da web.                              | navegador da web. TypeScript requer um compilador TypeScript para ser convertido em um arquivo JavaScript.                                    |
| JavaScript não é puramente orientado a objetos. É baseado em protótipo. Não possui interfaces.      | TypeScript é uma linguagem de programação orientada a objetos e é baseada em classes. Pode usar classes, herança, interfaces e modificadores. |
| JavaScript é executado no lado do cliente.                                                          | O TypeScript é executado no lado do cliente e também no lado do servidor.                                                                     |
| Javascript não possui verificação de tipo estático. TypeScript possui verificação de tipo estático. | TypeScript possui verificação de tipo estático.                                                                                               |
| Javascript não permite suporte a módulos.                                                           | O Typescript pode importar arquivos e módulos.                                                                                                |
