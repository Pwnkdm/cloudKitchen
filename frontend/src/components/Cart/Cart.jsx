// Cart.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const foodData = [
  {
    id: 1,
    name: "Burger",
    description: "Juicy beef burger with lettuce, tomato, and cheese.",
    price: "₹149",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDcH_MxdsTsK6KMVon-Ybfa2WiT-R70ZjWw&s"
  },
  {
    id: 2,
    name: "Pizza",
    description: "Cheesy pizza with a variety of toppings.",
    price: "₹199",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vyuNaOdSYfUplmINoUVTjBI5I9hHuGBr7A&s"
  },
  {
    id: 3,
    name: "Sushi",
    description: "Fresh sushi with a selection of rolls and sashimi.",
    price: "₹179",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTd1lb7IgwAbBWcld8j0WM6yYmkjHQ-gctGg&s"
  },
  {
    id: 4,
    name: "Tacos",
    description: "Spicy tacos with your choice of fillings.",
    price: "₹129",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMd2FuzynkuxpIO6vyhskSlbgX1CVKnE6YQ&s"
  },
  {
    id: 5,
    name: "Pasta",
    description: "Creamy pasta with a rich tomato sauce.",
    price: "₹159",
    image: "https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_3607,h_3607,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg"
  },
  {
    id: 6,
    name: "Salad",
    description: "Fresh garden salad with a variety of vegetables.",
    price: "₹119",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAgK7vqnuxxLjVS_wxSvX-qFiXXF2ZgTgUw&s"
  },
  {
    id: 7,
    name: "Sandwich",
    description: "Classic sandwich with ham, cheese, and vegetables.",
    price: "₹139",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRBVfB4OUXrXH7E0Bou2oX3j5bLBsmjes3Q&s"
  },
  {
    id: 8,
    name: "Soup",
    description: "Hearty soup with vegetables and meat.",
    price: "₹109",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMahNoywjXZTEG-LpFjxLR1PUsuE6CpQ4_qQ&s"
  },
  {
    id: 9,
    name: "Steak",
    description: "Grilled steak with a side of vegetables.",
    price: "₹199",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 10,
    name: "Dessert",
    description: "Sweet dessert to finish your meal.",
    price: "₹99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQGiizUXsUiX8Anxsx0v3EoZb6JArFobQEQ&s"
  }
];

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 }
};

const Cart = () => {
  const [cart, setCart] = useState({});

  const addToCart = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item.id]: (prevCart[item.id] || 0) + 1
    }));
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[id];
      return newCart;
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: prevCart[id] + 1
    }));
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      if (prevCart[id] > 1) {
        return {
          ...prevCart,
          [id]: prevCart[id] - 1
        };
      } else {
        const newCart = { ...prevCart };
        delete newCart[id];
        return newCart;
      }
    });
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [id, quantity]) => {
      const price = parseInt(foodData.find(item => item.id === parseInt(id)).price.replace('₹', ''));
      return total + price * quantity;
    }, 0);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-[50px]">
      <h1 className="text-3xl font-bold mb-6">Order Your Favorite Food</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {foodData.map((item) => (
          <motion.div
            key={item.id}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <div className='flex justify-between'>
              <p className="text-lg font-bold">{item.price}</p>
              {cart[item.id] ? (
                <div className="flex items-center mt-2">
                  <motion.button
                    onClick={() => decreaseQuantity(item.id)}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-red-500 text-white px-3 py-1 rounded-lg mr-2"
                  >
                    -
                  </motion.button>
                  <motion.span
                    key={cart[item.id]}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg"
                  >
                    {cart[item.id]}
                  </motion.span>
                  <motion.button
                    onClick={() => increaseQuantity(item.id)}
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
                  onClick={() => addToCart(item)}
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

      <div className="border border-gray-300 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
        <ul className="mb-4">
          {Object.entries(cart).map(([id, quantity]) => {
            const item = foodData.find((item) => item.id === parseInt(id));
            return (
              <li key={id} className="flex justify-between items-center mb-2">
                <span>{item.name} x {quantity}</span>
                <motion.button
                  onClick={() => removeFromCart(id)}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-red-500 text-white px-2 py-1 rounded-lg"
                >
                  Remove
                </motion.button>
              </li>
            );
          })}
        </ul>
        <p className="text-lg font-bold">Total: ₹{getTotalPrice()}</p>
      </div>
    </div>
  );
};

export default Cart;
