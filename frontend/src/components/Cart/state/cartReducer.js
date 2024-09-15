// reducers/cartReducer.js

import { cartTypes } from "./action-types";

const initialState = {
  items: [], // Array of objects with item data and quantity
  loading: false,
  error: null,

  registerUserLoading: false,
  registerUserError: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add to Cart Actions
    case cartTypes.ADD_TO_CART_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case cartTypes.ADD_TO_CART_SUCCESS:
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        // Item exists, update the quantity
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          loading: false,
          error: null,
        };
      } else {
        // New item, add it to the cart
        return {
          ...state,
          items: [
            ...state.items,
            { ...action.payload, quantity: 1 },
          ],
          loading: false,
          error: null,
        };
      }
    case cartTypes.ADD_TO_CART_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // Remove from Cart Actions
    case cartTypes.REMOVE_FROM_CART_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case cartTypes.REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
        loading: false,
        error: null,
      };
    case cartTypes.REMOVE_FROM_CART_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // Increase Quantity Actions
    case cartTypes.INCREASE_QUANTITY_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case cartTypes.INCREASE_QUANTITY_SUCCESS:
      const increasedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        items: increasedItems,
        loading: false,
        error: null,
      };
    case cartTypes.INCREASE_QUANTITY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // Decrease Quantity Actions
    case cartTypes.DECREASE_QUANTITY_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case cartTypes.DECREASE_QUANTITY_SUCCESS:
      const decreasedItems = state.items
        .map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 }
            : item
        )
        .filter(item => item.quantity > 0); // Remove items with quantity 0
      return {
        ...state,
        items: decreasedItems,
        loading: false,
        error: null,
      };
    case cartTypes.DECREASE_QUANTITY_ERROR:
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
