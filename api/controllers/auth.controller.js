import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  //destructing
  const { username, email, password } = req.body;
  const hashedPass = bcryptjs.hashSync(password, 10);
  //sending to User model
  const newUser = new User({ username, email, password: hashedPass });
  try {
    await newUser.save();
    res.status(201).json({ message: "User Created successfully!" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
