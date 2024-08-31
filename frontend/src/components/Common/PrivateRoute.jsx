import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginHandlers } from '../Login/State/action';

const PrivateRoute = ({ children }) => {
  // const { accessToken } = useSelector(state=>state.login);
  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  

  // useEffect(() => {
  //   if(accessToken==="") {
  //     dispatch(loginHandlers.getRefreshToken());
  //   }
  // }, [dispatch,accessToken])
  

  return accessToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
