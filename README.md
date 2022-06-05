# netLex backend test

    - O objetivo desse teste é verificar o conhecimento do(a) candidato(a) em Algoritmos e API's REST, para isso, foram utilizadas as seguintes tecnologias:

        - Docker
        - Node
        - MySQL
        - Sequelize (ORM)

    - Portanto, antes de iniciar os testes, deve-se seguir o passo a passo abaixo.

# Instruções

__Passo a Passo para instalação__

    Passo a passo de inicialização (Caso haja algum erro nesse ponto, que não foi possível de resolver após um número razoável de tentativas, fique à vontade para procurar a netLex que auxiliaremos na resolução).

    1 - Instalar o docker, caso não esteja instalado, deve-se utilizar a documentação oficial para a instalação. Atenção, siga o tutorial de instalação baseado no sistema operacional da sua máquina, Windows, Linux, etc.

    2 - Instale o docker-compose

    3 - Entre na pasta /backend, instale as dependências com o comando: npm install

    4 - Pelo terminal, na pasta /backend, rode a aplicação com o seguinte comando, docker-compose up -d.

    5 - Rode as migrations do projeto, através do comando: 
            docker exec -it backend_netlex-test-app_1 npx sequelize db:migrate

    6 - Rode os seeders do projeto, através do comando:
            docker exec -it backend_netlex-test-app_1 npx sequelize db:seed:all

    7 - Para verificar o banco de dados da sua aplicação, basta utilizar algum gerenciador MySql, seja MySQL Community, DBeaver ou outro de sua preferência, e inserir as seguintes informações:

        - username: 'root',
        - password: '123456',
        - database: 'netlex-test',
        - dialect: 'mysql',
        - port: '3350'

    8 - Caso a instalação tenha sido feita com êxito, você será capaz de acessar sua API no http://localhost:3086, vendo a seguinte mensagem: "netLex backend test!"

    9 - Os controllers que serão usados para criação das rotas já foram criados

__Como chamar os endpoints do teste__

    1 - O teste tem como objetivo criar uma API com 3 endpoints referentes a entidade Documents.

    2 - Todos os métodos que serão criados deverão ser autenticados por um token JWT, para gerá-lo, deve-se utilizar o método de login da aplicação. A nossa sugestão é que o Postman seja usado para fazer esta e demais chamadas aos endpoints.

        - Rota: http://localhost:3086/users/login
        - Método: POST
        - Body: {
            "email": "spiderman@test.com",
            "password": "123456"
        }

        Esse token deverá ser inserido no Header Authorization, com valor Bearer {token}

__Onde deve ser feita a implementação dos métodos__

    - Os metodos devem ser implementados no arquivo document.helper.js.
    - Observação: Lá existe um método que dado uma string, ele retorna as palavras dessa string, esse método pode ser útil na resolução de um ou mais problemas.

__Como testar__

    - Para testar os métodos implementados, rode o comando npm run test dentro da pasta backend

__Forma de envio do teste para avaliação__

    - Deve-se subir os projetos em um gerenciador de versionamento de códigos de sua preferência, exemplo: github, gitlab, etc. Com isso, envie o link do projeto que baixamos o código e fazemos a análise do mesmo.


__Problemas a serem resolvidos__


1. Problema 1 - Word Frequency

    rota: documents/word-frequency
    body: {
        word: string
    }

    Você deve implementar uma função que retorna o número de ocorrências de uma palavra no documento.

+ A operação deve ser case insensitive.


2. Problema 2 - Word Sentences

    rota: documents/word-sentences
    body: {
        word: string
    }

Você deve implementar uma função que retorna as frases do texto em que uma determinada palavra aparece.

+ Sua solução deve utilizar uma iteração do texto letra a letra.
+ A operação deve ser case insensitive.
+ Considere que uma frase começa com uma letra maiúscula e termina com um dos caracteres `'.' ':' ';' '\n'`.


3. Problema 3 - Top Words

    rota: documents/word-sentences
    body: {
        count: number,
        minWordLength: number
    }

Você deve implementar uma função que retorna as `{count}` palavras mais utilizadas com no mínimo `{minWordLength}` caracteres.

+ A operação deve ser case insensitive.
+ O resultado deve ser ordenado de forma decrescente pelo número de ocorrências.
+ Em caso de empate os resultados devem permanecer na ordem em que aparecem no texto.
+ Não utilize bibliotecas para ordenação dos elementos, tais como sort, etc. Deve-se implementar a ordenação.

# Fim! sua API está pronta para o teste de frontend! =]
