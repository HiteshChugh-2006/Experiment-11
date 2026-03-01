import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDB } from "./config/db.js";
import cardRoutes from "./routes/cardRoutes.js";

const app = express();

// Middleware
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("🚀 Playing Cards API is running successfully on Render!");
});

// API Routes
app.use("/api/cards", cardRoutes);

// Connect DB
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});