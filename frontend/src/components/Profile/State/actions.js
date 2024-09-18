import toast from "react-hot-toast";
import { updateAddressMethod } from "../Api/profileApis";
import { profileConstants } from "./action-types";

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

export const profileMethods = {
  updateAddress,
};
