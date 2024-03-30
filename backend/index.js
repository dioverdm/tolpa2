import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import ErrorMiddleware from "./middleware/error.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// Routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import contactRoutes from "./routes/user.routes.js"

import { app, server } from "./socket/socket.js";
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = [process.env.LOCAL_URL, process.env.HOSTED_URL];
        const isAllowedOrigin = allowedOrigins.includes(origin) || !origin;

        if (isAllowedOrigin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to BuzzHive" });
});

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", contactRoutes);
app.use(ErrorMiddleware);

server.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
    connectDB();
});
