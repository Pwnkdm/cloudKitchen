import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    // origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes import
import userRouter from "./routes/user.routes.js";
import paymentRouter from "./routes/payment.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/payment", paymentRouter);
app.get("/api/v1/getKey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

export { app };
