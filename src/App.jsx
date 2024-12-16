import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar"; // Assuming Navbar is the component name
import HomePage from "./pages/User/HomePage";
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
import NavbarAdmin from "@/components/Navbar/Navbar_Admin";
import PenggunaPage from "./pages/Admin/PenggunaPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/check-session",
          {
            withCredentials: true,
          }
        );
        if (response.data.Status === "Success") {
          setIsAuthenticated(true);
          setUser(response.data.User);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate("/login");
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      try {
        await axios.post(
          "http://localhost:5001/logout",
          {},
          { withCredentials: true }
        );
        setIsAuthenticated(false);
        setUser(null);
        navigate("/login");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    }
  };

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
          <Route path="/login" element={<LoginPage />} />

          {/* Admin Routes with Sidebar */}
          <Route
            path="/web/*"
            element={
              isAuthenticated ? (
                <div style={{ display: "flex" }}>
                  <Sidebar /> {/* Sidebar is rendered here */}
                  <div style={{ flex: 1 }}>
                    <NavbarAdmin user={user} handleLogout={handleLogout} />
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
              ) : (
                <div>Loading...</div> // Optionally show loading state until auth is determined
              )
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
