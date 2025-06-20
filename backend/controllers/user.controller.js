import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    if (password < 8) {
      return res.status(400).json({
        message: "Password must be 8 characters long",
        success: false,
      });
    }

    const existedUser = await User.findOne({ username });

    if (existedUser) {
      return res.status(400).json({
        message: "User aleady exists, Please login",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = generateToken(newUser._id);

    res.cookie("token", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    const userObj = newUser.toObject();
    delete userObj.password;

    res.status(201).json({
      message: "account created successfully",
      userObj,
      success: true,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Internal server error ",
      success: false,
    });
  }
}

export async function login(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({
        message: "Incorrect Username and Password",
        success: false,
      });
    }

    const isPasswordMatch = bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect Username or Password",
        success: false,
      });
    }

    const token = generateToken(user._id);

    res.cookie("token", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      secured: true,
    });

    const userObj = user.toObject();
    delete userObj.password;

    return res.status(200).json({
      message: `Welcome back ${userObj.username}`,
      userObj,
      success: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
}

export async function logout(req, res) {
  try {
    return res.cookie("token", "").status(200).json({
      message: "Logged out Successfully",
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
}
