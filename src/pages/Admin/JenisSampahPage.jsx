import React, { useState, useEffect } from "react";
import axios from "axios";
import JenisSampahTable from "../../components/JenisSampahPage/JenisSampahTable";

const JenisSampahPage = () => {
  const [jenisSampahData, setJenisSampahData] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    foto: "",
  });
  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch data from API on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:5001/api/jenis_sampah")
      .then((response) => {
        const sortedData = response.data.posts.sort((a, b) => a.id - b.id);
        setJenisSampahData(sortedData);
      })
      .catch((error) => console.log(error));
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (Add or Update post)
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("user_id", 1);
    formDataToSubmit.append("category_id", 3);
    formDataToSubmit.append("title", formData.title);
    formDataToSubmit.append("description", formData.description);
    if (formData.foto) {
      formDataToSubmit.append("foto", formData.foto);
    }

    if (editId) {
      // Update existing data
      axios
        .put(`http://localhost:5001/api/post_post/${editId}`, formDataToSubmit)
        .then(() => {
          fetchData(); // Refetch the data to ensure consistency
          setEditId(null);
          setShowModal(false);
        })
        .catch((error) =>
          console.error("Error updating data:", error.response)
        );
    } else {
      // Add new data
      axios
        .post("http://localhost:5001/api/jenis_sampah", formDataToSubmit)
        .then(() => {
          fetchData(); // Refetch the data to ensure consistency
          setShowModal(false);
        })
        .catch((error) => console.error("Error adding data:", error.response));
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
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:5001/api/post_post/${id}`)
        .then(() => {
          fetchData(); // Refetch the data to ensure consistency
        })
        .catch((error) => {
          console.log(error);
          alert("Error deleting post");
        });
    }
  };

  return (
    <div className="jenis-sampah-page-container mt-20 ml-64">
      <div className="button justify-end flex mx-5">
        <button
          onClick={() => {
            setEditId(null);
            setFormData({ title: "", description: "", foto: "" });
            setShowModal(true);
          }}
          className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        >
          Add New Jenis Sampah
        </button>
      </div>

      <JenisSampahTable
        data={jenisSampahData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">
              {editId ? "Edit" : "Add New"} Jenis Sampah
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

export default JenisSampahPage;
