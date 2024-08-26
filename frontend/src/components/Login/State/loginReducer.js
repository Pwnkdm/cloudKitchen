// reducers/cartReducer.js
import { LoginActionTypes } from "./action-types";

const initialState = {
  user: {},
  accessToken:"",

  userLoading: false,
  userError: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    //user register methods
    case LoginActionTypes.USER_REGISTER_LOADING:
      return {
        ...state,
        userLoading: true,
        userError: false,
      };

    case LoginActionTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        userError: false,
      };

    case LoginActionTypes.USER_REGISTER_ERROR:
      return {
        ...state,
        userLoading: false,
        userError: true,
      };

    //user login methods
    case LoginActionTypes.USER_LOGIN_LOADING:
      return {
        ...state,
        userLoading: true,
        userError: false,
      };

    case LoginActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action?.payload?.user,
        accessToken: action?.payload?.accessToken,
        userLoading: false,
        userError: false,
      };

    case LoginActionTypes.USER_LOGIN_ERROR:
      return {
        ...state,
        userLoading: false,
        userError: true,
      };
    
    case LoginActionTypes.USER_LOGOUT_SUCCESS:
      localStorage.removeItem("logedIn");
      return {
        ...state,
          user:{},
          accessToken:"",
          userLoading: false,
          userError: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
