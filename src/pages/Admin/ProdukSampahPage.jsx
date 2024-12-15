import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "@/components/Sidebar/Sidebar";
import NavbarAdmin from "@/components/Navbar/Navbar_Admin";
import { useNavigate } from "react-router-dom";

const ProdukSampahPage = () => {
  const [produkSampah, setProdukSampah] = useState([]);
  const [newData, setNewData] = useState({
    foto: "",
    nama: "",
    jenis_sampah: "",
    jml_poin_per_kg: "",
    harga_beli_per_kg: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch Produk Sampah Data
  useEffect(() => {
    const fetchProdukSampah = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/produk-sampah",
          {
            withCredentials: true,
          }
        );
        setProdukSampah(response.data);
      } catch (error) {
        console.error("Error fetching produk sampah:", error);
      }
    };

    fetchProdukSampah();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData({
      ...newData,
      [name]: value,
    });
  };

  const handleCreate = async () => {
    try {
      await axios.post("http://localhost:5001/produk-sampah", newData, {
        withCredentials: true,
      });
      setIsModalOpen(false); // Close modal after successful create
      setNewData({
        foto: "",
        nama: "",
        jenis_sampah: "",
        jml_poin_per_kg: "",
        harga_beli_per_kg: "",
      });
      // Reload data after creating
      const response = await axios.get("http://localhost:5001/produk-sampah", {
        withCredentials: true,
      });
      setProdukSampah(response.data);
    } catch (error) {
      console.error("Error creating produk sampah:", error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Modal JSX
  const modal = (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={toggleModal}
    >
      <div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal on click inside
      >
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Tambah Produk Sampah
        </h2>

        <div className="mb-4">
          <label
            htmlFor="foto"
            className="block text-gray-700 dark:text-gray-200"
          >
            Foto URL
          </label>
          <input
            type="text"
            id="foto"
            name="foto"
            value={newData.foto}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="nama"
            className="block text-gray-700 dark:text-gray-200"
          >
            Nama
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={newData.nama}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="jenis_sampah"
            className="block text-gray-700 dark:text-gray-200"
          >
            Jenis Sampah
          </label>
          <input
            type="text"
            id="jenis_sampah"
            name="jenis_sampah"
            value={newData.jenis_sampah}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="jml_poin_per_kg"
            className="block text-gray-700 dark:text-gray-200"
          >
            Jumlah Poin /kg
          </label>
          <input
            type="number"
            id="jml_poin_per_kg"
            name="jml_poin_per_kg"
            value={newData.jml_poin_per_kg}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="harga_beli_per_kg"
            className="block text-gray-700 dark:text-gray-200"
          >
            Harga Beli /kg
          </label>
          <input
            type="number"
            id="harga_beli_per_kg"
            name="harga_beli_per_kg"
            value={newData.harga_beli_per_kg}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border rounded-lg"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleCreate}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Simpan
          </button>
          <button
            onClick={toggleModal}
            className="ml-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-800">
      {/* Sidebar */}
      <div className="sidebar fixed top-0 left-0 h-full w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto ml-64">
        <NavbarAdmin />
        <div className="mt-16 p-6">
          <header className="bg-white dark:bg-gray-900 shadow p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Produk Sampah
            </h1>

            {/* Search Bar */}
            <div className="flex items-center border border-gray-300 rounded-lg">
              <input
                type="text"
                placeholder="Search .."
                className="p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="text-grey p-2 rounded-r-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 10a7 7 0 1 0-7 7 7 7 0 0 0 7-7z"
                  />
                </svg>
              </button>
            </div>
          </header>

          <main className="p-6">
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow p-6">
              <div className="mb-4 flex justify-between items-center">
                <button
                  onClick={toggleModal}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Tambah Produk Sampah
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left  text-gray-800 dark:text-gray-200">
                        No
                      </th>
                      <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
                        Foto
                      </th>
                      <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
                        Nama
                      </th>
                      <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
                        Jenis Sampah
                      </th>
                      <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
                        Jml Poin /kg
                      </th>
                      <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
                        Harga Beli /kg
                      </th>
                      <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {produkSampah.map((produk, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                          {index + 1}
                        </td>
                        <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                          <img
                            src={produk.foto}
                            alt={produk.nama}
                            className="w-16 h-16 object-cover"
                          />
                        </td>
                        <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                          {produk.nama}
                        </td>
                        <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                          {produk.jenis_sampah}
                        </td>
                        <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                          {produk.jml_poin_per_kg}
                        </td>
                        <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                          {produk.harga_beli_per_kg}
                        </td>
                        <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                            Hapus
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && modal}
    </div>
  );
};

export default ProdukSampahPage;
