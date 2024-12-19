import React from "react";

// Utility function to format the date
const formatDate = (dateString) => {
  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date)) {
    return "Invalid Date"; // Return a fallback message if the date is invalid
  }

  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options); // e.g., December 18, 2024
};

const ManfaatTable = ({ data, onEdit, onDelete }) => {
  // Function to trim the description to 15 words
  const trimDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 15) {
      return words.slice(0, 15).join(" ") + "...";
    }
    return description;
  };

  return (
    <div className="table-container w-full max-w-7xl mx-auto p-4 mt-6">
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Foto</th>
            <th className="px-4 py-2 border">Created Date</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-2 border">{item.title}</td>
              <td className="px-4 py-2 border">
                {trimDescription(item.description)}
              </td>
              <td className="px-4 py-2 border">
                {/* Displaying the image if 'foto' field exists */}
                {item.foto && (
                  <img
                    src={`path/to/images/${item.foto}`} // Make sure to replace this path with your correct image path
                    alt={item.title}
                    className="w-16 h-16 object-cover" // Adjust size and style as needed
                  />
                )}
              </td>
              <td className="px-4 py-2 border">
                {formatDate(item.created_date)}{" "}
                {/* Format and display the date */}
              </td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() =>
                    onEdit(item.id, item.title, item.description, item.foto)
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManfaatTable;
