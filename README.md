# DevDeploy 🚀

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens)

# 📖 Description

DevDeploy is a production-style full-stack project management and team collaboration application inspired by tools like Trello and Jira. It enables users to securely authenticate, manage projects, organize tasks, assign work, collaborate with team members, and monitor project progress through dashboard analytics.

The backend is built using **Node.js, Express.js, MongoDB Atlas, and JWT Authentication**, while the frontend will be developed using **React.js**.

---

# ✨ Features

## ✅ Implemented

- Secure User Authentication (Register & Login)
- JWT Authentication & Protected Routes
- User Profile Management
- Project Management
- Task Management
- Team Collaboration
- Dashboard & Analytics API
- Project Statistics
- Role-based Authorization
- Task Assignment Validation
- Password Hashing (bcrypt)
- MongoDB Atlas Integration
- RESTful API Architecture

---

## 🚧 Upcoming

- React Frontend
- Responsive UI
- Docker Support
- CI/CD Pipeline
- Cloud Deployment

---

# 🛠️ Tech Stack

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- JSON Web Token (JWT)
- dotenv

## Tools

- Git
- GitHub
- Postman
- VS Code

---

## 📁 Project Structure

```text
DevDeploy/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── frontend/          # React (Coming Soon)
├── README.md
└── LICENSE
```
---

# 🔐 Authentication & Authorization

- Passwords are securely hashed using **bcrypt** before being stored.
- Authentication is implemented using **JSON Web Tokens (JWT)**.
- Protected routes are secured using custom **JWT Authentication Middleware**.
- Only authenticated users can access protected APIs.
- Project owners can manage team members.
- Tasks can only be assigned to project members.
- Sensitive credentials are managed using **environment variables**.

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone git@github.com:asthabomble/DevDeploy.git
cd DevDeploy
```

## Backend Setup

```bash
cd backend
npm install
```

## Create a `.env` file

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Start the development server

```bash
npm run dev
```

The backend will run on:

```
http://localhost:5000
```

---

# 📌 Current Progress

- [x] Backend Setup
- [x] MongoDB Connection
- [x] Authentication Module
- [x] User Profile Module
- [x] Project Management Module
- [x] Task Management Module
- [x] Team Collaboration Module
- [x] Authorization & Access Control
- [x] Dashboard & Analytics API
- [ ] React Frontend
- [ ] Dockerization
- [ ] CI/CD Pipeline
- [ ] Deployment

---

# 👩‍💻 Author

**Astha Bomble**

GitHub: https://github.com/asthabomble

---

# 🤝 Contributing

Contributions, suggestions, and feedback are welcome. Feel free to fork the repository, open an issue, or submit a pull request.

---

# ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

---

# 📄 License

This project is licensed under the MIT License.