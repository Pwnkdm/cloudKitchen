import React from 'react';
import { motion } from 'framer-motion';
import profilePlaceHolder from "../images/confused.gif"

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem('user')) || {};

  return (
    <div className="h-screen bg-slate-800 flex items-center justify-center">
      <motion.div
        className="flex flex-col md:flex-row items-center border border-white p-6 md:p-10 bg-gray-900 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-6 md:mb-0 md:mr-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="h-40 w-40 object-cover rounded-full border-4 border-white"
            src={userData.avtar || profilePlaceHolder}
            alt="profile"
          />
        </motion.div>
        <motion.div
          className="text-white text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-lg mb-2">
            <span className="font-semibold">Name:</span> <span className="capitalize">{userData.userName}</span>
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Email:</span> <span>{userData.email}</span>
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Phone:</span> <span>{userData.phoneNumber}</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;
