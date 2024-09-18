import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaEdit } from "react-icons/fa"; // Import edit icon

const AddressCard = ({ address = {}, onEdit }) => {
  useEffect(() => {
    if (Object.keys(address).length === 0) {
      onEdit();
    }
  }, [address, onEdit]);

  return (
    <motion.div
      className="relative bg-gray-800 p-4 rounded-lg shadow-md text-white"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="absolute top-2 right-2 text-blue-400 hover:text-blue-500"
        onClick={onEdit}
      >
        <FaEdit />
      </button>
      <h2 className="text-xl font-semibold mb-2">Address</h2>
      <div className="space-y-2">
        <p className="font-medium">{address?.fullName || "No name provided"}</p>
        <p>{address?.street || "No street provided"}</p>
        <p>
          {address?.city || "No city"}, {address?.state || "No state"} -{" "}
          {address?.postalCode || "No postal code"}
        </p>
      </div>
    </motion.div>
  );
};

export default AddressCard;
