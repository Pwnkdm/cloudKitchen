import "./styles.css";
import Homepage from "./components/Home/Homepage";
import Navbar from "./components/Navbar";
import { motion, useScroll, useSpring } from "framer-motion";
import { Route, Router, Routes } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import CommingSoon from "./components/Common/CommingSoon";
import Cart from "./components/Cart/Cart";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
    <Navbar />
    <motion.div className="progress-bar" style={{ scaleX }} />
    <div className="w-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/about" element={<CommingSoon />} />
        <Route path="/services" element={<Cart />} />
        <Route path="/pricing" element={<CommingSoon />} />
        <Route path="/contact" element={<CommingSoon />} />
        <Route path="/cart" element={<Cart />} />
        {/* Add more routes here */}
      </Routes>
    </div>
  </>
  );
}

export default App;
