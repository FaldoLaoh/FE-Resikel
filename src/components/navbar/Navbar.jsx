import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { ModeToggle } from "../AppearanceModes/mode-toggle";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 py-4 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo on the Left */}
        <div className="flex items-center ms-28">
          <img src="/images/resikel.png" alt="logo" className="h-8 w-auto" />
        </div>

        {/* Nav Content in the Center */}
        <div className="nav-content">
          <ul className="flex justify-center gap-6">
            <li>
              <Link
                to="/" // Using `to` instead of `href` for routing
                className="text-black dark:text-white font-normal hover:text-emerald-500 dark:hover:text-emerald-400"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/AboutUs"
                className="text-black dark:text-white font-normal hover:text-emerald-500 dark:hover:text-emerald-400"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to="/activities"
                className="text-black dark:text-white font-normal hover:text-emerald-500 dark:hover:text-emerald-400"
              >
                Kegiatan
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                className="text-black dark:text-white font-normal hover:text-emerald-500 dark:hover:text-emerald-400"
              >
                Edukasi
              </Link>
            </li>
            <li>
              <Link
                to="/Guide"
                className="text-black dark:text-white font-normal hover:text-emerald-500 dark:hover:text-emerald-400"
              >
                Panduan
              </Link>
            </li>
            <li>
              <Link
                to="/partners"
                className="text-black dark:text-white font-normal hover:text-emerald-500 dark:hover:text-emerald-400"
              >
                Mitra
              </Link>
            </li>
          </ul>
        </div>

        {/* Login Button on the Right */}
        <div className="loginBtn flex gap-4">
          <Link
            to="/Login" // Use Link to navigate to the Login page
            className="bg-emerald-600 dark:bg-emerald-500 text-white dark:text-gray-900 hover:bg-white dark:hover:bg-gray-700 px-4 py-2 rounded-md font-normal"
          >
            Login
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
