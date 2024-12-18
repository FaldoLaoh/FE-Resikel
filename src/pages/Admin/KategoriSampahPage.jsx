import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

const KategoriSampahPage = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch categories from API
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5001/api/categories");
      setCategories(response.data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to fetch categories.");
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      setError("Category name is required.");
      return;
    }

    try {
      if (editingId) {
        await axios.put(`http://localhost:5001/api/categories/${editingId}`, {
          name,
        });
        setEditingId(null);
      } else {
        await axios.post("http://localhost:5001/api/categories", { name });
      }
      setName("");
      setError("");
      fetchCategories();
      setIsModalOpen(false); // Close modal after submission
    } catch (err) {
      console.error(err);
      setError("Failed to save category.");
    }
  };

  // Handle edit button
  const handleEdit = (category) => {
    setName(category.name);
    setEditingId(category.id);
    setIsModalOpen(true);
  };

  // Handle delete button
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`http://localhost:5001/api/categories/${id}`);
        fetchCategories();
      } catch (err) {
        console.error(err);
        setError("Failed to delete category.");
      }
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setEditingId(null);
    setName("");
  };

  return (
    <>
      <div className="mainSection mt-16 ml-64 p-6 flex-1">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Data Kategori Sampah
            </h2>
            <Button
              onClick={toggleModal}
              className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md shadow-md"
            >
              Tambah
            </Button>
          </div>

          {loading ? (
            <div className="text-center">Loading...</div>
          ) : categories.length > 0 ? (
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
              <table className="min-w-full table-auto">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      No
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Nama Kategori
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, index) => (
                    <tr key={category.id} className="border-b">
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {index + 1}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {category.name}
                      </td>
                      <td className="px-4 py-2 text-sm">
                        <Button
                          onClick={() => handleEdit(category)}
                          className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded-md shadow-md"
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => handleDelete(category.id)}
                          className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-md shadow-md ml-2"
                        >
                          Hapus
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>No categories available.</div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              toggleModal();
            }
          }}
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">
              {editingId ? "Edit Kategori Sampah" : "Tambah Kategori Sampah"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Nama Kategori
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan nama kategori"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  type="button"
                  onClick={toggleModal}
                  className="bg-gray-400 text-white hover:bg-gray-500 px-4 py-2 rounded-md"
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md"
                >
                  {editingId ? "Update" : "Simpan"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default KategoriSampahPage;
