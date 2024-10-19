import React from "react";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import About from "./pages/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
