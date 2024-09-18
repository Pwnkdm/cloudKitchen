import mongoose from "mongoose";

// Define the order schema
const orderSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    amount_due: { type: Number, required: true },
    amount_paid: { type: Number, default: 0 },
    attempts: { type: Number, default: 0 },
    created_at: { type: Number, required: true },
    currency: { type: String, required: true },
    entity: { type: String, default: "order" },
    id: { type: String, required: true },
    notes: { type: [String], default: [] },
    offer_id: { type: String, default: null },
    // receipt: { type: String, required: true },
    status: { type: String, default: "created" },
    address: {
      fullName: { type: String, required: true },
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      postalCode: { type: String, required: true },
    },
    cartItems: [
      {
        id: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: false },
      },
    ],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
