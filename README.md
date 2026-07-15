# DevDeploy 🚀

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens)

# 📖 Description

DevDeploy is a production-style full-stack project management and team collaboration application inspired by tools like **Jira** and **Trello**.

It enables users to securely authenticate, manage projects, organize tasks, assign work, collaborate with team members, and monitor project progress through a real-time dashboard.

The backend is built using **Node.js, Express.js, MongoDB Atlas, and JWT Authentication**, while the frontend is being developed using **React.js, Vite, Tailwind CSS, and Axios**.

---

# ✨ Features

## ✅ Backend

- Secure User Authentication (Register & Login)
- Password Hashing (bcrypt)
- JWT Authentication
- Protected APIs
- User Profile Management
- Project Management
- Task Management
- Team Collaboration
- Dashboard Analytics API
- Role-based Authorization
- Task Assignment Validation
- MongoDB Atlas Integration
- RESTful API Architecture

---

## ✅ Frontend

- React + Vite Setup
- Tailwind CSS
- Authentication Context (Context API)
- Login Page
- Protected Routes
- Axios API Integration
- JWT Token Management
- Dashboard Layout
- Responsive Sidebar
- Navbar
- Dashboard Statistics Cards
- Live Dashboard Analytics

---

## 🚧 Upcoming

- Projects CRUD Interface
- Tasks Management UI
- Team Management UI
- Profile Page
- Search & Filters
- Responsive Mobile UI
- Docker Support
- CI/CD Pipeline
- Cloud Deployment

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- React Context API
- React Toastify
- React Icons

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

# 📁 Project Structure

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
│   │
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── README.md
└── LICENSE
```

---

# 🔐 Authentication & Authorization

- Passwords are securely hashed using **bcrypt**.
- Authentication is implemented using **JWT**.
- React Context manages the authenticated user.
- Axios automatically attaches JWT tokens to protected API requests.
- Protected Routes prevent unauthorized access.
- Only project owners can manage team members.
- Tasks can only be assigned to project members.
- Environment variables securely store sensitive credentials.

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone git@github.com:asthabomble/DevDeploy.git
cd DevDeploy
```

---

## Backend Setup

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

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on:

```
http://localhost:5173
```

---

# 📌 Current Progress

## Backend

- ✅ Authentication Module
- ✅ User Profile Module
- ✅ Project Management
- ✅ Task Management
- ✅ Team Collaboration
- ✅ Dashboard Analytics API
- ✅ Authorization & Access Control

## Frontend

- ✅ React Setup
- ✅ Tailwind CSS
- ✅ Authentication
- ✅ Context API
- ✅ Protected Routes
- ✅ Login Integration
- ✅ Dashboard Layout
- ✅ Sidebar
- ✅ Navbar
- ✅ Dashboard Statistics
- ⏳ Projects Module
- ⏳ Tasks Module
- ⏳ Profile Module

---

# 🎯 Roadmap

- ✅ Backend Development
- ✅ Authentication
- ✅ Dashboard Integration
- 🚧 Projects Management UI
- 🚧 Tasks Management UI
- 🚧 Team Collaboration UI
- 🚧 Profile Management
- 🚧 Responsive Design
- 🚧 Dockerization
- 🚧 CI/CD
- 🚧 Cloud Deployment

---

# 👩‍💻 Author

**Astha Bomble**

GitHub: https://github.com/asthabomble

---

# 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

Feel free to fork the repository, open an issue, or submit a pull request.

---

# ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

---

# 📄 License

This project is licensed under the MIT License.