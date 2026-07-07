# DevDeploy 🚀

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens)

## 📖 Description

DevDeploy is a full-stack team collaboration and project management application inspired by tools like Trello and Jira. It enables teams to securely manage projects, organize tasks, and collaborate efficiently using modern web technologies.

---

## ✨ Features

### ✅ Implemented
- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- MongoDB Atlas Integration
- RESTful Authentication APIs
- Express.js Backend

### 🚧 Upcoming
- JWT Authentication Middleware
- Project Management
- Task Management
- Team Collaboration
- Task Status Updates
- User Dashboard
- React Frontend
- Docker Support
- CI/CD Pipeline
- Deployment

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- JSON Web Token (JWT)
- dotenv

### Tools
- Git & GitHub
- Postman
- VS Code

---

## 📁 Project Structure

```
DevDeploy/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── frontend/          # Coming Soon
├── docs/
├── scripts/
└── README.md
```

---

## 🔐 Authentication

- Passwords are securely hashed using **bcrypt** before being stored.
- Authentication is handled using **JSON Web Tokens (JWT)**.
- Sensitive credentials are managed using **environment variables**.

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone git@github.com:asthabomble/DevDeploy.git
cd DevDeploy
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the development server:

```bash
npm run dev
```

---

## 📌 Current Progress

- [x] Backend Setup
- [x] MongoDB Connection
- [x] User Model
- [x] Register API
- [x] Login API
- [x] Password Hashing
- [x] JWT Authentication
- [ ] Authentication Middleware
- [ ] Project APIs
- [ ] Task APIs
- [ ] React Frontend
- [ ] Dockerization
- [ ] Deployment

---
## 👩‍💻 Author

**Astha Bomble**


## 🤝 Contributing

Contributions, suggestions, and feedback are welcome. Feel free to fork the repository, open an issue, or submit a pull request.

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub. Your support and feedback are greatly appreciated!

---

## 📄 License

This project is licensed under the MIT License.