import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const updateAddressMethod = (payload) => {
  const userData = JSON.parse(localStorage.getItem("user")) || {};
  payload._id = userData._id;

  return axios
    .post(`${BASE_URL}/users/updateAddress`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("Address updated successfully:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(
        "Error updating address:",
        error.response ? error.response.data : error.message
      );
    });
};
