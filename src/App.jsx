import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/User/HomePage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/User/AboutPage";
import Activities from "./pages/User/Activitiespage";
import Education from "./pages/User/EducationPage";
import Guide from "./pages/User/Guide";
import PartnersPage from "./pages/User/PartnersPage";
import LoginPage from "./pages/Admin/LoginPage";
import Dashboard from "./pages/Admin/DashboardPage";
import Kategori from "./pages/Admin/KategoriSampahPage";
import Management from "./pages/Admin/ManagementPage";
import ProdukSampah from "./pages/Admin/ProdukSampahPage";
import Transaksi from "./pages/Admin/TransaksiPage";
import UOMPage from "./pages/Admin/UOMPage";
import NavbarAdmin from "./components/navbar/Navbar_Admin";
import Sidebar from "@/components/Sidebar/Sidebar";
import PenggunaPage from "./pages/Admin/PenggunaPage";

function App() {
  return (
    <>
      {/* User Section */}
      <div className="user">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutPage />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/education" element={<Education />} />
          <Route path="/Guide" element={<Guide />} />
          <Route path="/partners" element={<PartnersPage />} />
        </Routes>
      </div>

      {/* Admin Section */}
      <div className="admin">
        <Routes>
          {/* No Sidebar for Login */}
          <Route path="/Login" element={<LoginPage />} />

          {/* Admin Routes with Sidebar */}
          <Route
            path="/web/*"
            element={
              <div style={{ display: "flex" }}>
                <Sidebar /> {/* Sidebar is rendered here */}
                <div style={{ flex: 1 }}>
                  <NavbarAdmin />
                  <Routes>
                    {/* Admin Section Routes */}
                    <Route path="" element={<Dashboard />} />
                    <Route path="kategori-sampah" element={<Kategori />} />
                    <Route path="management" element={<Management />} />
                    <Route path="pengguna" element={<PenggunaPage />} />
                    <Route path="produk-sampah" element={<ProdukSampah />} />
                    <Route path="transaksi" element={<Transaksi />} />
                    <Route path="uom" element={<UOMPage />} />
                  </Routes>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
