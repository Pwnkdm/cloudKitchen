// src/components/Hero.js
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useIntersection from "../Hooks/useSections";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const ref = useRef(null);
  const [element, setElement] = useState(null);
  const inView = useIntersection({ element, rootMargin: "0px" });
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/menu");
  };

  useEffect(() => {
    setElement(ref.current);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const typingVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const sentence =
    "You can get the best homemade food from your neighbourhood homes. The food will be full of soul, health and taste.";

  return (
    <div
      ref={ref}
      className="h-screen w-full flex flex-col md:flex-row justify-center items-center p-4"
    >
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <motion.p
          className="text-black-600 text-4xl sm:text-6xl md:text-8xl text-start font-extrabold"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          100%
        </motion.p>

        <motion.h1
          className="text-start text-green-500 linear__text__gradient text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Homemade
        </motion.h1>
        <motion.h2
          className="text-start linear__text__gradient text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Food is
        </motion.h2>
        <motion.p
          className="text-start text-lg sm:text-2xl md:text-4xl text-gray-500"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          WAITING FOR YOU
        </motion.p>

        <div className="text-start w-full font-semibold text-base sm:text-lg md:text-xl mt-4">
          {sentence.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={typingVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={`inline-block ${char === " " ? "w-1" : ""}`}
            >
              {char}
            </motion.span>
          ))}
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center lg:mt-10 md:mt-10 sm:py-2">
            <motion.button
              className="bg-green-600 text-white py-3 px-6 rounded-lg font-bold text-base sm:text-lg md:text-xl lg:text-xl sm:px-4 md:px-10 lg:px-12"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={textVariants}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#38a169",
                transition: { duration: 0.1 },
              }}
              whileTap={{
                scale: 0.9,
                backgroundColor: "#2f855a",
                transition: { duration: 0.1 },
              }}
              onClick={handleOrderClick}
            >
              Order Now
            </motion.button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/5">
        <motion.img
          initial={{ opacity: 0, y: 200 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
          transition={{
            delay: 1.2,
            duration: 1,
            ease: "easeInOut",
          }}
          className="object-contain h-auto max-h-[90%] w-full"
          src="./images/thali.png"
          alt="thali"
        />
      </div>
    </div>
  );
};

export default Hero;
