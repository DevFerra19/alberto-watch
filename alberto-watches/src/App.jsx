//import { useState } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/navigation/Navbar";
import Home from "./Components/home/Home";
import Contact from "./Components/contact/Contact";
import About from "./Components/about/About";
import Products from "./Pages/products/Products";

const App = () => {
  return (
    <div>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/category/product" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
