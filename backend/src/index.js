import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import Razorpay from "razorpay";

dotenv.config({
    path:"./env"
});

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

connectDB().then(() => {

    app.on("error", (err) => {
        console.log("ERROR", err);
        throw err;
    });
    
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log("MONGODB connectection failed!!", err);
});