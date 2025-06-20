import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
const isAdmin = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user.isAdmin) {
      return res.status(403).json({
        message: "User is not allowed to Create books",
        success: false,
      });
    }

    req.user = user;

    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export default isAdmin;
