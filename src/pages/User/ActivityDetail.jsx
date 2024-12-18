import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

const ActivityDetail = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/post_post/kegiatan/${id}`
        );
        setPost(response.data);
      } catch (err) {
        setError("Error fetching post details.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <>
      <div className="container mx-auto mt-20 px-4 py-8">
        <Navbar />
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            {post.title}
          </h2>
          <img
            src={`/images/kegiatan/${post.foto}`}
            alt={`Gambar ${post.title}`}
            className="w-full h-64 justify-center object-cover rounded-lg mb-4"
          />
          <p className="text-gray-800 dark:text-gray-200 mb-4">
            {post.description}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Created on: {new Date(post.created_date).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Created by: {post.creator_name}
          </p>
        </div>
      </div>
    </>
  );
};

export default ActivityDetail;
