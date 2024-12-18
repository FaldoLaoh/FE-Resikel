import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

const ArtikelDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/post_post/artikel/${id}`
        );
        setArticle(response.data);
      } catch (err) {
        console.error("Error fetching article:", err);
        setError("Failed to load the article.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!article) return <p>Article not found.</p>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            {article.title}
          </h2>
          <img
            src={`/images/artikel/${article.foto}`}
            alt={`Gambar ${article.title}`}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {article.description}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Created on: {new Date(article.created_date).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Created by: {article.creator_name}
          </p>
        </div>
      </div>
    </>
  );
};

export default ArtikelDetail;
