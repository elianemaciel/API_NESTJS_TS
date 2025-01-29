# API NestJS - Natus Desenvolvimento Humano

Este repositório contém uma API desenvolvida em **NestJS**. A API fornece endpoints seguros e escaláveis para a gestão de usuários, eventos e integração com serviços externos.

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
   git clone https://github.com/seuusuario/natus-nestjs-api.git
   cd natus-nestjs-api
   ```

### Instale as dependências:
   ```sh
   npm install
   ```

### Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto e adicione:
   ```env
   DATABASE_URL=postgresql://usuario:senha@localhost:5432/natus
   JWT_SECRET=sua_chave_secreta
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
