import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import FloatingSocials from './components/FloatingSocials';
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Overview from "./pages/Overview";

import Photos from './pages/Photos';
import VideoGallery from './pages/Videos';

import Vision_mission from "./pages/Vision_mission";
import Registration from "./pages/Registration";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Annual from "./pages/Annual";
import Audit from "./pages/Audit";
import PdfViewer from "./pages/PdfViewer";




function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/overview" element={<Overview />} />


         <Route path="/gallery/photos" element={<Photos />} />
         <Route path="/gallery/videogallery" element={<VideoGallery />} />

        <Route path="/about/vision-mission" element={<Vision_mission />} />
        <Route path="/about/registration" element={<Registration />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/reports/annual" element={<Annual />} />
        <Route path="/reports/audit" element={<Audit />} />
        <Route path="/pdf-viewer" element={<PdfViewer />} />
        

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <FloatingSocials />
      <Footer />
    </>
  );
}

export default App;

