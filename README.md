
**# API_eotica_elens**
----
 Esta API é um desafio proposto pela Eótica/Elens para a vaga de Desenvolvedor Back-end. 

* **URL**
  
  base-url:
   http://localhost:3333

* **Method:**
  
  Tipos de Requisição:

  `GET` | `POST` 
  
*  **URL Params**

  As seguintes rotas foram implementadas:
  
  **GET** /produtos
  
  Onde são retornados todos os produtos de um .CSV em formato JSON.
  
  Exemplo de requisição:
  
  **/produtos**
  
  Exemplo de reposta:( Success )
  
  * **Code:** 200 <br />
  
   ```json
  [
  {
    "ID": "1",
    "nome": "tenis",
    "preco": "99.9"
  },
  {
    "ID": "2",
    "nome": "camiseta",
    "preco": "39.9"
  },
  {
    "ID": "3",
    "nome": "oculos",
    "preco": "290.0"
  }
]
``` 
  
  **GET** /produto/{id}
  
  Onde o produto especifico é retornado filtrado por seu ID.
  
  A rota requer id=[integer].
  
  Adicionada a condição de o ID ser inválido.
  
  Exemplo de requisição:
  
  **/produto/2**
  
  Exemplo de reposta:( Success )
  
  * **Code:** 200 <br />
  
```json
 {
    "ID": "2",
    "nome": "camiseta",
    "preco": "39.9"
 }
``` 

  Exemplo de requisição:

  **/produto/79**
  
  Exemplo de reposta:( Bad Request )
  
  * **Code:** 400 <br />
  
```json  
{
  "error": "ID Inválido"
}
```  
  
  
  **POST** /produto/add
  
  Onde é adicionado o produto.
  Adicionada a condição de o produto e/ou ID ja estar cadastrado.
  
  Exemplo de requisição:
  
  ```json
{
  "ID": "4",
  "nome": "calça",
  "preco": "189.0"
}
```
  
  Exemplo de reposta:( Created )
  
  * **Code:** 201 <br />
  
```json  
{
  "message": "Cadastrado com Sucesso"
}
```  

  Exemplo de requisição:
  
```json
 {
    "ID": "2",
    "nome": "camiseta",
    "preco": "39.9"
 }
 ```

 Exemplo de reposta:( Bad Request )
  
  * **Code:** 400 <br />
  
```json  
{
  "message": "Produto já Cadastrado"
}
```

* **Notas:**

**API desenvolvida em NodeJS e Express, mais informações sobre dependências e devDependencies consultar o package.json.**

**Foram utilizados o VSCode/Eslint/Sucrase/Nodemon e Git/GitHub**

**Utilize yarn para instalar as dependências**
**e yarn dev para rodar em modo desenvolvedor**


