import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Banner from "@/components/partials/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Activities = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // State for current page
  const [totalPages, setTotalPages] = useState(1); // State for total pages

  // Async function to fetch posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5001/api/post_post/kegiatan?page=${page}&limit=4`
      );
      console.log("Full Response Object:", response);
      console.log("Response Data:", response.data);

      if (response.data && Array.isArray(response.data.posts)) {
        setPosts(response.data.posts);
        setTotalPages(response.data.totalPages); // Set total pages
      } else {
        setError("Expected an array but got something else.");
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("An error occurred while fetching posts.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch posts when the component mounts or page changes
  useEffect(() => {
    fetchPosts();
  }, [page]); // The useEffect hook will trigger when the page changes

  // Handle previous and next page buttons
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 dark:bg-gray-900 py-8">
        <div className="w-full max-w-screen-xl mx-auto mb-8 px-1">
          <img
            src="/images/kegiatan/4.jpg"
            alt="Gambar Kegiatan"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Deskripsi Kegiatan */}
        <div className="w-full max-w-screen-lg mx-auto text-center px-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 relative inline-block">
            Deskripsi Kegiatan
            <span className="block h-[2px] w-12 bg-green-500 mt-1 mx-auto"></span>
          </h2>
        </div>

        {/* Card Section */}
        <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {loading && <p>Loading posts...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && posts.length > 0 ? (
            posts.map((post) => {
              let imgSrc;

              // Debugging: Log the type of post.foto
              console.log("post.foto type:", typeof post.foto);
              console.log("post.foto:", post.foto);

              // Check if post.foto is a File or Blob object
              if (post.foto instanceof File || post.foto instanceof Blob) {
                imgSrc = URL.createObjectURL(post.foto);
              } else {
                // If it's a string (URL), use it directly
                imgSrc = `/images/kegiatan/${post.foto}`;
              }

              return (
                <div
                  key={post.id}
                  className="dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                  style={{
                    background: `#1a7f5d`,
                  }}
                >
                  <img
                    className="ml-28"
                    src="/images/article-alt.jpeg"
                    alt={`Gambar ${post.title}`}
                  />

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2 text-left">
                      {post.title}
                    </h3>
                    <p className="text-white mb-4 text-left">
                      {post.description.split(" ").slice(0, 10).join(" ")}
                      {post.description.split(" ").length > 10 ? "..." : ""}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <a
                        href={`/activity/${post.id}`}
                        className="text-white text-sm hover:underline"
                      >
                        Selengkapnya
                      </a>
                      <span className="text-white text-xs">
                        {new Date(post.created_date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No posts available.</p>
          )}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center mt-8">
          <Button
            onClick={handlePrevPage}
            disabled={page === 1}
            className="mr-4"
          >
            Previous
          </Button>
          <Button onClick={handleNextPage} disabled={page === totalPages}>
            Next
          </Button>
        </div>

        <Banner />
      </div>
      <Footer />
    </>
  );
};

export default Activities;
