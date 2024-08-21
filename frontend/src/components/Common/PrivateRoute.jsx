import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const accessToken = localStorage.getItem('accessToken');

  return accessToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
