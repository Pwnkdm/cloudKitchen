// src/components/Benefits.js
import React, { useRef, useEffect, useState } from 'react';
import useIntersection from '../Hooks/useSections';
import BenefitCard from './BenefitCard';
import Setting from "../images/settings.png";
import Shield from "../images/shield.png";
import Order from "../images/order.png";
import Cooking from "../images/cooking.png";
import { motion } from "framer-motion";

const Benefits = () => {
  const ref = useRef(null);
  const [element, setElement] = useState(null);
  const inView = useIntersection({ element, rootMargin: '0px' });

  useEffect(() => {
    setElement(ref.current);
  }, []);

  const benefitsData = [
    {
      image: Setting,
      title: "Customised Lunch",
      description: "We offer customized lunch boxes tailored to your preferences, ensuring your meals are both delicious and convenient."
    },
    {
      image: Shield,
      title: "Hygienically Packed",
      description: "Hygienically packed lunches are essential for maintaining food safety and preventing contamination."
    },
    {
      image: Order,
      title: "Mindful Menu",
      description: "The lunch menu was crafted to promote health and wellness, offering a variety of nourishing dishes to inspire mindful eating habits."
    },
    {
      image: Cooking,
      title: "Healthy Cooking",
      description: "Healthy cooking techniques were employed to create a vibrant and nutritious menu, ensuring that every dish is not only delicious but also promotes overall well-being."
    }
  ];

  return (
    <div ref={ref} className='w-full py-12 bg-blue-100'>
      <div className='text-center mb-8'>
        <motion.p
          className='text-green-700 text-xl md:text-2xl font-cursive'
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Benefits
        </motion.p>
        <motion.p
          className='font-bold text-4xl text-green-700'
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why customers choose us
        </motion.p>
        <motion.p 
          className='text-base font-light mt-2'
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our commitment to exceptional quality and unparalleled customer service sets us apart.
        </motion.p>
      </div>

      <div className='flex flex-col  lg:flex-row md:flex-row gap-8 px-4 md:px-20 justify-center'>
        {benefitsData.map((benefit, index) => (
          <BenefitCard
            key={index}
            image={benefit.image}
            title={benefit.title}
            description={benefit.description}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
