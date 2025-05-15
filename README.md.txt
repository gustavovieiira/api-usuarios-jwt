

# API de Usuários com Autenticação JWT (Versão 2.0)

## Descrição
Esta aplicação Node.js usa Express, MySQL, bcrypt e JWT para oferecer uma API segura com rotas protegidas.

## Instalação

1. Clone o repositório:

git clone <url-do-repo>
cd project-root


2. Instale as dependências:

npm install express mysql2 body-parser bcrypt jsonwebtoken dotenv


3. Crie um arquivo `.env` na raiz do projeto:

JWT_SECRET=chavetesteparaprojeto



4. Configure o banco de dados MySQL:
```sql
CREATE DATABASE userdb;
USE userdb;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);

5. Inicie o servidor:

node app.js


Rotas:

Método	Rota	          Protegida	     Descrição

POST	/users/register	    ✅	        Registro de novo usuário
POST	/users/login	    ✅	        Login de usuário (retorna token JWT)
GET	/users	            ✅	        Listar todos os usuários
PUT	/users/:id	    ✅	        Atualizar usuário
DELETE	/users/:id	    ✅	        Excluir usuário



Use o token JWT no header:

makefile

Authorization: Bearer <chavetesteparaprojeto>

Segurança

 Senhas criptografadas com bcrypt

 Rotas protegidas com JWT

 SQL Injection prevenido com ? em queries

