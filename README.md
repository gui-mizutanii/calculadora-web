📌 INTRODUÇÃO

Este projeto é uma aplicação full stack desenvolvida para estudo e prática de desenvolvimento web. Ele integra um front-end em React, um back-end em Node.js com Express e um banco de dados MySQL.

O sistema permite que o usuário:

Faça cadastro e login
Utilize uma calculadora funcional
Tenha todas as operações registradas automaticamente
Visualize um histórico individual, associado ao seu usuário no banco de dados

🚀 COMO USAR

PASSO 1 — Configurar o Banco de Dados (MySQL)

Abra o MySQL Workbench
O arquivo calculadora_web_historico.sql e calculadora_web_usuarios.sql está na pasta /database

Para importar, vá em:
Server > Data Import > Import from Self-Contained File
Selecione o arquivo .sql
Clique em Start Import
Isso criará as tabelas e dados necessários.

PASSO 2 — Rodar o Backend (Node + Express)

Abra o terminal na pasta backend:
-cd backend

Instale as dependências:
-npm install

Crie o arquivo .env dentro da pasta backend com suas credenciais:
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=calculadora
PORT=3001

Inicie o servidor backend:
-npm run dev

O backend rodará em:

👉 http://localhost:3001

PASSO 3 — Rodar o Frontend (React)

Abra outro terminal e entre na pasta frontend:
-cd frontend

Instale as dependências:
-npm install

Inicie o projeto:
-npm run dev

O frontend rodará normalmente em:
👉 http://localhost:5173 (Vite)

PASSO 4 — Usar o Sistema

Acesse o frontend no navegador

Vá até a tela de registro

Siga as regras de validação:
Nome: mínimo 3 letras, sem números
Email: deve terminar com @gmail.com
Senha: deve ter pelo menos 4 caracteres

Faça login

Use a calculadora

O histórico será salvo automaticamente no MySQL
