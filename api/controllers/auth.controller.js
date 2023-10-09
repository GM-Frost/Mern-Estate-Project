import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  //destructing
  const { username, email, password } = req.body;
  const hashedPass = bcryptjs.hashSync(password, 10);
  //sending to User model
  const newUser = new User({ username, email, password: hashedPass });
  try {
    await newUser.save();
    res.status(201).json({ message: "User Created successfully!" });
  } catch (error) {
    next(error);
  }
};
