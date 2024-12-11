import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/User/HomePage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/User/AboutPage";
import Activities from "./pages/User/Activitespage";
import Education from "./pages/User/EducationPage";
import Guide from "./pages/User/Guide";
import PartnersPage from "./pages/User/PartnersPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutPage />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/education" element={<Education />} />
        <Route path="/Guide" element={<Guide />} />
        <Route path="/partners" element={<PartnersPage />} />
      </Routes>
    </>
  );
}

export default App;
