import { profileConstants } from "./action-types";

const initialState = {
  addressLoading: false,
  addressError: false,

  ordersLoading: false,
  ordersError: false,
  Orders: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    //adress update methods
    case profileConstants.UPDATE_ADDRESS_LOADING:
      return {
        ...state,
        addressLoading: true,
        addressError: false,
      };

    case profileConstants.UPDATE_ADDRESS_ERROR:
      return {
        ...state,
        addressLoading: false,
        addressError: true,
      };

    case profileConstants.UPDATE_ADDRESS_SUCCESS:
      // Store user object as JSON string
      localStorage.setItem("user", JSON.stringify(action?.payload));
      return {
        ...state,
        addressLoading: false,
        addressError: false,
      };

    case profileConstants.GET_ORDERS_LOADING:
      return {
        ...state,
        ordersLoading: true,
        ordersError: false,
      };

    case profileConstants.GET_ORDERS_ERROR:
      return {
        ...state,
        ordersLoading: false,
        ordersError: true,
      };

    case profileConstants.GET_ORDERS_SUCCESS:
      return {
        ...state,
        ordersLoading: false,
        ordersError: false,
        Orders: action.payload || [],
      };

    default:
      return state;
  }
};

export default profileReducer;
