// reducers/cartReducer.js
import { actionTypes } from './action-types';

const initialState = {
  items: {}, // Object with item IDs as keys and quantities as values
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add to Cart Actions
    case actionTypes.ADD_TO_CART_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.ADD_TO_CART_SUCCESS:
      console.log(action.payload.id,"poiu")
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: (state.items[action.payload.id] || 0) + 1,
        },
        loading: false,
        error: null,
      };
    case actionTypes.ADD_TO_CART_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // Remove from Cart Actions
    case actionTypes.REMOVE_FROM_CART_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.REMOVE_FROM_CART_SUCCESS:
      const { [action.payload.id]: _, ...rest } = state.items;
      return {
        ...state,
        items: rest,
        loading: false,
        error: null,
      };
    case actionTypes.REMOVE_FROM_CART_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // Increase Quantity Actions
    case actionTypes.INCREASE_QUANTITY_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.INCREASE_QUANTITY_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: state.items[action.payload.id] + 1,
        },
        loading: false,
        error: null,
      };
    case actionTypes.INCREASE_QUANTITY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // Decrease Quantity Actions
    case actionTypes.DECREASE_QUANTITY_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.DECREASE_QUANTITY_SUCCESS:
      if (state.items[action.payload.id] > 1) {
        return {
          ...state,
          items: {
            ...state.items,
            [action.payload.id]: state.items[action.payload.id] - 1,
          },
          loading: false,
          error: null,
        };
      } else {
        const { [action.payload.id]: _, ...rest } = state.items;
        return {
          ...state,
          items: rest,
          loading: false,
          error: null,
        };
      }
    case actionTypes.DECREASE_QUANTITY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default cartReducer;
