import jwt from "jsonwebtoken";
import "dotenv/config";

function generateToken(userId) {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "15d" });
}

export default generateToken;
