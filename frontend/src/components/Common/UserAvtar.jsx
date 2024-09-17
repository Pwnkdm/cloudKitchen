import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import profilePlaceholder from "../images/confused.gif";
import { loginHandlers } from "../Login/State/action";
import { useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt } from "react-icons/fa";

const UserAvtar = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const accessToken = localStorage.getItem("accessToken");
  console.log(user, "userDta");

  // const { user, accessToken } = useSelector(state=>state.login) || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const avatarUrl = user?.avtar || profilePlaceholder;

  const handleLogout = () => {
    dispatch(loginHandlers.userLogout({ user, navigate, accessToken }));
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Handle clicks outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="w-9 h-9 rounded-full overflow-hidden cursor-pointer border-2 border-white"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={toggleDropdown}
      >
        <img
          src={avatarUrl}
          alt="profile"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {isDropdownOpen && (
        <motion.div
          ref={dropdownRef} // Attach ref to the dropdown
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden z-10 w-40 md:w-48"
        >
          <div className="flex flex-col gap-2">
            <motion.div
              className="flex items-center justify-between px-4 py-2 cursor-pointer font-medium text-black rounded-lg bg-gray-100 transition-transform duration-300 hover:bg-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/profile")}
            >
              <FaUser className="mr-2" /> {/* Tailwind spacing */}
              <span className="text-sm md:text-base">My Profile</span>
            </motion.div>

            <motion.div
              className="flex items-center justify-between px-4 py-2 cursor-pointer font-medium text-black rounded-lg bg-gray-100 transition-transform duration-300 hover:bg-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
            >
              <FaSignOutAlt className="mr-2" /> {/* Tailwind spacing */}
              <span className="text-sm md:text-base">Sign out</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default UserAvtar;
