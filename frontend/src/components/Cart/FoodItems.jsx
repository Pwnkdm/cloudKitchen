import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { foodData } from "../Data/FoodData";
import { cartActions } from "./state/actions";
import CartPopupBar from "./CartPopupBar";

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

const FoodItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state?.cart?.items || []);

  // Function to get quantity of an item in the cart
  const getItemQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(cartActions.increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(cartActions.decreaseQuantity(id));
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black mb-20">
      <div className="p-6 max-w-4xl mx-auto mt-[50px]">
        <CartPopupBar cartItems={cartItems} />
        <h1 className="text-3xl font-bold mb-6 text-white">
          Order Your Favorite Food
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {foodData?.map((item) => (
            <motion.div
              key={item.id}
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="flex justify-between">
                  <p className="text-lg font-bold">{item.price}</p>
                  {getItemQuantity(item.id) > 0 ? (
                    <div className="flex items-center mt-2">
                      <motion.button
                        onClick={() => handleDecreaseQuantity(item.id)}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="bg-red-500 text-white px-3 py-1 rounded-lg mr-2"
                      >
                        -
                      </motion.button>
                      <motion.span
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-lg"
                      >
                        {getItemQuantity(item.id)}
                      </motion.span>
                      <motion.button
                        onClick={() => handleIncreaseQuantity(item.id)}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="bg-green-500 text-white px-3 py-1 rounded-lg ml-2"
                      >
                        +
                      </motion.button>
                    </div>
                  ) : (
                    <motion.button
                      onClick={() => handleAddToCart(item)}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                      Add to Cart
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
