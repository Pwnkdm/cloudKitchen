import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { IoMdCopy } from "react-icons/io";
import Loader from "../Loader/Counter";
import { useDispatch, useSelector } from "react-redux";
import { profileMethods } from "./State/actions";
import toast from "react-hot-toast";
import moment from "moment";

const OrdersHistory = () => {
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("user")) || {};
  const { ordersLoading, ordersError, Orders } = useSelector(
    (state) => state.profile
  );

  useEffect(() => {
    dispatch(profileMethods.getOrders(userData._id));
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Order ID copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text:", err);
      });
  };

  if (ordersLoading)
    return (
      <div className="h-screen overflow-auto bg-slate-800 flex items-center justify-center">
        <Loader />
      </div>
    );
  if (ordersError)
    return (
      <div className="h-screen overflow-auto bg-slate-800 font-bold flex items-center justify-center text-red-500 ">
        Something went wrong :(
      </div>
    );

  return (
    <div className="h-screen overflow-auto bg-slate-800 p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-white">Order History</h1>
      {Orders?.length === 0 ? (
        <div className="text-center text-white">No Orders found</div>
      ) : (
        <div className="space-y-4">
          {Orders?.map((order) => (
            <motion.div
              key={order._id}
              className="bg-slate-700 text-white p-4 rounded-lg shadow-lg relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center">
                <h2 className=" font-semibold md:text-lg sm:text-sm flex items-center space-x-2">
                  <span>Order ID: {order?.id}</span>
                  <div className="relative flex items-center">
                    <IoMdCopy
                      onClick={() => copyToClipboard(order?.id)}
                      className="cursor-pointer text-white-500 hover:text-blue-300"
                      size={20}
                    />
                    <span className="absolute top-0 right-0 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">
                      Copy ID
                    </span>
                  </div>
                </h2>
              </div>

              <p className="text-white-700">Amount: ₹{order?.amount}</p>
              <p className="text-white-700">Status: {order?.status}</p>
              <p className="text-white">
                Date:{" "}
                {moment(order?.createdAt).format("MMMM Do YYYY, h:mm:ss A")}
              </p>

              <div className="mt-4">
                <h3 className="font-semibold">Address:</h3>
                <p>{order.address.fullName}</p>
                <p>{order.address.street}</p>
                <p>
                  {order.address.city}, {order.address.state} -{" "}
                  {order.address.postalCode}
                </p>
              </div>
              {order.cartItems.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-semibold">Items:</h3>
                  <ul className="list-disc list-inside">
                    {order.cartItems.map((item) => (
                      <li
                        key={item._id}
                        className="flex items-center space-x-4"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p>Price: {item.price}</p>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersHistory;
