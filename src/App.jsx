import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import FloatingSocials from './components/FloatingSocials';
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Overview from "./pages/Overview";



function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/overview" element={<Overview />} />
        
      </Routes>

      <FloatingSocials />
      <Footer />
    </>
  );
}

export default App;

