# DevDeploy 🚀

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens)

## 📖 About

**DevDeploy** is a full-stack **Project Management & Team Collaboration** platform inspired by **Jira** and **Trello**.

It enables users to securely authenticate, manage projects, organize tasks, update task statuses, collaborate with team members, and monitor project progress through an intuitive dashboard.

---

## ✨ Features

### 🔐 Authentication

- User Registration & Login
- JWT Authentication
- Password Hashing (bcrypt)
- Protected Routes

### 📊 Dashboard

- Live Dashboard Statistics
- Project Overview
- Task Overview

### 📁 Projects

- Create Project
- View Projects
- Edit Project
- Delete Project

### ✅ Tasks

- Create Task
- View Tasks
- Edit Task
- Delete Task
- Update Task Status
- Project-wise Task Management

### 🎨 Frontend

- React + Vite
- Responsive Dashboard
- Sidebar Navigation
- Navbar
- Toast Notifications
- Context API Authentication

---

## 🛠 Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- Context API
- React Toastify
- React Icons

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs

### Tools

- Git
- GitHub
- VS Code
- Postman

---

## 📂 Project Structure

```text
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
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── LICENSE
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone git@github.com:asthabomble/DevDeploy.git
cd DevDeploy
```

---

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

Start the backend:

```bash
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔒 Security

- JWT Authentication
- Password Hashing using bcrypt
- Protected API Routes
- Protected Frontend Routes
- Environment Variables for Sensitive Credentials

---

## 📌 Current Progress

### ✅ Completed

- Authentication System
- User Profile API
- Dashboard Analytics
- Project CRUD
- Task CRUD
- Task Status Updates
- Responsive Dashboard
- Protected Routes
- RESTful Backend APIs

### 🚧 In Progress

- Team Collaboration
- Task Assignment
- Project Members
- Search & Filters

### 📅 Planned

- User Profile Page
- Kanban Board
- Drag & Drop Tasks
- Docker Support
- CI/CD Pipeline
- Cloud Deployment


## 🎯 Future Enhancements

- Real-time Notifications
- Activity Logs
- File Attachments
- Comments on Tasks
- Email Notifications
- Dark Mode
- Calendar View

---

## 👩‍💻 Author

**Astha Bomble**

- GitHub: https://github.com/asthabomble

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

Feel free to fork this repository, open an issue, or submit a pull request.

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is licensed under the MIT License.