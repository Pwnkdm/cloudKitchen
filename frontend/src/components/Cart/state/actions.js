import { createOrderMethod } from "../../apis/api";
import { cartTypes } from "./action-types";
import { toast } from "react-hot-toast";


// Add to Cart Actions
const addToCartLoading = () => ({
  type: cartTypes.ADD_TO_CART_LOADING,
});

const addToCartSuccess = (item) => ({
  type: cartTypes.ADD_TO_CART_SUCCESS,
  payload: item,
});

const addToCartError = (error) => ({
  type: cartTypes.ADD_TO_CART_ERROR,
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
  type: cartTypes.REMOVE_FROM_CART_LOADING,
});

const removeFromCartSuccess = (id) => ({
  type: cartTypes.REMOVE_FROM_CART_SUCCESS,
  payload: { id },
});

const removeFromCartError = (error) => ({
  type: cartTypes.REMOVE_FROM_CART_ERROR,
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
  type: cartTypes.INCREASE_QUANTITY_LOADING,
});

const increaseQuantitySuccess = (id) => ({
  type: cartTypes.INCREASE_QUANTITY_SUCCESS,
  payload: { id },
});

const increaseQuantityError = (error) => ({
  type: cartTypes.INCREASE_QUANTITY_ERROR,
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
  type: cartTypes.DECREASE_QUANTITY_LOADING,
});

const decreaseQuantitySuccess = (id) => ({
  type: cartTypes.DECREASE_QUANTITY_SUCCESS,
  payload: { id },
});

const decreaseQuantityError = (error) => ({
  type: cartTypes.DECREASE_QUANTITY_ERROR,
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

// Create Order Actions
const createOrderLoading = () => ({
  type: cartTypes.CREATE_ORDER_LOADING,
});

const createOrderError = (error) => ({
  type: cartTypes.CREATE_ORDER_ERROR,
  payload: { error },
});

const createOrderSuccess = () => ({
  type: cartTypes.CREATE_ORDER_SUCCESS,
});

const createOrder = (amount) => {
  return (dispatch) => {
    dispatch(createOrderLoading());
    // Assuming createOrderMethod returns a Promise
    createOrderMethod(amount)
      .then(() => {
        toast.success("Order created successfully!")
        dispatch(createOrderSuccess());
      })
      .catch((error) => {
        dispatch(createOrderError(error.message || error)); // Handle error
      });
  };
};


export const cartActions = {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  createOrder,
}