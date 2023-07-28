# Projeto Backend com Node.js, TypeScript, Express e Prisma

Este é um projeto de backend desenvolvido com Node.js, TypeScript, Express e Prisma, utilizando o banco de dados PostgreSQL. O objetivo deste projeto é criar uma API robusta e escalável para suportar uma aplicação web ou mobile.

## Requisitos

Certifique-se de ter o Node.js instalado em sua máquina antes de executar este projeto. Caso ainda não tenha o Node.js, você pode baixá-lo em [https://nodejs.org/](https://nodejs.org/).

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando no terminal:

```
npm install
```

## Configuração do Banco de Dados

Antes de executar o projeto, é necessário configurar o banco de dados PostgreSQL. Certifique-se de ter o PostgreSQL instalado em sua máquina e crie um banco de dados vazio com o nome desejado.

Em seguida, crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente relacionadas ao banco de dados:

```
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
```

Substitua `username`, `password` e `database_name` pelas suas credenciais e nome do banco de dados.

## Executando o projeto

Para iniciar o servidor local, execute o seguinte comando:

```
npm run dev
```

O servidor será iniciado na porta 3333, e a API estará pronta para receber requisições.

## Estrutura do projeto

O projeto segue a seguinte estrutura de diretórios:

```
/
|-- prisma/
|   |-- schema.prisma
|   |-- ...
|-- src/
|   |-- controllers/
|   |-- database/
|   |-- models/
|   |-- routes/
|   |-- server.ts
|   |-- ...
|-- package.json
|-- tsconfig.json
|-- ...
```

A pasta `src` contém os arquivos TypeScript da aplicação, organizados em controllers, models e rotas. A pasta `prisma` contém o arquivo `schema.prisma`, onde são definidos os modelos e configurações do banco de dados.

## Contribuindo

Se você deseja contribuir para este projeto, fique à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.

---