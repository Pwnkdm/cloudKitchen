// actions/cartActions.js
import { actionTypes } from './action-types';

// Add to Cart Actions
const addToCartLoading = () => ({
  type: actionTypes.ADD_TO_CART_LOADING,
});

const addToCartSuccess = (item) => ({
  type: actionTypes.ADD_TO_CART_SUCCESS,
  payload: item,
});

const addToCartError = (error) => ({
  type: actionTypes.ADD_TO_CART_ERROR,
  payload: { error },
});

const addToCart = (item) => {
  return (dispatch) => {
    dispatch(addToCartLoading());
    try {
      // Assume an async operation to add the item to the cart
      dispatch(addToCartSuccess(item));
    } catch (error) {
      dispatch(addToCartError(error));
    }
  };
};

// Remove from Cart Actions
const removeFromCartLoading = () => ({
  type: actionTypes.REMOVE_FROM_CART_LOADING,
});

const removeFromCartSuccess = (id) => ({
  type: actionTypes.REMOVE_FROM_CART_SUCCESS,
  payload: { id },
});

const removeFromCartError = (error) => ({
  type: actionTypes.REMOVE_FROM_CART_ERROR,
  payload: { error },
});

const removeFromCart = (id) => {
  return (dispatch) => {
    dispatch(removeFromCartLoading());
    try {
      // Assume an async operation to remove the item from the cart
      dispatch(removeFromCartSuccess(id));
    } catch (error) {
      dispatch(removeFromCartError(error));
    }
  };
};

// Increase Quantity Actions
const increaseQuantityLoading = () => ({
  type: actionTypes.INCREASE_QUANTITY_LOADING,
});

const increaseQuantitySuccess = (id) => ({
  type: actionTypes.INCREASE_QUANTITY_SUCCESS,
  payload: { id },
});

const increaseQuantityError = (error) => ({
  type: actionTypes.INCREASE_QUANTITY_ERROR,
  payload: { error },
});

const increaseQuantity = (id) => {
  return (dispatch) => {
    dispatch(increaseQuantityLoading());
    try {
      // Assume an async operation to increase the quantity of the item
      dispatch(increaseQuantitySuccess(id));
    } catch (error) {
      dispatch(increaseQuantityError(error));
    }
  };
};

// Decrease Quantity Actions
const decreaseQuantityLoading = () => ({
  type: actionTypes.DECREASE_QUANTITY_LOADING,
});

const decreaseQuantitySuccess = (id) => ({
  type: actionTypes.DECREASE_QUANTITY_SUCCESS,
  payload: { id },
});

const decreaseQuantityError = (error) => ({
  type: actionTypes.DECREASE_QUANTITY_ERROR,
  payload: { error },
});

const decreaseQuantity = (id) => {
  return (dispatch) => {
    dispatch(decreaseQuantityLoading());
    try {
      // Assume an async operation to decrease the quantity of the item
      dispatch(decreaseQuantitySuccess(id));
    } catch (error) {
      dispatch(decreaseQuantityError(error));
    }
  };
};

export const actions = {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}