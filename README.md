# API NestJS

Este repositório contém uma API desenvolvida em **NestJS**.
## 📌 Funcionalidades
- Autenticação e autorização com JWT
- Criação de pedidos
  
## 🛠 Tecnologias Utilizadas
- **NestJS** (Framework Node.js)
- **TypeScript** (Linguagem principal)
- **MongoDB** (Banco de Dados)
- **Swagger** (Documentação da API)

## 🚀 Instalação

### Clone este repositório:
   ```sh
   git clone https://github.com/elianemaciel/API_NESTJS_TS.git
   cd API_NESTJS_TS
   ```

### Instale as dependências:
   ```sh
   npm install
   ```

### Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto e adicione:
   ```env
   DATABASE_URL=postgresql://usuario:senha@localhost:5432/natus
   ```

### Inicie o servidor:
   ```sh
   npm run start:dev
   ```

## 🏆 Exemplos de Endpoints

- **Autenticação:** `POST /auth/login`
- **Listar Usuários:** `GET /users`
- **Criar Evento:** `POST /events`
- **Listar Eventos:** `GET /events`
