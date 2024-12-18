// NavbarAdmin.jsx
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ModeToggle } from "../AppearanceModes/mode-toggle";

function NavbarAdmin({ user, handleLogout }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogoutAndRedirect = () => {
    handleLogout(); // Perform the logout action
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 py-4 z-50">
      <div className="flex items-center px-4 w-full">
        <div className="flex items-center">
          <img src="/images/resikel.png" alt="logo" className="w-auto" />
        </div>

        <div className="flex items-center ml-16 gap-6">
          <div className="flex items-center border border-gray-300 rounded-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600">
            <input
              type="text"
              placeholder="Search..."
              className="text-gray-700 dark:text-white text-base placeholder-gray-500 dark:placeholder-gray-400 px-4 py-2 rounded-l-md w-64"
            />
            <button className="hover:bg-gray-200 px-4 py-2 text-white font-medium rounded-r-md flex items-center justify-center">
              <i className="uil uil-search text-gray-600"></i>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 ml-auto relative">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 text-white hover:bg-gray-600 profile-button"
            onClick={toggleDropdown}
          >
            <i className="uil uil-user"></i>
          </button>

          <span className="text-gray-700 dark:text-white">
            {user && user.nama ? user.nama : `guest`}
          </span>

          <ModeToggle />

          {dropdownOpen && (
            <div className="profile-dropdown absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg">
              <ul className="text-gray-900 dark:text-white">
                <li>
                  <Link
                    to="/web/res-user"
                    className="block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    User Settings
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogoutAndRedirect}
                    className="block justify-center px-4 py-2 text-sm bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-700 rounded-md"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavbarAdmin;
