import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "@/components/Sidebar/Sidebar";
import NavbarAdmin from "@/components/Navbar/Navbar_Admin";
import { useNavigate } from "react-router-dom";

const ProdukSampahPage = () => {
  const [produkSampah, setProdukSampah] = useState([]);
  const [newData, setNewData] = useState({
    foto: "",
    category_id: "",
    uom_id: "",
  });
  const [categories, setCategories] = useState([]); // To store categories
  const [uoms, setUoms] = useState([]); // To store UOMs
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const navigate = useNavigate();

  // Fetch Produk Sampah Data
  useEffect(() => {
    fetchProdukSampah();
    fetchCategories(); // Fetch categories when the component mounts
    fetchUoms(); // Fetch UOMs when the component mounts
  }, []);

  const fetchProdukSampah = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/v1/produk-sampah",
        {
          withCredentials: true,
        }
      );
      setProdukSampah(response.data.data); // Assuming the response has { data: [...] }
    } catch (error) {
      console.error("Error fetching produk sampah:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/v1/categories",
        {
          withCredentials: true,
        }
      );
      setCategories(response.data.data); // Assuming the response has { data: [...] }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchUoms = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/v1/uoms", {
        withCredentials: true,
      });
      setUoms(response.data.data); // Assuming the response has { data: [...] }
    } catch (error) {
      console.error("Error fetching UOMs:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData({
      ...newData,
      [name]: value,
    });
  };

  const handleCreateOrUpdate = async () => {
    try {
      if (isEditMode) {
        // Update an existing product
        await axios.put(
          `http://localhost:5001/api/v1/produk-sampah/${currentId}`,
          newData,
          { withCredentials: true }
        );
      } else {
        // Create a new product
        await axios.post(
          "http://localhost:5001/api/v1/produk-sampah",
          newData,
          {
            withCredentials: true,
          }
        );
      }

      setIsModalOpen(false);
      resetForm();
      fetchProdukSampah(); // Reload data
    } catch (error) {
      console.error("Error saving produk sampah:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/v1/produk-sampah/${id}`, {
        withCredentials: true,
      });
      fetchProdukSampah(); // Reload data
    } catch (error) {
      console.error("Error deleting produk sampah:", error);
    }
  };

  const handleEdit = (produk) => {
    setNewData({
      foto: produk.foto,
      category_id: produk.category_id,
      uom_id: produk.uom_id,
    });
    setCurrentId(produk._id); // Updated for `_id` in MongoDB
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    resetForm();
  };

  const resetForm = () => {
    setNewData({
      foto: "",
      category_id: "",
      uom_id: "",
    });
    setIsEditMode(false);
    setCurrentId(null);
  };

  // Modal JSX
  const modal = (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={toggleModal}
    >
      <div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          {isEditMode ? "Edit Produk Sampah" : "Tambah Produk Sampah"}
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

        {/* Dropdown for category_id */}
        <div className="mb-4">
          <label
            htmlFor="category_id"
            className="block text-gray-700 dark:text-gray-200"
          >
            Kategori
          </label>
          <select
            id="category_id"
            name="category_id"
            value={newData.category_id}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border rounded-lg"
          >
            <option value="">Pilih Kategori</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Dropdown for uom_id */}
        <div className="mb-4">
          <label
            htmlFor="uom_id"
            className="block text-gray-700 dark:text-gray-200"
          >
            Satuan
          </label>
          <select
            id="uom_id"
            name="uom_id"
            value={newData.uom_id}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border rounded-lg"
          >
            <option value="">Pilih Satuan</option>
            {uoms.map((uom) => (
              <option key={uom._id} value={uom._id}>
                {uom.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleCreateOrUpdate}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            {isEditMode ? "Update" : "Simpan"}
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
      <Sidebar />
      <div className="flex-1 overflow-y-auto ml-64">
        <NavbarAdmin />
        <div className="mt-16 p-6">
          <header className="bg-white dark:bg-gray-900 shadow p-4 flex justify-between">
            <h1 className="text-2xl font-bold">Produk Sampah</h1>
            <button
              onClick={toggleModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Tambah Produk Sampah
            </button>
          </header>

          <table className="w-full mt-6 table-auto bg-white dark:bg-gray-700 rounded-lg">
            <thead>
              <tr>
                {["No", "Foto", "Nama", "Kategori", "Satuan", "Aksi"].map(
                  (header, index) => (
                    <th key={index} className="px-4 py-2">
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {produkSampah.map((produk, index) => (
                <tr key={produk._id}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">
                    <img
                      src={produk.foto}
                      alt={produk.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2">{produk.name}</td>
                  <td className="px-4 py-2">
                    {produk.category ? produk.category.name : "N/A"}
                  </td>
                  <td className="px-4 py-2">
                    {produk.uom ? produk.uom.name : "N/A"}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEdit(produk)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(produk._id)}
                      className="ml-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isModalOpen && modal}
      </div>
    </div>
  );
};

export default ProdukSampahPage;
