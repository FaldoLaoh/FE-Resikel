import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Add navigate for redirection

const PenggunaPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ email: "", name: "" });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate(); // Initialize navigate for redirect

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

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5001/api/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (err) {
      setError("Failed to delete the user.");
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setUpdatedUser({ email: user.email, name: user.name });
    setIsEditModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
      setIsEditModalOpen(false);
    } catch (err) {
      setError("Failed to update the user.");
    }
  };

  const handleNewUserInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddNewUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/users",
        newUser
      );
      setUsers([...users, response.data]);
      setNewUser({ email: "", password: "", name: "" }); // Reset the form
      setIsAddModalOpen(false);
    } catch (err) {
      setError("Failed to add new user.");
    }
  };

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      try {
        await axios.post(
          "http://localhost:5001/logout",
          {},
          { withCredentials: true }
        );
        navigate("/"); // Redirect to login page or home
      } catch (error) {
        console.error("Error logging out:", error);
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-800">
      <div className="flex-1 overflow-y-auto mt-16 ml-64">
        <header className="bg-white dark:bg-gray-900 shadow p-4 flex justify-between">
          <h1 className="text-2xl font-bold">Manage Users</h1>
          <button
            onClick={() => setIsAddModalOpen(true)}
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
            <div className="overflow-x-auto">
              <table className="w-full table-auto bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <thead className="bg-gray-200 dark:bg-gray-800">
                  <tr>
                    {["ID", "Email", "Name", "Actions"].map((header, index) => (
                      <th
                        key={index}
                        className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr
                      key={user.id}
                      className={`${
                        index % 2 === 0
                          ? "bg-white dark:bg-gray-600"
                          : "bg-gray-100 dark:bg-gray-700"
                      } hover:bg-gray-50 dark:hover:bg-gray-600`}
                    >
                      <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-300">
                        {user.id}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-300">
                        {user.email}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-300">
                        {user.name}
                      </td>
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
            </div>
          )}
        </div>
      </div>

      {/* Add Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Add New User</h2>
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleNewUserInputChange}
              placeholder="Email"
              className="mt-2 p-2 w-full border rounded-lg"
            />
            <input
              type="password"
              name="password"
              value={newUser.password}
              onChange={handleNewUserInputChange}
              placeholder="Password"
              className="mt-2 p-2 w-full border rounded-lg"
            />
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleNewUserInputChange}
              placeholder="Name"
              className="mt-2 p-2 w-full border rounded-lg"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleAddNewUser}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Add User
              </button>
              <button
                onClick={() => setIsAddModalOpen(false)}
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
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="mt-2 p-2 w-full border rounded-lg"
            />
            <input
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="mt-2 p-2 w-full border rounded-lg"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleUpdateUser}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Update
              </button>
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
