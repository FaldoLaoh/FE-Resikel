import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PenggunaPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ email: "", name: "" });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State to control the "Add New User" modal
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    name: "",
  });

  // Fetch users when the component is mounted
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/users");
        setUsers(response.data);
      } catch (err) {
        setError(
          "No response from the server. Please check your network connection."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle delete user
  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5001/api/users/${userId}`
      );
      console.log(response.data); // Log the response
      setUsers(users.filter((user) => user.id !== userId)); // Use correct user id for filtering
    } catch (err) {
      console.error("Error deleting user:", err.response?.data || err.message);
      setError("Failed to delete the user.");
    }
  };

  // Handle edit user (open the edit modal)
  const handleEdit = (user) => {
    setSelectedUser(user);
    setUpdatedUser({ email: user.email, name: user.name });
    setIsEditModalOpen(true);
  };

  // Handle form field change for user details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle update user details
  const handleUpdateUser = async () => {
    try {
      await axios.put(
        `http://localhost:5001/api/users/${selectedUser.id}`,
        updatedUser
      );
      setUsers(
        users.map((user) =>
          user.id === selectedUser.id ? { ...user, ...updatedUser } : user
        )
      );
      setIsEditModalOpen(false); // Close the modal after successful update
    } catch (err) {
      setError("Failed to update the user.");
    }
  };

  // Handle new user input change
  const handleNewUserInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle add new user
  const handleAddNewUser = async () => {
    try {
      await axios.post("http://localhost:5001/api/users", newUser);
      setUsers([...users, newUser]);
      setIsAddModalOpen(false); // Close the modal after successful addition
    } catch (err) {
      setError("Failed to add new user.");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-800">
      <div className="flex-1 overflow-y-auto mt-16 ml-64">
        <header className="bg-white dark:bg-gray-900 shadow p-4 flex justify-between">
          <h1 className="text-2xl font-bold">Manage Users</h1>
          <button
            onClick={() => setIsAddModalOpen(true)} // Open the "Add New User" modal
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add New User
          </button>
        </header>

        <div className="mt-6 p-6">
          {isLoading ? (
            <p>Loading users...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <table className="w-full table-auto bg-white dark:bg-gray-700 rounded-lg">
              <thead>
                <tr>
                  {["ID", "Email", "Name", "Actions"].map((header, index) => (
                    <th key={index} className="px-4 py-2">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-4 py-2">{user.id}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleEdit(user)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="ml-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Add New User Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Add New User</h2>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={newUser.email}
                onChange={handleNewUserInputChange}
                className="mt-2 p-2 w-full border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 dark:text-gray-200"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={newUser.password}
                onChange={handleNewUserInputChange}
                className="mt-2 p-2 w-full border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newUser.name}
                onChange={handleNewUserInputChange}
                className="mt-2 p-2 w-full border rounded-lg"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleAddNewUser}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Add User
              </button>
              <button
                onClick={() => setIsAddModalOpen(false)} // Close the modal
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Edit User</h2>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={updatedUser.email}
                onChange={handleInputChange}
                className="mt-2 p-2 w-full border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={updatedUser.name}
                onChange={handleInputChange}
                className="mt-2 p-2 w-full border rounded-lg"
              />
            </div>
            <div className="flex justify-between">
              {/* Delete button */}
              {/* <button
                onClick={() => handleDelete(selectedUser.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Delete
              </button> */}
              <button
                onClick={handleUpdateUser}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Update
              </button>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PenggunaPage;
