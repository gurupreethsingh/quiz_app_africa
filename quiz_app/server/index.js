import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { UserRouter } from "./routes/user.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"], credentials: true })),
  app.use("/auth", UserRouter);
app.use(cookieParser());

mongoose
  .connect("mongodb://127.0.0.1:27017/quiz_app")
  .then(() => {
    console.log("Connected successfully to MongoDB.");
    app.listen(process.env.PORT, () => {
      console.log(`Server has started on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
