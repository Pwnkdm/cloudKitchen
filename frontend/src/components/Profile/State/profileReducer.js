// reducers/cartReducer.js
import { profileConstants } from "./action-types";

const initialState = {
  userLoading: false,
  userError: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    //adress update methods
    case profileConstants.UPDATE_ADDRESS_LOADING:
      return {
        ...state,
        userLoading: true,
        userError: false,
      };

    case profileConstants.UPDATE_ADDRESS_ERROR:
      return {
        ...state,
        userLoading: false,
        userError: true,
      };

    case profileConstants.UPDATE_ADDRESS_SUCCESS:
      console.log(action, "action");

      // Store user object as JSON string
      localStorage.setItem("user", JSON.stringify(action?.payload));
      return {
        ...state,
        userLoading: false,
        userError: false,
      };

    default:
      return state;
  }
};

export default profileReducer;
