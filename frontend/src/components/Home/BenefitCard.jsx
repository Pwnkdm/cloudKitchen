// src/components/BenefitCard.js
import React from 'react';
import { motion } from 'framer-motion';

const BenefitCard = ({ image, title, description, inView }) => (
  <motion.div
    className='bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-full md:w-80 min-h-[250px] flex-grow'
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <img src={image} className='object-contain h-10 w-10 mb-4' alt={title} />
    <motion.p
      className='font-semibold text-xl text-center'
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {title}
    </motion.p>
    <motion.p
      className='font-light text-lg text-center mt-2'
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      {description}
    </motion.p>
  </motion.div>
);

export default BenefitCard;
