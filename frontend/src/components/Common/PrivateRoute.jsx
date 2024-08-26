import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { accessToken } = useSelector(state=>state.login);

  return accessToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
