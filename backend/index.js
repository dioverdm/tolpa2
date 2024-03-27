import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectDB from "./database/db.js";
import ErrorMiddleware from "./middleware/error.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to BuzzHive" });
});

app.use("/api/auth", authRoutes);
app.use(ErrorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
    connectDB();
});
