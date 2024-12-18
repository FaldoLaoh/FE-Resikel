import React, { useState, useEffect } from "react";
import axios from "axios";
import KegiatanTable from "../../components/KegiatanPage/KegiatanTable";

const KegiatanPage = () => {
  const [kegiatanData, setKegiatanData] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    foto: "",
  });
  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch data from API on component mount
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/post_post")
      .then((response) => {
        setKegiatanData(response.data);
      })
      .catch((error) => console.log(error));
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
    formDataToSubmit.append("user_id", 1); // Example user_id
    formDataToSubmit.append("category_id", 1); // Example category_id
    formDataToSubmit.append("title", formData.title);
    formDataToSubmit.append("description", formData.description);
    if (formData.foto) {
      formDataToSubmit.append("foto", formData.foto);
    }

    if (editId) {
      // Update existing record
      axios
        .put(`http://localhost:5001/api/post_post/${editId}`, formDataToSubmit)
        .then(() => {
          const updatedData = kegiatanData.map((item) =>
            item.id === editId ? { ...item, ...formData } : item
          );
          setKegiatanData(updatedData);
          setShowModal(false);
        })
        .catch((error) => console.log(error));
    } else {
      // Add new record
      axios
        .post("http://localhost:5001/api/post_post", formDataToSubmit)
        .then((response) => {
          const newItem = {
            ...formData,
            id: response.data.id,
            created_date: response.data.created_date, // Use created_date from response
          };
          setKegiatanData([...kegiatanData, newItem]);
          setShowModal(false);
        })
        .catch((error) => console.log(error));
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
        .then((response) => {
          console.log(response.data);
          fetchPosts(); // Refresh the posts list after deletion
        })
        .catch((error) => {
          console.log(error);
          alert("Error deleting post");
        });
    }
  };

  return (
    <div className="kegiatan-page-container mt-20 ml-64">
      <div className="button justify-end flex mx-5">
        <button
          onClick={() => {
            setEditId(null);
            setFormData({ title: "", description: "", foto: "" });
            setShowModal(true);
          }}
          className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        >
          Add New Kegiatan
        </button>
      </div>

      <KegiatanTable
        data={kegiatanData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">
              {editId ? "Edit" : "Add New"} Kegiatan
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

export default KegiatanPage;
