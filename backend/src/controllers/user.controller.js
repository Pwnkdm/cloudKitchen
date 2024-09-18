import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { uploadOnClaodinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const refreshToken = user.generateRefreshToken();
    const accessToken = user.generateAccessToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access & refresh tokens"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password, phoneNumber } = req.body;
  // console.log(userName, email, password);
  if (
    [userName, email, password, phoneNumber].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required!");
  }

  const existedUser = await User.findOne({
    $or: [{ email }, { userName }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists!");
  }

  const avtarLocalPath = req.files?.avtar?.[0]?.path;
  console.log(req.files, "pppppppppppppppppppppppp");

  if (!avtarLocalPath) {
    throw new ApiError(400, "Avtar file is required!");
  }

  const avtar = await uploadOnClaodinary(avtarLocalPath);

  if (!avtar) {
    throw new ApiError(400, "Avtar file is required!");
  }

  const user = await User.create({
    avtar: avtar.url,
    userName: userName.toLowerCase(),
    email,
    password,
    phoneNumber,
  });
  const createddUser = await User.findById(user._id).select(
    "-password -refreshToken" //exclude fields
  );

  if (!createddUser) {
    throw new ApiError(
      500,
      "Something went wrong while registering the user !"
    );
  }

  return res
    .status(200)
    .json(new ApiResponse(200, createddUser, "User registered successfully!"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;

  if (!email && !userName && password) {
    throw new ApiError(400, "UserName or Email is required!");
  }

  const user = await User.findOne({
    $or: [{ email }, { userName }],
  });

  if (!user) {
    throw new ApiError(404, "User does not exists!");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials!");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  const logedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  // send cookies
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: logedInUser,
          accessToken,
          refreshToken,
        },
        "User logged in successfully!"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User loged out successfully!"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incommingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incommingRefreshToken) {
    throw new ApiError(401, "Unathorized request!");
  }

  try {
    const decodedToken = jwt.verify(
      incommingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh token!");
    }

    if (incommingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh token is expired or used!");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newrefreshToken } =
      await generateAccessAndRefreshTokens(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newrefreshToken, options)
      .json(
        new ApiResponse(
          200,
          {
            accessToken,
            refreshToken: newrefreshToken,
          },
          "Access Token refreshed successfully!"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid resfresh token!");
  }
});

const updateAddress = asyncHandler(async (req, res) => {
  // Extract _id from the request body
  const { _id, ...addressData } = req.body;

  // Perform the update operation, excluding _id from addressData
  const user = await User.findByIdAndUpdate(
    _id,
    {
      $set: {
        address: addressData,
      },
    },
    { new: true }
  );

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Address updated successfully!"));
});

export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  updateAddress,
};
