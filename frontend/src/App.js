import Hero from "./components/Hero";
import Counter from "./components/Loader/Counter";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      {/* <div className="flex justify-center mt-[20%]">
      <Loader/>
      </div> */}
      <Hero/>
      
    </div>
  );
}

export default App;
