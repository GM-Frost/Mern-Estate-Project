import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
dotenv.config();

//IMPORTING ROUTERS
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import agentRouter from "./routes/agent.route.js";

//PORTS
const port = process.env.SERVER_PORT;
const mongo_port = process.env.MONGODB_SERVER_PORT;
const node_end = process.env.NODE_ENV;

mongoose
  .connect(mongo_port)
  .then(() => {
    console.log("Connected to MongoDB!!!");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

const app = express();

//ALLOW JSON TO BE ALLOWED TO COMMUNICATE WITH SERVER
app.use(express.json());

//COOKIE PARSER
app.use(cookieParser());

//dynamic dir name
const __dirname = path.resolve();

app.listen(port, () => {
  console.log(`Listening on ${port} & NODE Server is ${node_end}`);
});

// Define a test route
app.get("/test", (req, res) => {
  try {
    const testMessage = test();
    res.status(200).json({ message: testMessage });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Function returning a test message
const test = () => {
  return "Test is running";
};

// API endpoint
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);
app.use("/api/agent", agentRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

//CREATE MIDDLEWARE
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
