import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "@/components/Sidebar/Sidebar";
import NavbarAdmin from "@/components/Navbar/Navbar_Admin";

const AdminLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/check-session",
          { withCredentials: true }
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
        navigate("/");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-gray-800 dark:text-gray-200 text-lg font-medium">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-800">
      <div className="sidebar fixed top-0 left-0 h-full w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
        <Sidebar />
      </div>
      <div className="flex-1">
        <NavbarAdmin user={user} handleLogout={handleLogout} />
        <div className="mt-16 ml-64 p-6">
          <Outlet /> {/* Render child pages here */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
