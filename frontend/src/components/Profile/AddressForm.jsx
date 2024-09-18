import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { profileMethods } from "./State/actions";
import { useDispatch } from "react-redux";

const AddressForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if all fields are filled
    const allFieldsFilled = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setIsFormValid(allFieldsFilled);
  }, [formData]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      //   console.log("Form Data Submitted:", formData);
      dispatch(profileMethods.updateAddress(formData));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg text-white">
        <h2 className="text-xl mb-6 border-b border-gray-600 pb-2 text-center">
          Address Details
        </h2>

        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          {/* Full Name */}
          <motion.div
            className="flex flex-col space-y-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label htmlFor="fullName" className="text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="bg-gray-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              required // Make this field mandatory
            />
          </motion.div>

          {/* Street Address */}
          <motion.div
            className="flex flex-col space-y-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label htmlFor="street" className="text-sm font-medium">
              Street Address
            </label>
            <textarea
              id="street"
              className="bg-gray-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none w-full"
              placeholder="Enter your street address"
              value={formData.street}
              onChange={handleInputChange}
              rows="3"
              required // Make this field mandatory
            />
          </motion.div>

          {/* City and State */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* City */}
            <motion.div
              className="flex flex-col space-y-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="city" className="text-sm font-medium">
                City
              </label>
              <input
                type="text"
                id="city"
                className="bg-gray-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleInputChange}
                required // Make this field mandatory
              />
            </motion.div>

            {/* State */}
            <motion.div
              className="flex flex-col space-y-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label htmlFor="state" className="text-sm font-medium">
                State/Province
              </label>
              <input
                type="text"
                id="state"
                className="bg-gray-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your state"
                value={formData.state}
                onChange={handleInputChange}
                required // Make this field mandatory
              />
            </motion.div>
          </div>

          {/* Postal Code */}
          <motion.div
            className="flex flex-col space-y-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <label htmlFor="postalCode" className="text-sm font-medium">
              Postal Code
            </label>
            <input
              type="text" // Change type to text
              id="postalCode"
              className="bg-gray-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your postal code"
              value={formData.postalCode}
              onChange={handleInputChange}
              required
              maxLength={6}
              pattern="[0-9]*"
              inputMode="numeric"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className={`w-full p-3 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 ${
              isFormValid
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-600 cursor-not-allowed"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!isFormValid} // Disable button if form is not valid
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default AddressForm;
