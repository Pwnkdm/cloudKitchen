import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons
import profilePlaceHolder from "../images/confused.gif";
import AddressForm from "./AddressForm";
import AddressCard from "./AddressCard";

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="h-screen overflow-auto bg-slate-800 p-6 flex flex-col space-y-6">
      <motion.div
        className="bg-gray-900 border-b border-gray-700 py-6 px-4 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Profile Image */}
        <motion.div
          className="rounded-full border-4 border-white overflow-hidden w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="object-cover w-full h-full"
            src={userData.avtar || profilePlaceHolder}
            alt="profile"
          />
        </motion.div>

        {/* User Info */}
        <motion.div
          className="text-white space-y-4 text-center sm:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-center justify-center sm:justify-start space-x-4">
            <FaUser className="text-xl" />
            <span className="capitalize">
              {userData.userName || "Username"}
            </span>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-4">
            <FaEnvelope className="text-xl" />
            <span>{userData.email || "user@example.com"}</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-4">
            <FaPhone className="text-xl" />
            <span>{userData.phoneNumber || "000-000-0000"}</span>
          </div>
        </motion.div>
      </motion.div>

      <div className="flex-1 bg-gray-900 p-4 text-white rounded-lg shadow-lg">
        {userData?.address ? (
          <AddressCard address={userData?.address} />
        ) : (
          <AddressForm />
        )}
      </div>
    </div>
  );
};

export default Profile;
