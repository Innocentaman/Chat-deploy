// const express = require('express')// method-1
import express from "express"; // method-2
import dotenv from "dotenv"; 
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./socket/socket.js";

dotenv.config({});

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(cookieParser());

// CORS Configuration
const corsOption = {
    origin: ['http://localhost:3000', 'https://67767c5097d6eaf9fbfb0be2--chipper-salamander-7245bf.netlify.app'], // Add allowed domains here
    credentials: true
};
app.use(cors(corsOption)); 

// routes
app.use("/api/v1/user", userRoute); 
app.use("/api/v1/message", messageRoute);

server.listen(PORT, () => {
    connectDB();
    console.log(`Server listening on port ${PORT}`);
});
