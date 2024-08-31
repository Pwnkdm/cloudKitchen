import { getRefreshTokenMethod, registerUserMethod, userLoginMethod, userLogoutMethod } from "../Api/Api";
import { LoginActionTypes } from "./action-types";
import { toast } from "react-hot-toast";

// User register methods 
const userRegisterLoading = () => ({
    type: LoginActionTypes.USER_REGISTER_LOADING,
  });
  
  const userRegisterSuccess = (user) => ({
    type: LoginActionTypes.USER_REGISTER_SUCCESS,
    payload: user,
  });
  
  const userRegisterError = (error) => ({
    type: LoginActionTypes.USER_REGISTER_ERROR,
    payload: { error },
  });
  
  const registerUser = (userData, navigate) => {
    return (dispatch) => {
      dispatch(userRegisterLoading());
  
      registerUserMethod(userData)
        .then((response) => {
          dispatch(userRegisterSuccess(response));
          toast.success(response.message || "User registered Successfully!");
          navigate("/login");
        })
        .catch((error) => {
          toast.error("User registration failed!");
          dispatch(userRegisterError(error.message || "Registration failed"));
        });
    };
  };
  
  // User login methods 
const userLoginLoading = () => ({
  type: LoginActionTypes.USER_LOGIN_LOADING,
});

const userLoginSuccess = (payload) => ({
  type: LoginActionTypes.USER_LOGIN_SUCCESS,
  payload
});

const userLoginError = (error) => ({
  type: LoginActionTypes.USER_LOGIN_ERROR,
  payload: { error },
});

const userLogin = (userData, navigate) => {
  return (dispatch) => {
    dispatch(userLoginLoading());

    userLoginMethod(userData)
      .then((response) => {
        dispatch(userLoginSuccess(response));
        toast.success("User loged in sucessfully!");
        navigate("/");
      })
      .catch((error) => {
        toast.error("User login failed!")
        dispatch(userLoginError(error.message || "Login failed!"));
      });
  };
};

  // User logout methods 
  const userLogoutLoading = () => ({
    type: LoginActionTypes.USER_LOGOUT_LOADING,
  });
  
  const userLogoutSuccess = (payload) => ({
    type: LoginActionTypes.USER_LOGOUT_SUCCESS,
    payload
  });
  
  const userLogoutError = (error) => ({
    type: LoginActionTypes.USER_LOGOUT_ERROR,
    payload: { error },
  });
  
  const userLogout = ({userData, navigate, accessToken}) => {
    return (dispatch) => {
      dispatch(userLogoutLoading());
  
      userLogoutMethod(accessToken)
        .then((response) => {
          dispatch(userLogoutSuccess(response));
          toast.success("User logged out successfully!");
          navigate("/");
        })
        .catch((error) => {
          toast.error("User logout failed!");
          dispatch(userLogoutError(error.message || "Logout failed!"));
        });
    };
  }; 
  
  // User logout methods 
  const getRefreshTokenLoading = () => ({
    type: LoginActionTypes.USER_REFRESHTOKEN_LOADING,
  });
  
  const getRefreshTokenSuccess = (payload) => ({
    type: LoginActionTypes.USER_REFRESHTOKEN_SUCCESS,
    payload
  });
  
  const getRefreshTokenError = (error) => ({
    type: LoginActionTypes.USER_REFRESHTOKEN_ERROR,
    payload: { error },
  });
  
  const getRefreshToken = () => {
    return (dispatch) => {
      dispatch(getRefreshTokenLoading());
  console.log("Hello!");
  
      getRefreshTokenMethod()
        .then((response) => {
          dispatch(getRefreshTokenSuccess(response));
          // toast.success("User logged out successfully!")
        })
        .catch((error) => {
          toast.error("Getting refresh token failed!");
          dispatch(getRefreshTokenError(error.message || "refresh token failed!"));
        });
    };
  }; 

  export const loginHandlers = {
    registerUser,
    userLogin,
    userLogout,
    getRefreshToken
  }