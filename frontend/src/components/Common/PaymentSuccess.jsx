import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom";

const partyAnimation = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.5,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.5 },
  },
};

const whiskersAnimation = {
  hidden: { scale: 0 },
  visible: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const PaymentSuccess = () => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // After 5 seconds, navigate to homepage
    const timeout = setTimeout(() => {
      setShowConfetti(false);
      navigate("/");
    }, 10000);

    return () => {
      clearTimeout(timeout);
      clearInterval(timer);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-800 to-black relative">
      {showConfetti && <Confetti width={width} height={height} />}

      <motion.div
        className="text-4xl md:text-6xl font-bold text-white"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={partyAnimation}
      >
        Payment Successful! 🎉
      </motion.div>

      <motion.div
        className="mt-8 flex space-x-4"
        initial="hidden"
        animate="visible"
        variants={whiskersAnimation}
      >
        <motion.span className="block h-6 w-6 bg-pink-400 rounded-full"></motion.span>
        <motion.span className="block h-6 w-6 bg-yellow-400 rounded-full"></motion.span>
        <motion.span className="block h-6 w-6 bg-green-400 rounded-full"></motion.span>
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.7, type: "spring", stiffness: 100 }}
      >
        <p className="text-xl md:text-2xl text-white">
          Thank you for your payment!
        </p>
        <p className="text-lg text-gray-200">
          Your order has been processed successfully.
        </p>
      </motion.div>

      <motion.div
        className="mt-8 text-lg text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        You will be redirected to the homepage in {countdown} seconds...
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
