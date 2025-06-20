import mongoose from "mongoose";
import "dotenv/config";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Connected");
  } catch (err) {
    console.log("MongoDB Connection Error", err.message);
    throw err;
  }
}

export default connectDB;
