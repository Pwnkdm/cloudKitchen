import { instance } from "../index.js";
import crypto from "crypto";
import { Payment } from "../models/payment.model.js";
import { Order } from "../models/order.model.js";

export const paymentCheckout = async (req, res) => {
  try {
    // Extract data from req.body
    const { amount, address, userId, cartItems } = req.body;

    // Razorpay order options
    const options = {
      amount: Number(amount * 100), // amount in the smallest currency unit
      currency: "INR",
    };

    // Create order with Razorpay
    const order = await instance.orders.create(options);

    // Save order in database
    const newOrder = new Order({
      amount,
      userId,
      address,
      cartItems, // No extra fields, it's correctly defined in schema
      amount_due: order.amount_due / 100, // Convert back to regular units
      amount_paid: order.amount_paid / 100, // Convert back to regular units
      attempts: order.attempts,
      created_at: order.created_at,
      currency: order.currency,
      entity: order.entity,
      id: order.id,
      notes: order.notes,
      offer_id: order.offer_id,
      receipt: order.receipt,
      status: "Delivered", //order.status,
    });

    // Save the order in MongoDB
    await newOrder.save();

    // Send response
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({
      success: false,
      message: "Order creation failed",
    });
  }
};

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // db call here ...
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.redirect(
      // `${process.env.REACT_APP_BASE_URL}/paymentsucess?${razorpay_payment_id}`
      `${process.env.REACT_APP_BASE_URL}/`
    );
  } else {
    res.status(401).json({
      success: false,
    });
  }

  res.status(200).json({
    success: true,
  });
};
