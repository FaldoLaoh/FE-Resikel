import React, { useState, useEffect } from "react";
import axios from "axios";
import ArtikelTable from "../../components/ArtikelPage/ArtikelTable";

const ArtikelPage = () => {
  const [artikelData, setArtikelData] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    foto: "",
  });
  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch data from API
  const fetchArtikel = (page = 1) => {
    axios
      .get(`http://localhost:5001/api/post_post/artikel?page=${page}`)
      .then((response) => {
        setArtikelData(response.data.posts);
        setCurrentPage(response.data.currentPage);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchArtikel();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (Add or Update post)
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("user_id", 1); // Assuming user_id is always 1 for now
    formDataToSubmit.append("category_id", 2); // Always category_id as 2
    formDataToSubmit.append("title", formData.title);
    formDataToSubmit.append("description", formData.description);

    // Append foto (image) only if it's selected
    if (formData.foto) {
      formDataToSubmit.append("foto", formData.foto);
    }

    const headers = { "Content-Type": "multipart/form-data" }; // Ensure it's set to handle file uploads

    if (editId) {
      // Update existing record
      axios
        .put(
          `http://localhost:5001/api/post_post/${editId}`,
          formDataToSubmit,
          { headers }
        )
        .then(() => {
          fetchArtikel(currentPage);
          setShowModal(false);
        })
        .catch((error) =>
          console.log(error.response ? error.response.data : error)
        );
    } else {
      // Add new record
      axios
        .post("http://localhost:5001/api/post_post/artikel", formDataToSubmit, {
          headers,
        })
        .then(() => {
          fetchArtikel(currentPage);
          setShowModal(false);
        })
        .catch((error) =>
          console.log(error.response ? error.response.data : error)
        );
    }
  };

  // Handle edit button click
  const handleEdit = (id, title, description, foto) => {
    setEditId(id);
    setFormData({ title, description, foto });
    setShowModal(true);
  };

  // Handle delete button click
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      axios
        .delete(`http://localhost:5001/api/post_post/${id}`)
        .then(() => {
          fetchArtikel(currentPage);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="artikel-page-container mt-20 ml-64">
      <div className="button justify-end flex mx-5">
        <button
          onClick={() => {
            setEditId(null);
            setFormData({ title: "", description: "", foto: "" });
            setShowModal(true);
          }}
          className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        >
          Add New Artikel
        </button>
      </div>

      <ArtikelTable
        data={artikelData}
        currentPage={currentPage}
        totalPages={totalPages}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onPageChange={fetchArtikel}
      />

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">
              {editId ? "Edit" : "Add New"} Artikel
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Foto
                </label>
                <input
                  type="file"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                  onChange={(e) =>
                    setFormData({ ...formData, foto: e.target.files[0] })
                  }
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtikelPage;
