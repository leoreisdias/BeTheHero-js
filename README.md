# Be The Hero

## Aplicação para ONG's e heróis

Aplicação voltada a publicação de casos por ONG's de diferentes cidades e regiões.
Usuários a partir da aplicação Mobile terão acessos aos casos e podem entrar em contato via E-mail ou WhatsApp para demonstrar interesse em ajudar no caso escolhido.

## Backend

Para o Backend foi utilizado de Banco de Dados SQL, mais especificamente SQLite, utilizando do KnexJS e Express.

* Migrations
  * São as estruturas das tabelas e atributos
  * Possibilita retroceder ações feitas ou atualizar o banco em caso de mudanças nele ao trabalhar em equipe.
* As Rotas tiveram foco em:
  * Sessions
    * O Login das ONG's na parte Web da aplicação
  * Profile
    * Exibir os casos cadastrados da ONG loggada
  * ONGS
    * Cadastro de ONG's e busca
  * Incidents
    * Cadastro de casos, exibição de todos casos de todas ONG's e deletar

A execução de pacotes teve como uso o NPX para evitar encher a maquina com arquivos pós desenvolvimento.

## Frontend

Para o Frontend foi utilizado do ReactJS com a Lib Axios sendo a ponte para conexão ao Backend

* Pages
  * Logon
    * Efeito de Login das ONG's na página Web
  * NewIncident
    * Cadastrar novos casos
  * Profile
    * Exibir todos casos da ONG loggada na sessão
  * Register
    * Cadastro de ONG
  
Para os Icones, utilizei dos "react-icons" e sua imensa biblioteca de icones. Sendo o foco os icones da fonte Feather.

Conceitos reforçados:
* useEffect
  * Monitora mudanças de variaveis para atualizar a renderização da pagina conforme definido
* useState
  * Auxilia na causa da mutabilidade, previnindo variaveis de serem perdidas, mas focando na "pilhagem" de seus valores. Variaveis mudam o estado.
  * useState define a variavel e a função para altera-lo
    * Foi usado desestruturação para obter melhor a função e a variavel

## Mobile

React Native se apresentou como uma ferramente eficaz, interessante e gostosa por assim dizer de se trabalhar.

Para tal, foi usado do Expo para mais fácil visualização e testes da aplicação enquanto desenvolvida.

Novamente com Axios fazendo a ligação com o Backend e com as seguintes paginas:
* Detail
  * Para informar detalhes de um caso selecionado pelo usuário, tais como informações de contato.
    * WhatsApp e E-mail foram linkados na aplicação para serem abertos com mensagem e assunto pré definidos para fácilitar a comunicação do usuário com a ONG.
      * Para o E-mail foi usado as funções do MailComposer da lib "expo-mail-composer"
      * E para o WhatsApp foi puxado do seu endereço existente dentro dos aparelhos celulares.
* Incidents
  * Exibe todos os casos de todas as ONG's em Scroll infinito e paginados.
    * A atualização dos casos é atualizada ao chegar no final do scroll, com novos sendo carregados. (Também definido do Backend).

## Validação com Celebrate/Joi

A validação foi feita a partir da lib Celebrate que faz a ponte do Joi com Express.

Do celebrate foi usado o proprio celebrate para iniciar a validação em cada rota, o Segments para puxar os parametros a serem validados (BODY,QUERY,PARAMS,HEADERS) e o Joi para filtragem e definições da validação.

```txt
Lembrar que para referenciar objetos que a chave dele for uma variavel do JavaScript, deve se fazer dentro de cochetes [ ].
```

## TDD - Testes

Para testes foi estudado o unitário e o de integração.

* Unit
  * Focado em testar algo bem especifico da aplicação, como uma função isolada.
* Integração
  * Analisar varios testes como a relação de páginas, rotas e etc. Indo o mais longe possível na aplicação.

```txt  
As bibliotecas utilizadas para teste foram o JEST.
```

Para o teste "Unit" foi testado com a função de gerar um ID unico para cada ONG.

E de "Integration" foi testado a rota de criação de ONG's com um banco de dados test, utilizando variavel de ambiente JS NODE_ENV para diferenciar a inicialização dos bancos.

## Lib's do Be The Hero

### Backend

* Nodemon
  * https://nodemon.io/
* Knex
  * http://knexjs.org/
* Crypto
  * https://nodejs.org/api/crypto.html#crypto_crypto
* Cors
  * https://expressjs.com/en/resources/middleware/cors.html
* Express
  * https://expressjs.com/
* Celebrate
  * https://github.com/arb/celebrate
* JEST
  * https://jestjs.io/
* Cross-env
  * https://github.com/kentcdodds/cross-env
* SUPERTEST
  * https://github.com/visionmedia/supertest

### Frontend

* React
  * https://pt-br.reactjs.org/
* React-DOM
  * https://pt-br.reactjs.org/docs/react-dom.html
* AXIOS
  * https://github.com/axios/axios
* React-icons
  * https://react-icons.netlify.com/#/
* React-router-dom
  * https://reacttraining.com/react-router/web/guides/quick-start

### Mobile

* React-Native
  * https://reactnative.dev/
* Expo
  * https://expo.io/
* Expo-mail-composer
  * https://docs.expo.io/versions/latest/sdk/mail-composer/
* React-navigation
  * https://reactnavigation.org/
* AXIOS
  * https://github.com/axios/axios
* Intl
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
* React
  * https://pt-br.reactjs.org/
* expo-vector-icons
  * https://expo.github.io/vector-icons/

