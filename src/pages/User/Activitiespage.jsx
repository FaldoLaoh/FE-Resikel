import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom"; // Import Link for navigation
import Banner from "@/components/partials/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Activities = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/post_post/kegiatan"
      );
      console.log("Full Response Object:", response);
      console.log("Response Data:", response.data);

      if (response.data && Array.isArray(response.data)) {
        setPosts(response.data);
      } else {
        setError("Expected an array but got something else.");
        console.log("Response data is not an array:", response.data);
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("An error occurred while fetching posts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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
            posts.slice(0, 4).map((post) => {
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
                  <Link to={`/activity/${post.id}`}>
                    <img
                      className="ml-28"
                      src="/article-alt.jpeg"
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
                          href="#"
                          className="text-white text-sm hover:underline"
                        >
                          Selengkapnya
                        </a>
                        <span className="text-white text-xs">
                          {new Date(post.created_date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <p>No posts available.</p>
          )}
        </div>

        {/* Kolom Daftar Sekarang dan Form */}
        <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mt-8">
          {/* Kolom 1: Label */}
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Daftar Sekarang!
            </h2>
          </div>

          {/* Kolom 2: Form dalam Card */}
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-full max-w-xs">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 relative inline-block">
                Hubungi Kami
                <span className="block h-[2px] w-30 bg-green-500 mt-1 mx-auto"></span>
              </h3>
              <form>
                <div className="mb-4">
                  <Input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="border border-gray-300 dark:border-gray-600 rounded-md shadow-sm w-full p-2 focus:outline-none focus:ring focus:ring-green-500"
                  />
                </div>
                <div className="mb-4">
                  <Input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="border border-gray-300 dark:border-gray-600 rounded-md shadow-sm w-full p-2 focus:outline-none focus:ring focus:ring-green-500"
                  />
                </div>
                <div className="mb-4">
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    className="border border-gray-300 dark:border-gray-600 rounded-md shadow-sm w-full p-2 focus:outline-none focus:ring focus:ring-green-500"
                    rows="4"
                  ></Textarea>
                </div>
                <Button type="submit" className="">
                  Kirim
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Subjudul Galeri */}
        <div className="w-full max-w-screen-lg mx-auto text-center px-4 mt-8 mb-7">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 relative inline-block">
            Galeri Dokumentasi
            <span className="block h-[2px] w-30 bg-green-500 mt-1 mx-auto"></span>
          </h2>
        </div>

        {/* Galeri Foto */}
        <div className="w-full max-w-screen-lg mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 px-4 mb-10">
          <img
            src="/images/galeri/1.jpg"
            alt="Gambar Galeri 1"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="/images/galeri/2.jpg"
            alt="Gambar Galeri 2"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="/images/galeri/3.jpg"
            alt="Gambar Galeri 3"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="/images/galeri/4.jpg"
            alt="Gambar Galeri 1"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="/images/galeri/5.jpg"
            alt="Gambar Galeri 2"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="/images/galeri/5.jpg"
            alt="Gambar Galeri 3"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        <Banner />
      </div>
      <Footer />
    </>
  );
};

export default Activities;
