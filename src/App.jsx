import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import FloatingSocials from './components/FloatingSocials';
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Photos from './pages/Photos';
import Videos from './pages/Videos';


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/overview" element={<Overview />} />

         <Route path="/gallery/photos" element={<Photos />} />
         <Route path="/gallery/videos" element={<Videos />} />
        
      </Routes>

      <FloatingSocials />
      <Footer />
    </>
  );
}

export default App;

