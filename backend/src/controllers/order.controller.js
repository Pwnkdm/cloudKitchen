import mongoose from "mongoose";
import { Order } from "../models/order.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getOrdersByUserId = asyncHandler(async (req, res) => {
  try {
    // Extract userId from query parameters
    const { userId } = req.query;

    // Log userId to ensure it's being received
    console.log("Fetching orders for userId:", userId);

    // Validate userId format
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "Invalid userId format"));
    }

    // Convert userId to ObjectId and fetch orders
    const orders = await Order.find({
      userId: new mongoose.Types.ObjectId(userId),
    });

    if (!orders.length) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "No orders found for this user"));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, orders, "Orders fetched successfully!"));
  } catch (error) {
    console.error("Error fetching orders by userId:", error);
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Failed to fetch orders"));
  }
});
