import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { foodData } from "../Data/FoodData";
import { motion } from "framer-motion";
import { actions } from '../Redux/actions';

const Orders = () => {
  const cart = useSelector((state) => state.items||[]);
  const dispatch = useDispatch();

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  };

  const handleRemoveFromCart = (id) => {
    dispatch(actions.removeFromCart(id));
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [id, quantity]) => {
      const item = foodData.find(item => item.id === parseInt(id));
      if (!item) return total;

      const price = parseInt(item.price.replace('₹', ''));
      return total + price * quantity;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black pt-[64px] flex items-center justify-center">
      <div className="border border-gray-300 p-4 rounded-lg w-full max-w-4xl m-auto mt-2 md:mt-4 lg:mt-6 lg:p-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-white">Cart Summary</h2>
        <ul className="mb-4 space-y-2">
          {Object.entries(cart).map(([id, quantity]) => {
            const item = foodData.find((item) => item.id === parseInt(id));
            if (!item) return null;

            return (
              <li key={id} className="flex justify-between items-center">
                <span className="text-white md:text-base lg:text-lg sm:text-sm">{item.name} x {quantity}</span>
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
        <div className='flex justify-around'>
          <p className="text-base md:text-lg lg:text-xl font-bold text-white">Total: ₹{getTotalPrice()}</p>
         {getTotalPrice() !== 0 &&
          (<motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className='bg-green-600 text-white px-2 py-1 rounded-lg text-xs md:text-sm lg:text-base'>
            Order Now
          </motion.button>)}
        </div>
      </div>
    </div>
  );
};

export default Orders;
