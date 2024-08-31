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
      // Store accessToken directly
      localStorage.setItem('accessToken', action?.payload?.accessToken);
      // Store user object as JSON string
      localStorage.setItem('user', JSON.stringify(action?.payload?.user));
      return {
        ...state,
        // user: action?.payload?.user,
        // accessToken: action?.payload?.accessToken,
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
      console.log("hello!")
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      return {
        ...state,
          user:{},
          accessToken:"",
          userLoading: false,
          userError: false,
      };


    //user resfresh token methods
    case LoginActionTypes.USER_REFRESHTOKEN_LOADING:
      return {
        ...state,
        userLoading: true,
        userError: false,
      };

    case LoginActionTypes.USER_REFRESHTOKEN_SUCCESS:
      // localStorage.setItem('accessToken', action?.payload?.accessToken);
      // localStorage.setItem('user', JSON.stringify(action?.payload?.user));
      return {
        ...state,
        userLoading: false,
        userError: false,
      };

    case LoginActionTypes.USER_REFRESHTOKEN_ERROR:
      return {
        ...state,
        userLoading: false,
        userError: true,
      };

    default:
      return state;
  }
};

export default loginReducer;
