//making a server.js as it is our entry point in backend
require("dotenv").config();
const express=require("express");
const cors=require("cors");
const path=require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const taskRoutes = require("./routes/taskRoutes.js");
const reportRoutes = require("./routes/reportRoutes.js");
const app = express();



//Using a middleware to handle CORS
app.use(
     cors({
          origin: process.env.CLIENT_URL || "*",
          methods: ["GET","POST","PUT","DELETE"],
          allowedHeaders: ["Content-Type","Authorization"],
     })
);

//Connect database
//using the function written in db.js file in config
connectDB();

//Middleware
app.use(express.json());

//Routes
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/tasks",taskRoutes);
app.use("/api/reports",reportRoutes);

//Start Server
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on ${PORT}`))
