import React from 'react'
import { motion } from "framer-motion";

const WorkProcess = () => {
  return (
    <div className='w-full h-[600px]'>
        <div className='text-center'>
        <div
            className='text-center'
            
        >
            <motion.p 
            className='font-light text-xl'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            Our Work Process
            </motion.p>
            <motion.p 
            className='font-semibold text-2xl'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            How It Work
            </motion.p>
        </div>
        </div>
    </div>
  )
}

export default WorkProcess