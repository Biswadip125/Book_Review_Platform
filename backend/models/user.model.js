import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: {
    type: String,
    require: true,
    minlength: 8,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

export const User = mongoose.model("User", userSchema);
