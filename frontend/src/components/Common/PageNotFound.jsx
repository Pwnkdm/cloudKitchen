import React from "react";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <motion.div
      className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-white text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest">404</h1>
        <p className="mt-4 text-lg md:text-2xl">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-8 inline-block text-lg text-gray-300 hover:text-white transition duration-300"
        >
          Go Back Home
        </a>
      </motion.div>
    </motion.div>
  );
};

export default PageNotFound;
