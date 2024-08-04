import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./Utils/app.js";

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is Running at PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection Failed !!", err);
  });
