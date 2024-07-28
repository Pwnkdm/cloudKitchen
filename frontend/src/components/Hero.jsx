import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className='min-h-screen w-full flex flex-col md:flex-row justify-center items-center p-4'>
      <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
        <motion.p
          className='text-black-600 text-4xl sm:text-6xl md:text-8xl text-start font-extrabold'
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          100%
        </motion.p>

        <motion.h1
          className="text-start text-green-500 linear__text__gradient text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Homemade
        </motion.h1>
        <motion.h2
          className="text-start linear__text__gradient text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Food is
        </motion.h2>
        <motion.p
          className="text-start text-lg sm:text-2xl md:text-4xl text-gray-500"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          WAITING FOR YOU
        </motion.p>
        <motion.p
          className="text-start w-full font-semibold text-base sm:text-lg md:text-xl"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          You can get the best homemade food from your neighbourhood homes. The food will be full of soul, health and taste.
        </motion.p>
      </div>
      <div className='w-full md:w-1/2 lg:w-2/5'>
        <motion.img
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 1,
            ease: "easeInOut"
          }} 
          className='object-contain h-auto max-h-[90%] w-full' 
          src="./images/thali.png" 
          alt="thali" 
        />
      </div>
    </div>
  );
}

export default Hero;
