import axios from "axios";
const user = JSON.parse(localStorage.getItem("user")) || {};
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const createOrderMethod = async (data) => {
  const {
    data: { key },
  } = await axios.get(`${BASE_URL}/getKey`);

  const {
    data: { order },
  } = await axios.post(`${BASE_URL}/payment/checkout`, data);

  const options = {
    key,
    amount: order?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Meals on Wheels",
    description: "Test Transaction",
    order_id: order?.id,
    callback_url: `${BASE_URL}/payment/verification`,
    prefill: {
      name: user?.userName,
      email: user?.email,
      contact: user?.phoneNumber,
    },
    notes: {
      address: "meals on wheels Office",
    },
    theme: {
      color: "#3f2c2c",
    },
  };

  const razor = new window.Razorpay(options);
  razor.open();
};
