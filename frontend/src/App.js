import "./styles.css";
import Homepage from "./components/Home/Homepage";
import Navbar from "./components/Common/Navbar";
import { motion, useScroll, useSpring } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import CommingSoon from "./components/Common/CommingSoon";
import Cart from "./components/Cart/FoodItems";
import Orders from "./components/Cart/Orders";
import PrivateRoute from "./components/Common/PrivateRoute";
import { Toaster } from 'react-hot-toast';
import Profile from "./components/Login/Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loginHandlers } from "./components/Login/State/action";
import PaymentSuccess from "./components/Common/PaymentSuccess";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  return (
    <>
    <Toaster/>
    <Navbar />
    <motion.div className="progress-bar" style={{ scaleX }} />
    <div className="w-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<LoginForm />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/services"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
         <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<CommingSoon />} />
        <Route path="/paymentsucess" element={<PaymentSuccess />} />
        <Route path="/pricing" element={<CommingSoon />} />
        <Route path="/contact" element={<CommingSoon />} />
        {/* Add more routes here */}
      </Routes>
    </div>
  </>
  );
}

export default App;
