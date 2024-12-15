import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

const PenggunaPage = () => {
  const [users, setusers] = useState([]);
  const [newData, setNewData] = useState({
    nama: "",
    email: "",
    role: "",
    point: "",
    password: "",
  });
  const [editData, setEditData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch data on mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => setusers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle input changes for new data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle input changes for editing
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Create new User
  const handleCreate = () => {
    axios
      .post("http://localhost:5000/users", newData)
      .then((response) => {
        setusers([...users, response.data]);
        toggleModal();
      })
      .catch((error) => console.error("Error creating Users:", error));
  };

  // Update Users
  const handleUpdate = () => {
    axios
      .put(`http://localhost:5000/users/${editData.id}`, editData)
      .then((response) => {
        const updatedData = users.map((users) =>
          users.id === editData.id ? response.data : users
        );
        setusers(updatedData);
        toggleModal();
      })
      .catch((error) => console.error("Error updating Users:", error));
  };

  // Delete Users
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/users/${id}`)
      .then(() => {
        const filteredData = users.filter((users) => users.id !== id);
        setusers(filteredData);
      })
      .catch((error) => console.error("Error deleting users:", error));
  };

  return (
    <>
      <div className="w-full mt-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 col-span-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Manajemen Pengguna
              <br />
            </h2>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <Button
                onClick={toggleModal}
                className="bg-emerald-600 text-white hover:bg-emerald-700 px-2 py-1 text-sm rounded-md shadow-md"
              >
                Tambah
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full table-auto">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                    No
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                    Nama
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                    Email
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                    Role
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                    Point
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((users, index) => (
                  <tr key={users.id}>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {users.nama}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {users.email}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {users.role}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {users.point}
                    </td>
                    <td className="px-4 py-2 text-sm">
                      <Button
                        onClick={() => {
                          setEditData(users);
                          toggleModal();
                        }}
                        className="bg-emerald-600 text-white hover:bg-emerald-700 p-2 rounded-md shadow-md"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDelete(users.id)}
                        className="bg-red-600 text-white hover:bg-red-700 p-2 rounded-md shadow-md ml-2"
                      >
                        Hapus
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Overlay Card */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              toggleModal();
            }
          }}
        >
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">
              {editData ? "Edit Pengguna" : "Tambah Pengguna"}
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Nama</label>
                <input
                  type="text"
                  name="nama"
                  value={editData ? editData.nama : newData.nama}
                  onChange={editData ? handleEditChange : handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Masukkan Nama Lengkap"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editData ? editData.email : newData.email}
                  onChange={editData ? handleEditChange : handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Masukkan Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Role</label>
                <select
                  name="role"
                  value={editData ? editData.role : newData.role}
                  onChange={editData ? handleEditChange : handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                >
                  <option value="" disabled>
                    Pilih Role
                  </option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Point</label>
                <input
                  type="number"
                  name="point"
                  value={editData ? editData.point : newData.point}
                  onChange={editData ? handleEditChange : handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Masukkan Point"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={editData ? editData.password : newData.password}
                  onChange={editData ? handleEditChange : handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Masukkan Password"
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  onClick={toggleModal}
                  className="bg-gray-400 text-white hover:bg-gray-500 px-4 py-2 rounded-md"
                >
                  Batal
                </Button>
                <Button
                  onClick={editData ? handleUpdate : handleCreate}
                  className="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-2 rounded-md"
                >
                  {editData ? "Update" : "Simpan"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PenggunaPage;
