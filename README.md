# 🧩 CRUD com Express.js e Supabase

Este projeto é um CRUD simples utilizando **Express.js** para o backend e **Supabase** como banco de dados.

---

## 🚀 Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Supabase](https://supabase.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [CORS](https://www.npmjs.com/package/cors)
  
---

## 📂 Estrutura do Projeto
```
📦 projeto
 ┣ 📜 client.js     # Código da API
 ┣ 📜 .env          # Variáveis de ambiente (URL e KEY do Supabase)
 ┣ 📜 package.json
 ┗ 📜 README.md
```

## ⚙️ Configuração do Ambiente

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2️⃣ Instalar dependências
```bash
npm install express cors dotenv @supabase/supabase-js
```

### 3️⃣ Configurar variáveis de ambiente  
Crie um arquivo `.env` na raiz do projeto:
```env
SUPABASE_URL=https://sua-url-do-supabase.supabase.co
SUPABASE_KEY=sua-chave-do-supabase
PORT=3000
```

---

## ▶️ Executando o Projeto
```bash
node client.js
```
A API estará disponível em:
```
http://localhost:3000
```

---

## 📌 Endpoints da API

### 🔹 Criar Cliente
**POST** `/clientes`
```json
{
  "nome": "João Silva",
  "email": "joao@email.com"
}
```
**Respostas:**
- `201` → Cliente criado com sucesso
- `400` → Campos obrigatórios ausentes

---

### 🔹 Listar Clientes
**GET** `/clientes`

**Respostas:**
- `200` → Lista de clientes
- `400` → Erro na consulta

---

### 🔹 Atualizar Cliente
**PUT** `/clientes/:id`
```json
{
  "nome": "Maria Souza",
  "email": "maria@email.com"
}
```
**Respostas:**
- `200` → Cliente atualizado
- `404` → Cliente não encontrado
- `400` → Nenhum campo informado

---

### 🔹 Deletar Cliente
**DELETE** `/clientes/:id`

**Respostas:**
- `204` → Cliente deletado com sucesso
- `400` → Erro na exclusão

---

## 🛠 Observações
- Certifique-se de que a tabela **clientes** exista no seu banco Supabase com os campos:
  - `id` (Primary Key, Auto Increment)
  - `nome` (Texto)
  - `email` (Texto)
- Caso a tabela não exista, crie-a pelo painel do Supabase ou via SQL:
```sql
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL
);
```

SUPABASE_URL=https://sua-url.supabase.co
SUPABASE_KEY=sua-chave-api
