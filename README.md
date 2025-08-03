
# Cursor IDE Backend

A powerful backend server for **Cursor IDE**, built with **Node.js** and **Express.js**, offering scalable APIs, real-time collaboration, and seamless integration with OpenAI’s GenAI for advanced code intelligence.

## 🚀 Features

- **RESTful API** for project, file, and user management
- **OpenAI GenAI integration** for code suggestions, explanations, and chat
- **Authentication & Security** with JWT and environment-based secrets
- **Extensible architecture** for plugins and custom code tools
- **WebSockets** (optionally via Socket.io) for real-time collaboration
- **Robust error handling** and validation

## 🏗️ Tech Stack

| Layer      | Technology           |
|------------|---------------------|
| Backend    | Node.js, Express.js |
| AI Engine  | OpenAI GenAI API    |
| Auth       | JWT, bcrypt         |
| Database   | MongoDB/Postgres (planned) |
| Real-time  | Socket.io           |
| Env Mgmt   | dotenv              |

## 📁 Folder Structure

```
/backend
  /controllers      # API endpoint logic
  /routes           # Express routers for API
  /middlewares      # Auth, error handlers, validation
  /services         # Business logic (AI, projects)
  /utils            # Utility functions/helpers
  app.js            # Entry point
  .env.example      # Environment variable template
  README.md         # Project documentation
```

## 🔐 Security

- Secrets and API keys stored in environment variables
- JWT for authentication/authorization
- Input validation on all endpoints

## ⚡ Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- OpenAI API Key

### Install & Run

```bash
git clone https://github.com/yourusername/cursor-ide-backend.git
cd cursor-ide-backend
npm install
cp .env.example .env
# Fill in your keys and secrets inside .env

npm run dev
```

Server runs on `http://localhost:5000` by default.

## 🧠 AI Integration

- Plug in your OpenAI API key for GenAI-powered code features
- Available API: `/api/ai/chat`, `/api/ai/suggest`, `/api/ai/explain` (customize as needed)

## 📃 Example API Endpoints

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| GET    | `/api/projects`      | List user projects       |
| POST   | `/api/ai/chat`       | AI chat/completion       |
| POST   | `/api/auth/login`    | User login JWT           |

## 🧱 Environment Variables

`.env.example` (copy and fill in for `.env`):

```
OPENAI_API_KEY=your_openai_api_key
PORT=5000
JWT_SECRET=your_jwt_secret_key
DB_URI=your_db_connection_string
```

## 🖇️ Integrations & Extensions

- Ready for real-time features via Socket.io
- Extendable for database support (MongoDB/Postgres)
- Modular structure for plugins

## 🤝 Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Open a pull request with details

## 📝 License

MIT License

