import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//IMPORTING ROUTERS
import userRouter from "./routes/user.route.js";

mongoose
  .connect(process.env.MONGODB_SERVER_PORT)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB");
  });
const app = express();

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listening on ${process.env.SERVER_PORT}`);
});

// API endpoint
app.use("/api/user", userRouter);
