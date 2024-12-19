import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Sidebar from "@/components/Sidebar/Sidebar";
import NavbarAdmin from "@/components/Navbar/Navbar_Admin";
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
import PetaPage from "./pages/Admin/Peta";
import Transaksi from "./pages/Admin/TransaksiPage";
import UOMPage from "./pages/Admin/UOMPage";
import PenggunaPage from "./pages/Admin/PenggunaPage";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import KegiatanPage from "./pages/Admin/KegiatanPage";
import ActivityDetail from "./pages/User/ActivityDetail";
import ArtikelPage from "./pages/Admin/ArtikelPage";
import ArtikelDetail from "./pages/User/ArtikelDetail";
import JenisSampahPage from "./pages/Admin/JenisSampahPage";
import ManfaatPage from "./pages/Admin/ManfaatPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Initialize as `null` for pending state
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Fetch user session on mount
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

          // Redirect to the dashboard if on login page or root
          if (location.pathname === "/" || location.pathname === "/") {
            navigate("/web");
          }
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setIsAuthenticated(false);
      }
    };

    fetchUserData();
  }, [navigate, location.pathname]);

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
        navigate("/");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    }
  };

  if (isAuthenticated === null) {
    // Show a loading indicator while authentication status is being determined
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {/* User Section */}
      <Route path="/" element={<HomePage />} />
      <Route path="/AboutUs" element={<AboutPage />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/activity/:id" element={<ActivityDetail />} />
      <Route path="/education" element={<Education />} />
      <Route path="/education/artikel/:id" element={<ArtikelDetail />} />

      <Route path="/Guide" element={<Guide />} />
      <Route path="/partners" element={<PartnersPage />} />

      {/* Admin Section */}
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/web/*"
        element={
          isAuthenticated ? (
            <ErrorBoundary>
              {" "}
              {/* Wrap AdminLayout in ErrorBoundary */}
              <AdminLayout user={user} handleLogout={handleLogout} />
            </ErrorBoundary>
          ) : (
            <Unauthorized />
          )
        }
      />
    </Routes>
  );
};

// Admin Layout Component
const AdminLayout = ({ user, handleLogout }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <NavbarAdmin user={user} handleLogout={handleLogout} />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="kategori-sampah" element={<Kategori />} />
          <Route path="management" element={<Management />} />
          <Route path="pengguna" element={<PenggunaPage />} />
          <Route path="peta" element={<PetaPage />} />
          <Route path="produk-sampah" element={<ProdukSampah />} />
          <Route path="transaksi" element={<Transaksi />} />
          <Route path="uom" element={<UOMPage />} />
          <Route path="postingan/kegiatan" element={<KegiatanPage />} />
          <Route path="postingan/artikel" element={<ArtikelPage />} />
          <Route path="postingan/jenis-sampah" element={<JenisSampahPage />} />
          <Route
            path="postingan/manfaat-daur-ulang"
            element={<ManfaatPage />}
          />
        </Routes>
      </div>
    </div>
  );
};

// Unauthorized Component
const Unauthorized = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Show the message, then redirect after 3 seconds
    setTimeout(() => {
      navigate("/");
    }, 3000); // Redirect after 3 seconds (3000 milliseconds)
  }, [navigate]);

  return <div>You are not authorized to view this page. Please log in.</div>;
};

export default App;
