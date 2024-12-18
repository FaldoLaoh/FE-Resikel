import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Add navigate for redirection
const PenggunaPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    email: "",
    name: "",
    total_points: 0,
  });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    name: "",
    total_points: 0,
  });
  const navigate = useNavigate();

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

  const handleEdit = (user) => {
    setSelectedUser(user);
    setUpdatedUser({
      email: user.email,
      name: user.name,
      total_points: user.total_points,
      active: user.active,
    });
    setIsEditModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({
      ...prev,
      [name]: name === "total_points" ? parseInt(value, 10) : value,
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

  const handleDelete = (userId) => {
    // Confirm with the user before proceeding with deletion
    if (window.confirm("Are you sure you want to delete this user?")) {
      // Log the user ID to ensure it's being passed correctly
      console.log("Deleting user with ID:", userId);

      // Send DELETE request to the backend API
      fetch(`http://localhost:5001/api/users/${userId}`, {
        method: "DELETE",
      })
        .then((response) => {
          // Log the response status to troubleshoot
          console.log("Response status:", response.status);

          // Check if the status code is successful
          if (!response.ok) {
            throw new Error("Failed to delete user");
          }

          // Parse the response body (JSON) to inspect it
          return response.json();
        })
        .then((data) => {
          // Log the response body to inspect the message or error
          console.log("Response body:", data);

          // Ensure the response contains a success message or relevant data
          if (data.message === "User deleted successfully") {
            // Update the state by removing the deleted user
            setUsers(users.filter((user) => user.id !== userId));
          } else {
            // If not successful, show an alert with the error message
            alert(data.message || "Failed to delete user");
          }
        })
        .catch((error) => {
          // Catch and log any errors during the fetch operation
          console.error("Error:", error);
          alert("An error occurred while deleting the user.");
        });
    }
  };

  const handleNewUserInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: name === "total_points" ? parseInt(value, 10) : value,
    }));
  };

  const handleAddUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/users",
        newUser
      );
      setUsers([...users, response.data]); // Add the new user to the state
      setIsAddModalOpen(false); // Close the modal
      setNewUser({
        email: "",
        password: "",
        name: "",
        total_points: 0,
        active: true,
      }); // Reset the form
    } catch (err) {
      setError("Failed to add the user.");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-800">
      <div className="flex-1 overflow-y-auto mt-16 ml-64">
        <header className="bg-white dark:bg-gray-900 shadow p-4 flex justify-between">
          <div className="text-2xl font-bold">Manage Users</div>
        </header>
        <div className="2header flex align-center justify-around pt-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
            <div className="mr-4">
              <i className="uil uil-shop text-purple-600 text-2xl"></i>
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">
                Total Users
              </h4>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {users.length}
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
            <div className="mr-4">
              <i className="uil uil-shop text-purple-600 text-2xl"></i>
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">
                Active Users
              </h4>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {users.filter((user) => user.active).length}
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
            <div className="mr-4">
              <i className="uil uil-shop text-purple-600 text-2xl"></i>
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">
                Inactive Users
              </h4>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {users.filter((user) => user.active === 0).length}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add New User
          </button>
        </div>

        <div className=" p-6">
          {isLoading ? (
            <p>Loading users...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <thead className="bg-gray-200 dark:bg-gray-800">
                  <tr>
                    {["ID", "Email", "Name", "Total Points", "Actions"].map(
                      (header, index) => (
                        <th
                          key={index}
                          className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          {header}
                        </th>
                      )
                    )}
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
                      <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-300">
                        {user.total_points}
                      </td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => handleEdit(user)}
                          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                        >
                          Edit
                        </button>

                        <button
                          className="bg-red-500 text-white py-2 px-4 mx-3 rounded-md hover:bg-red-700 transition duration-200"
                          onClick={() => handleDelete(user.id)}
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
            <input
              type="number"
              name="total_points"
              value={updatedUser.total_points}
              onChange={handleInputChange}
              placeholder="Total Points"
              className="mt-2 p-2 w-full border rounded-lg"
            />
            <select
              name="active"
              value={updatedUser.active}
              onChange={handleInputChange}
              className="mt-2 p-2 w-full border rounded-lg"
            >
              <option value="">Select Active Status</option>
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>

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
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleNewUserInputChange}
              placeholder="Name"
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
              type="number"
              name="total_points"
              value={newUser.total_points}
              onChange={handleNewUserInputChange}
              placeholder="Total Points"
              className="mt-2 p-2 w-full border rounded-lg"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleAddUser}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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
    </div>
  );
};

export default PenggunaPage;
