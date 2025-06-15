import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// todo routes here
import userRoutes from "./routes/user.routes.js";
import bookRoutes from "./routes/book.routes.js";
import reviewRoutes from "./routes/review.routes.js";
import orderRoutes from "./routes/order.routes.js";
import ConnectDb from "./config/db.js";

app.use("/api/v1/", userRoutes);
app.use("/api/v1/", bookRoutes);
app.use("/api/v1/", reviewRoutes);
app.use("/api/v1/", orderRoutes);

app.get("/", (req, res) => {
  res.send("server is running ✅ ...");
});

app.listen(port, () => {
  ConnectDb();
  console.log(`server is running on http://localhost:${port}`);
});
