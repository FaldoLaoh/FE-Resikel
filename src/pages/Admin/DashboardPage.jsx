import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";
import NavbarAdmin from "@/components/Navbar/Navbar_Admin"; // Assuming NavbarAdmin is the component name

const DashboardPage = () => {
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
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <NavbarAdmin user={user} handleLogout={handleLogout} />{" "}
        {/* Pass user data and handleLogout to Navbar */}
        <div className="mainSection mt-16 ml-64 p-6 flex-1">
          <header className="bg-white dark:bg-gray-900 shadow p-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Dashboard
            </h1>
          </header>
          <main className="p-6">
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Welcome, {user?.email || "User"}!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                Explore the dashboard features and manage your tasks
                efficiently.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
