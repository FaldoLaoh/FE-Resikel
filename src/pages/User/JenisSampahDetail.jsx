import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

const JenisSampahDetail = () => {
  const { id } = useParams(); // Get the "Jenis Sampah" ID from the URL
  const [jenisSampah, setJenisSampah] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJenisSampah = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/jenis-sampah/${id}`
        );
        setJenisSampah(response.data);
      } catch (err) {
        setError("Error fetching jenis sampah details.");
      } finally {
        setLoading(false);
      }
    };

    fetchJenisSampah();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!jenisSampah) return <p>Jenis Sampah not found.</p>;

  return (
    <>
      <div className="container mx-auto mt-20 px-4 py-8">
        <Navbar />
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            {jenisSampah.title}
          </h2>
          <img
            src={`/images/jenis-sampah/${jenisSampah.image}`}
            alt={`Gambar ${jenisSampah.title}`}
            className="w-full h-64 justify-center object-cover rounded-lg mb-4"
          />
          <p className="text-gray-800 dark:text-gray-200 mb-4">
            {jenisSampah.description}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Created on:{" "}
            {new Date(jenisSampah.created_date).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Category: {jenisSampah.category}
          </p>
        </div>
      </div>
    </>
  );
};

export default JenisSampahDetail;
