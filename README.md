# 🧩 CRUD com Express.js e Supabase

Este projeto é um CRUD simples utilizando **Express.js** para o backend e **Supabase** como banco de dados. Ele está estruturado por controllers, routes e services.

---

## ⚙️ Estrutura do Projeto

- **controllers/**: lógica das operações
- **routes/**: definição das rotas da API
- **services/**: inicializa e configura o servidor Express

---

## 🚧 Observações Importantes

- O CRUD **ainda não está funcionando com requisições via Postman**.
- O projeto foi programado para **listar, criar, ler, atualizar e apagar informações de clientes**.
- O código foi desenvolvido de forma estruturada para facilitar futuras melhorias.

---

# 🚀 Como Rodar o Projeto CRUD com Express.js e Supabase

Este guia rápido vai te ajudar a configurar e executar o projeto localmente.

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- Conta no [Supabase](https://supabase.com/) com um projeto configurado
- Editor de código (ex: VS Code)
- Postman ou outro cliente HTTP para testar as APIs (opcional)

---

## Passo 1: Clone o repositório

Abra o terminal e rode:

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

---

## 1. Inicializar o projeto Node.js

No terminal, dentro da pasta do seu projeto, execute:

npm init -y

## 2. Instalar as dependencias

npm install express dotenv @supabase/supabase-js

## 3. Criar arquivo .env

SUPABASE_URL=https://sua-url.supabase.co
SUPABASE_KEY=sua-chave-api
