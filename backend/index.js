import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import ErrorMiddleware from "./middleware/error.js";
import cookieParser from "cookie-parser";

// Routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to BuzzHive" });
});

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use(ErrorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
    connectDB();
});
