import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { foodData } from "../Data/FoodData";

const CartPopupBar = ({ cartItems }) => {
  const navigate = useNavigate();

  // Calculate total items and total price
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const getTotalPrice = () => {
    return cartItems.reduce((total, { id, quantity }) => {
      const item = foodData.find((item) => item.id === id);
      if (!item) return total;

      const price = parseInt(item.price.replace("₹", ""));
      return total + price * quantity;
    }, 0);
  };

  // Only show the popup if there are items in the cart
  if (totalItems === 0) return null;

  return (
    <motion.div
      className="fixed bottom-0 left-0 w-full lg:w-full xl:w-full mx-auto bg-gray-800 text-white p-4 lg:p-6 flex flex-col lg:flex-row justify-between items-center shadow-lg"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="text-center lg:text-left mb-2 lg:mb-0">
        <h4 className="text-lg lg:text-xl font-semibold">
          {totalItems} Items Added
        </h4>
        <p className="text-sm lg:text-base">
          Total: ₹{getTotalPrice().toFixed(2)}
        </p>
      </div>
      <button
        className="bg-green-500 px-6 py-2 lg:px-8 lg:py-3 rounded-lg text-white text-sm lg:text-base hover:bg-green-600 transition w-full lg:w-auto"
        onClick={() => navigate("/cart")}
      >
        Go to Cart
      </button>
    </motion.div>
  );
};

export default CartPopupBar;
