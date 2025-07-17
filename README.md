# 📋 Task Manager

A simple and efficient web application to **track tasks**, built with the MERN (MongoDB, Express.js, React.js, Node.js) stack.

---

## 🚀 Features

- User authentication (sign up, login, JWT-based sessions)
- Add, edit, and delete tasks
- Mark tasks as completed or pending
- File uploads for task reports
- Generate and view reports
- Role-based access control (optional)
- View all tasks in a clean dashboard
- Responsive UI for desktop and mobile
- Persistent storage with MongoDB

---

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Others**: Mongoose, Axios, JWT, Multer (for uploads)

---

## 📁 Backend Folder Structure

backend/
├── config/ # Database config, environment variables
├── controller/ # Route logic (auth, user, task, report)
│ ├── authController.js
│ ├── userController.js
│ ├── taskController.js
│ └── reportController.js
├── middleware/ # Custom middleware
│ ├── authMiddleware.js
│ └── uploadMiddleware.js
├── models/ # Mongoose schemas
│ ├── User.js
│ └── Task.js
├── routes/ # Route handlers
│ ├── authRoutes.js
│ ├── userRoutes.js
│ ├── taskRoutes.js
│ └── reportRoutes.js
├── uploads/ # Uploaded files (e.g. reports)
├── server.js # Entry point
├── .env
├── package.json
└── package-lock.json


---



