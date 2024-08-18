import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path:"./env"
})

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