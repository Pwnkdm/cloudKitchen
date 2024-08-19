import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const registerUserMethod = (userData) => {
  // Create a new FormData instance
  const formData = new FormData();

  // Append all fields to the FormData instance
  for (const key in userData) {
    if (userData.hasOwnProperty(key)) {
      formData.append(key, userData[key]);
    }
  }

  // Make the POST request and handle the response using promises
  return axios.post(`${BASE_URL}/users/register`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  .then(response => {
    console.log('User registered successfully:', response.data);
    return response.data;
  })
  .catch(error => {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('Error:', error.response.data.message || 'Something went wrong!');
    } else if (error.request) {
      // Request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something else happened while setting up the request
      console.error('Error:', error.message);
    }
    // Re-throw the error so that it can be handled by the caller if needed
    return Promise.reject(error);
  });
};