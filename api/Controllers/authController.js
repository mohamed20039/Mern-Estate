import User from "../Models/userModel.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res
      .status(201)
      .json({ Message: "User created successfully", User: newUser });
  } catch (error) {
    res.status(400);
    next(error);
  }
};
