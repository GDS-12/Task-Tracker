# 📋 Task Tracker

A simple **Task Tracker** application built as part of my journey to learn the **MERN Stack**. This project helped me understand the fundamentals of full-stack web development by implementing CRUD operations and connecting a React frontend with an Express backend and MongoDB database.

Unlike basic task trackers that store data locally, this application uses **MongoDB** for persistent storage, ensuring that tasks remain available even after refreshing the browser or restarting the application.

---

## 🚀 Features

* ➕ Add new tasks
* 📝 Edit existing tasks
* ✅ Mark tasks as completed
* 🗑️ Delete tasks
* 💾 Store tasks permanently using MongoDB
* 🔄 Full CRUD functionality
* 🌐 RESTful API integration
* 📱 Responsive user interface

---

## 🛠️ Tech Stack

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript (ES6+)

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

---

## 📂 Project Structure

```text
Task-Tracker/
├── tt-frontend/
└── tt-backend/
```

---

## 🎯 Learning Outcomes

Through this project, I learned:

* Building RESTful APIs using Express.js
* Connecting a React frontend with a Node.js backend
* Performing CRUD operations with MongoDB
* Using Mongoose for database modeling
* Managing asynchronous requests between client and server
* Structuring a basic MERN Stack application

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/GDS-12/Task-Tracker.git
```

### 2. Navigate to the project

```bash
cd Task-Tracker
```

### 3. Install dependencies

**Frontend**

```bash
cd tt-frontend
npm install
```

**Backend**

```bash
cd ../tt-backend
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the `tt-backend` directory and add your MongoDB connection string.

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 5. Start the application

**Backend**

```bash
cd tt-backend
npm start
```

**Frontend**

```bash
cd tt-frontend
npm start
```

---

## 🔮 Future Enhancements

I plan to continue improving this project by adding:

* 🔍 Search functionality
* 📅 Due dates and reminders
* 👤 User authentication (JWT)
* 🌙 Dark mode
* 📊 Task analytics dashboard
* 📱 Improved responsive design
* ☁️ Cloud deployment

---

## 📸 Preview

*Screenshots and a live demo will be added soon.*

---

## 🤝 Feedback

This project is part of my MERN Stack learning journey, and I'm continuously improving it by adding new features and following best development practices.

If you have any suggestions or feedback, feel free to open an issue or submit a pull request.

⭐ If you found this project helpful or interesting, consider giving it a star!
