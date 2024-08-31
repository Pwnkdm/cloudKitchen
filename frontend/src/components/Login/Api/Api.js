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

// export const userLoginMethod = (payload) => {
//   // Destructure the payload and omiting unwanted properties
//   const { avtar, userName, phoneNumber, ...loginPayload } = payload;

//   return axios.post(`${BASE_URL}/users/login`, loginPayload)
//     .then(response => {
//       // Extract tokens and other relevant data
//       const { accessToken, refreshToken, user } = response.data.data;

//       // Store tokens securely
//       localStorage.setItem('accessToken', accessToken);
//       localStorage.setItem('refreshToken', refreshToken);

//       // Return the user data or relevant response data
//       return user;
//     })
//     .catch(error => {
//       if (error.response) {
//         // Server responded with a status other than 2xx
//         const message = error.response.data?.message || 'Something went wrong while logging in!';
//         console.error('Error:', message);
//       } else if (error.request) {
//         // Request was made but no response was received
//         console.error('No response received:', error.request);
//       } else {
//         // Something else happened while setting up the request
//         console.error('Error:', error.message);
//       }
//       // Re-throw the error so that it can be handled by the caller if needed
//       return Promise.reject(error);
//     });
// };

export const userLoginMethod = (payload) => {
  const { avtar, userName, phoneNumber, ...loginPayload } = payload;
  return axios.post(`${BASE_URL}/users/login`, loginPayload, { withCredentials: true })
    .then(response => {
      const { user, accessToken } = response.data.data;
      return {user, accessToken};
    })
    .catch(error => {
      if (error.response) {
        const message = error.response.data?.message || 'Something went wrong while logging in!';
        console.error('Error:', message);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error:', error.message);
      }
      return Promise.reject(error);
    });
};


export const userLogoutMethod = (accessToken) => {

  return axios.post(`${BASE_URL}/users/logout`, {}, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${accessToken}`, // Add accessToken to the Authorization header if needed
    }
  })
    .then(response => {
      // Clear tokens from localStorage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      // Optionally return the response data
      return response.data;
    })
    .catch(error => {
      if (error.response) {
        // Server responded with a status other than 2xx
        const message = error.response.data?.message || 'Something went wrong while logging out!';
        console.error('Error:', message);
      } else if (error.request) {
        // Request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something else happened while setting up the request
        console.error('Error:', error.message);
      }

      // Re-throw the error or return a default error object
      return Promise.reject(error);
    });
};

export const getRefreshTokenMethod = () => {
  const accessToken = localStorage.getItem('accessToken');

  return axios.post(`${BASE_URL}/users/refreshToken`, {}, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      if (error.response) {
        // Server responded with a status other than 2xx
        const message = error.response.data?.message || 'Something went wrong while getting token!';
        console.error('Error:', message);
      } else if (error.request) {
        // Request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something else happened while setting up the request
        console.error('Error:', error.message);
      }

      // Re-throw the error or return a default error object
      return Promise.reject(error);
    });
};


