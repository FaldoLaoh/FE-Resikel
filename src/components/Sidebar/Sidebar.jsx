import React, { useState } from "react";
import {
  Home,
  Clipboard,
  ChevronDown,
  LayoutDashboard,
  MapPin,
  Users,
  Edit,
  LogOut,
  User,
  ChartBar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  // Show sidebar only on "/web" routes
  const isWebRoute = location.pathname.startsWith("/web");
  if (!isWebRoute) {
    return null;
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdownOpen1((prev) => !prev);
  };

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <nav className="flex flex-col space-y-1 mt-16">
        {/* Home Link */}
        <Link
          to="/web"
          className={cn(
            "flex items-center p-3 rounded-md",
            "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          )}
        >
          <Home size={20} className="mr-3" />
          <span>Beranda</span>
        </Link>

        {/* Manajemen Sampah with Dropdown */}
        <div className="flex flex-col">
          <button
            onClick={toggleDropdown}
            className={cn(
              "flex items-center justify-between p-3 rounded-md",
              "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            )}
          >
            <div className="flex items-center">
              <Clipboard size={20} className="mr-3" />
              <span>Manajemen Sampah</span>
            </div>
            <ChevronDown
              size={20}
              className={cn("transition-transform", {
                "rotate-180": isDropdownOpen,
              })}
            />
          </button>
          {isDropdownOpen && (
            <div className="ml-8 flex flex-col space-y-1">
              <Link
                to="/web/produk-sampah"
                className="flex items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                <span>Produk</span>
              </Link>
              <Link
                to="/web/kategori-sampah"
                className="flex items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                <span>Kategori</span>
              </Link>
              <Link
                to="/web/uom"
                className="flex items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                <span>Satuan Ukuran</span>
              </Link>
            </div>
          )}
        </div>

        {/* Transaksi */}
        <Link
          to="/web/transaksi"
          className={cn(
            "flex items-center p-3 rounded-md",
            "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          )}
        >
          <ChartBar size={20} className="mr-3" />
          <span>Transaksi</span>
        </Link>

        {/* Peta dan Lokasi */}
        <Link
          to="/web/peta"
          className={cn(
            "flex items-center p-3 rounded-md",
            "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          )}
        >
          <MapPin size={20} className="mr-3" />
          <span>Peta dan Lokasi</span>
        </Link>

        {/* Pengguna */}
        <Link
          to="/web/pengguna"
          className={cn(
            "flex items-center p-3 rounded-md",
            "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          )}
        >
          <Users size={20} className="mr-3" />
          <span>Pengguna</span>
        </Link>

        {/* Postingan */}

        <div className="flex flex-col">
          <button
            onClick={toggleDropdown1}
            className={cn(
              "flex items-center p-3 rounded-md",
              "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            )}
          >
            <div className="flex items-center">
              <Clipboard size={20} className="mr-3" />
              <span>Postingan</span>
            </div>
            <ChevronDown
              size={20}
              className={cn("transition-transform", {
                "rotate-180": isDropdownOpen1,
              })}
            />
          </button>
          {isDropdownOpen1 && (
            <div className="ml-8 flex flex-col space-y-1">
              <Link
                to="/web/postingan/kegiatan"
                className="flex items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                <span>Kegiatan</span>
              </Link>
              <Link
                to="/web/postingan/artikel"
                className="flex items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                <span>Artikel</span>
              </Link>
              <Link
                to="/web/postingan/jenis-sampah"
                className="flex items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                <span>Jenis Sampah</span>
              </Link>
              <Link
                to="/web/postingan/manfaat-daur-ulang"
                className="flex items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                <span>Manfaat Daur Ulang</span>
              </Link>
            </div>
          )}
        </div>
        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 my-2"></div>

        {/* Akun Saya */}
        <Link
          to="/web/res_users"
          className={cn(
            "flex items-center p-3 rounded-md",
            "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          )}
        >
          <User size={20} className="mr-3" />
          <span>Akun Saya</span>
        </Link>
      </nav>

      {/* Postingan */}
    </aside>
  );
}

export default Sidebar;
