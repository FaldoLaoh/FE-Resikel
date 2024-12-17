import React, { useState, useEffect } from "react";
import axios from "axios";

const KategoriSampahPage = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
    } catch (err) {
      console.error(err);
      setError("Failed to save category.");
    }
  };

  // Handle edit button
  const handleEdit = (category) => {
    setName(category.name);
    setEditingId(category.id);
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

  return (
    <div className="mainSection mt-16 ml-64 p-6 flex-1">
      <h1 className="text-2xl font-bold mb-4">Kategori Sampah</h1>

      {/* Error Message */}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-4">
        <div>
          <label htmlFor="category-name" className="block font-semibold">
            Nama Kategori:
          </label>
          <input
            type="text"
            id="category-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter category name"
            className="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {editingId ? "Update" : "Add"}
          </button>
        </div>
        {editingId && (
          <div>
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setName("");
              }}
              className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          </div>
        )}
      </form>

      {/* Loading Indicator */}
      {loading && <div className="text-center">Loading...</div>}

      {/* Categories Table */}
      {!loading && categories.length > 0 ? (
        <table className="min-w-full bg-white dark:bg-gray-700 border rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Nama Kategori</th>
              <th className="py-2 px-4 border-b">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="text-center">
                <td className="py-2 px-4 border-b">{category.id}</td>
                <td className="py-2 px-4 border-b">{category.name}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEdit(category)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <div>No categories available.</div>
      )}
    </div>
  );
};

export default KategoriSampahPage;
