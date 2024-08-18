import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { uploadOnClaodinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res)=>{

    const {userName, email, password } = req.body;
    // console.log(userName, email, password);
   if(
    [userName, email, password].some((field)=>field?.trim() === "")
    ){
        throw new ApiError (400, "All fields are required!")
    }

    const existedUser = await User.findOne({
        $or: [{ email}, {userName}]})


    if(existedUser){
        throw new ApiError (409, "User with email or username already exists!")
    }


    const avtarLocalPath = req.files?.avtar?.[0]?.path;
    console.log(req.files?.avtar?.[0]?.path);
    

    if(!avtarLocalPath){
        throw new ApiError(400,  "Avtar file is required!");
    }

    const avtar = await uploadOnClaodinary(avtarLocalPath);

    if(!avtar){
        throw new ApiError(400,  "Avtar file is required!");
    }

   const user = await User.create({
                        avtar: avtar.url,
                        userName: userName.toLowerCase(),
                        email,
                        password
                    });
    const createddUser = await User.findById(user._id).select(
        "-password -refreshToken" //exclude fields 
    )

    if(!createddUser){
        throw new ApiError(500, "Something went wrong while registering the user !")
    }

   return res.status(200).json(
    new ApiResponse(200, createddUser, "User registered successfully!")
   )
    
})

export {
    registerUser
}