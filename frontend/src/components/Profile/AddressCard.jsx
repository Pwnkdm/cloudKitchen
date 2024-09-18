import React from "react";
import { motion } from "framer-motion";

const AddressCard = ({ address }) => {
  return (
    <motion.div
      className="bg-gray-800 p-4 rounded-lg shadow-md text-white"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-2">Address</h2>
      <div className="space-y-2">
        <p className="font-medium">{address.fullName}</p>
        <p>{address.street}</p>
        <p>
          {address.city}, {address.state} - {address.postalCode}
        </p>
      </div>
    </motion.div>
  );
};

export default AddressCard;
