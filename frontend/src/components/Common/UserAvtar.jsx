import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import profilePlaceholder from "../images/confused.gif";
import { loginHandlers } from '../Login/State/action';

const UserAvtar = () => {
  const { user } = useSelector(state => state.login);
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const avatarUrl = user?.avtar || profilePlaceholder;

  const handleLogout = () => {
    dispatch(loginHandlers.userLogout(user));
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <div style={{ position: 'relative' }}>
      <motion.div
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          overflow: "hidden",
          cursor: "pointer",
        }}
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
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </motion.div>

      {isDropdownOpen && (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
            position: 'absolute',
            right: 0,
            marginTop: '10px',
            backgroundColor: 'white',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
            borderRadius: '12px',
            overflow: 'hidden',
            zIndex: 10,
            width: '200px', // Set a fixed width for better alignment
            }}
        >
            <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '15px',
            borderBottom: '1px solid #e0e0e0',
            backgroundColor: '#f7f7f7', // Light background for the profile section
            }}>
            <img 
                src={avatarUrl} 
                alt="profile" 
                style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                marginRight: '10px',
                }}
            />
            <p style={{
                margin: 0,
                fontWeight: '600',
                color: '#333',
                textTransform: "capitalize"
            }}>{user?.userName}</p>
            </div>
            <div
            onClick={handleLogout}
            style={{
                padding: '12px 20px',
                cursor: 'pointer',
                color: '#d9534f',
                fontWeight: '500',
                textAlign: 'center',
                transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8d7da'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
            Logout
            </div>
        </motion.div>
        )}

    </div>
  );
};

export default UserAvtar;
