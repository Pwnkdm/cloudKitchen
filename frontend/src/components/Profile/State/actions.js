import toast from "react-hot-toast";
import { getOrdersMethod, updateAddressMethod } from "../Api/profileApis";
import { profileConstants } from "./action-types";

// update address method
const updateAddressLoading = () => ({
  type: profileConstants.UPDATE_ADDRESS_LOADING,
});

const updateAddressError = () => ({
  type: profileConstants.UPDATE_ADDRESS_ERROR,
});

const updateAddressSuccess = (payload) => ({
  type: profileConstants.UPDATE_ADDRESS_SUCCESS,
  payload,
});

const updateAddress = (data) => {
  return (dispatch) => {
    dispatch(updateAddressLoading());

    updateAddressMethod(data)
      .then((response) => {
        dispatch(updateAddressSuccess(response?.data));
        toast.success("Address updated successfully!");
      })
      .catch((error) => {
        toast.error("Error while updating address plaese try again !");
        dispatch(updateAddressError(error));
      });
  };
};

// get orders methods
const getOrdersLoading = () => ({
  type: profileConstants.GET_ORDERS_LOADING,
});

const getOrdersError = () => ({
  type: profileConstants.GET_ORDERS_ERROR,
});

const getordersSuccess = (payload) => ({
  type: profileConstants.GET_ORDERS_SUCCESS,
  payload,
});

const getOrders = (data) => {
  return (dispatch) => {
    dispatch(getOrdersLoading());

    getOrdersMethod(data)
      .then((response) => {
        dispatch(getordersSuccess(response?.data));
      })
      .catch((error) => {
        toast.error("Error while getting data!");
        dispatch(getOrdersError(error));
      });
  };
};

export const profileMethods = {
  updateAddress,
  getOrders,
};
