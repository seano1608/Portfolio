import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import particles from "./utils/particles";

function App() {
  const location = useLocation();
  console.log(location)

  const handleInit = async (main) => {
    await loadFull(main);
  };
  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">

      {/* particles js */}
      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/* navbar */}
      <Navbar />

      {/* main routes */}
      <div className="App_main_container">
      <Routes>
        <Route index path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
