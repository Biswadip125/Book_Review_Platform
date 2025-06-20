import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/dbConfig.js";
import authRouter from "./routes/auth.route.js";
import bookRouter from "./routes/book.route.js";
import reviewRouter from "./routes/review.route.js";

const app = express();

connectDB();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

//routes
app.use("/user", authRouter);
app.use("/books", bookRouter);
app.use("/reviews", reviewRouter);

app.listen(process.env.PORT, () => {
  console.log("server is running on PORT 3000");
});
