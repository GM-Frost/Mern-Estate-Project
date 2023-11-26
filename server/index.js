import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

//IMPORTING ROUTERS
import userRouter from "./api/routes/user.route.js";
import authRouter from "./api/routes/auth.route.js";
import listingRouter from "./api/routes/listing.route.js";
import agentRouter from "./api/routes/agent.route.js";
import helmet from "helmet";
import compression from "compression";

//env config

export const port = process.env.SERVER_PORT;
export const local_client_app = process.env.LOCAL_CLIENT_APP;
export const remote_client_app = process.env.REMOTE_CLIENT_APP;
export const local_server_api = process.env.LOCAL_SERVER_API;
export const remote_server_api = process.env.REMOTE_SERVER_API;

// mongoose
//   .connect(process.env.MONGODB_SERVER_PORT)
//   .then(() => {
//     console.log("Connected to MongoDB!!!");
//   })
//   .catch((err) => {
//     console.log("Failed to connect to MongoDB", err);
//   });
mongoose.set("strictQuery", true); //useful when working with search functionality
mongoose
  .connect(process.env.MONGODB_SERVER_PORT)
  .then(() => console.log("Mongo DB Connected"))
  .catch((err) => console.log(err));

const app = express();
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? [remote_client_app, remote_server_api]
        : [local_client_app, local_server_api],
  })
);

app.use(helmet());
app.use(compression());

//ALLOW JSON TO BE ALLOWED TO COMMUNICATE WITH SERVER
app.use(express.json());

//COOKIE PARSER
app.use(cookieParser());

app.listen(port, () => {
  console.log(`Listening on ${port} & NODE Server is ${process.env.NODE_ENV}`);
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
