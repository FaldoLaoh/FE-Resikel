import React from "react";

const JenisSampahTable = ({ data, onEdit, onDelete }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <table className="min-w-full table-auto border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="px-4 py-2 border">Title</th>
          <th className="px-4 py-2 border">Description</th>
          <th className="px-4 py-2 border">Photo</th>
          <th className="px-4 py-2 border">Created Date</th>
          <th className="px-4 py-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="px-4 py-2 border">{item.title}</td>
            <td className="px-4 py-2 border">{item.description}</td>
            <td className="px-4 py-2 border">
              {item.foto ? (
                <img
                  src={`http://localhost:5001/uploads/${item.foto}`}
                  alt="Photo"
                  className="w-16 h-16 object-cover"
                />
              ) : (
                "No Photo"
              )}
            </td>
            <td className="px-4 py-2 border">
              {new Date(item.created_date).toLocaleString()}
            </td>
            <td className="px-4 py-2 border">
              <button
                onClick={() =>
                  onEdit(item.id, item.title, item.description, item.foto)
                }
                className="bg-yellow-500 px-4 py-2 rounded text-white mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(item.id)}
                className="bg-red-500 px-4 py-2 rounded text-white"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JenisSampahTable;
