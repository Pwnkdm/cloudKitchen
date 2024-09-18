import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { foodData } from "../Data/FoodData";
import { motion } from "framer-motion";
import { cartActions } from "./state/actions";
import emptyBox from "../images/lunch-box.gif";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const cartItems = useSelector((state) => state?.cart?.items || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  const handleRemoveFromCart = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, { id, quantity }) => {
      const item = foodData.find((item) => item.id === id);
      if (!item) return total;

      const price = parseInt(item.price.replace("₹", ""));
      return total + price * quantity;
    }, 0);
  };

  const checkoutHandler = (amount) => {
    dispatch(cartActions.createOrder(amount));
  };

  const backtoServices = () => {
    navigate("/menu");
  };

  return (
    <div className="h-screen bg-gradient-to-br pt-[64px] overflow-auto from-gray-800 via-gray-900 to-black flex flex-col ">
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center m-auto">
          <img src={emptyBox} alt="Empty Cart" className="w-48 h-auto" />
          <p className="text-white text-lg mt-4">Your cart is empty!</p>
        </div>
      ) : (
        <div className="w-[90%] border border-gray-300 rounded-lg m-auto mt-2 md:mt-4 lg:mt-6 lg:p-8 bg-gray-800">
          <div
            onClick={backtoServices}
            className="text-white flex top-0 -mt-6 mb-5 cursor-pointer "
          >
            <IoMdArrowRoundBack size={22} color="#f0f0f0" />
            <p>Back</p>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-white">
            Cart Summary
          </h2>
          <ul className="mb-4 space-y-2">
            {cartItems.map(({ id, quantity }) => {
              const item = foodData.find((item) => item.id === id);
              if (!item) return null;

              return (
                <li
                  key={id}
                  className="flex justify-between items-center bg-gray-700 p-2 rounded-lg"
                >
                  <span className="text-white md:text-base lg:text-lg sm:text-sm">
                    {item.name} x {quantity}
                  </span>
                  <motion.button
                    onClick={() => handleRemoveFromCart(id)}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs md:text-sm lg:text-base"
                  >
                    Remove
                  </motion.button>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-between items-center">
            <p className="text-base md:text-lg lg:text-xl font-bold text-white">
              Total: ₹{getTotalPrice()}
            </p>
            {getTotalPrice() !== 0 && (
              <motion.button
                onClick={() => checkoutHandler(getTotalPrice())}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-xs md:text-sm lg:text-base"
              >
                Order Now
              </motion.button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
