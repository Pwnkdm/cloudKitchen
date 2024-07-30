import "./styles.css";
import Homepage from "./components/Home/Homepage";
import Navbar from "./components/Navbar";
import { motion, useScroll, useSpring } from "framer-motion";
import { Route, Router, Routes } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";

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
        {/* Add more routes here */}
      </Routes>
    </div>
  </>
  );
}

export default App;
