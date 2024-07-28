// src/components/WorkProcess.js
import React, { useRef, useEffect, useState } from 'react';
import { easeIn, motion } from "framer-motion";
import useIntersection from '../Hooks/useSections';
import Setting from "../images/settings.png";
import Shield from "../images/shield.png";
import Order from "../images/order.png";
import Cooking from "../images/cooking.png";

const Benefits = () => {
  const ref = useRef(null);
  const [element, setElement] = useState(null);
  const inView = useIntersection({element, rootMargin:'0px'});

  useEffect(() => {
    setElement(ref.current);
  }, []);

  return (
    <div ref={ref} className='w-full py-12 bg-blue-100'>
      <div className='text-center mb-8'>
        <motion.p
          className='text-green-700 from-neutral-500 text-xl md:text-2xl cursive-font'
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Benefits
        </motion.p>
        <motion.p
          className='font-bold text-4xl text-green-700 md:text-4xl'
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why customers choose us
        </motion.p>
        <motion.p 
        className='text-base font-light'
        initial={{opacity:0}}
        animate={inView ? { opacity: 1, } : { opacity: 0, }}
        transition={{duration:0.8, ease: "easeOut"}}>
            Our commitment to exceptional quality and unparalleled customer service sets us apart.</motion.p>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center md:justify-between gap-8 px-4 md:px-20'>
        <motion.div
          className='bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-full md:w-80'
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={Setting} className='object-contain h-40 w-full mb-4' alt="Choose Food" />
          <motion.p
            className='font-semibold text-xl text-center'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose Your Meals
          </motion.p>
          <motion.p
            className='font-light text-lg text-center mt-2'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Craft your perfect meal for just Rs.90: Customize your lunch.
          </motion.p>
        </motion.div>

        <motion.div
          className='bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-full md:w-80'
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={Shield} className='object-contain h-40 w-full mb-4' alt="Fast Delivery" />
          <motion.p
            className='font-semibold text-xl text-center'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Faster Delivery
          </motion.p>
          <motion.p
            className='font-light text-lg text-center mt-2'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Get your meal delivered quickly and efficiently!
          </motion.p>
        </motion.div>

        <motion.div
          className='bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-full md:w-80'
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={Order} className='object-contain h-40 w-full mb-4' alt="Noodles" />
          <motion.p
            className='font-semibold text-xl text-center'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We Cook & Deliver Faster
          </motion.p>
          <motion.p
            className='font-light text-lg text-center mt-2'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Enjoy delicious meals cooked and delivered swiftly!
          </motion.p>
        </motion.div>

        <motion.div
          className='bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-full md:w-80'
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={Cooking} className='object-contain h-40 w-full mb-4' alt="Noodles" />
          <motion.p
            className='font-semibold text-xl text-center'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We Cook & Deliver Faster
          </motion.p>
          <motion.p
            className='font-light text-lg text-center mt-2'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Enjoy delicious meals cooked and delivered swiftly!
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
