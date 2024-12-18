import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const Education = () => {
  const [artikels, setArtikels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("artikel");

  useEffect(() => {
    const fetchArtikels = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:5001/api/post_post/artikel"
        ); // Replace with your actual endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch artikels.");
        }
        const data = await response.json();
        // Check if posts exist and are an array
        setArtikels(Array.isArray(data.posts) ? data.posts : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArtikels();
  }, []);

  const renderTabContent = () => {
    const contentClass = "transition-opacity duration-300 ease-in-out";

    switch (activeTab) {
      case "artikel":
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;

        return (
          <div
            className={`${contentClass} opacity-100 grid grid-cols-1 gap-10`}
          >
            {artikels.map((artikel, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row bg-white shadow-lg border p-4 rounded-lg items-start transform transition duration-300 hover:shadow-xl"
              >
                <div className="w-full sm:w-80 h-50 overflow-hidden rounded-md mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <img
                    src={artikel.imageUrl} // Replace with the actual property for the image URL
                    alt={artikel.title}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: "16/9" }}
                  />
                </div>
                <div className="flex flex-col text-left">
                  <h2 className="font-bold text-lg">{artikel.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {artikel.date}{" "}
                    {/* Replace with the actual property for the date */}
                  </p>
                  <p className="text-gray-700 mb-2">{artikel.description}</p>
                  <Link
                    to={`/education/artikel/${artikel.id}`} // Navigate to article detail page
                    className="text-green-700 font-semibold mt-4"
                  >
                    Selengkapnya &gt;&gt;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        );
      case "jenis sampah":
      case "manfaat daur ulang":
        return <p>Other tabs to be implemented...</p>;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="h-[600px] w-full bg-cover bg-left mt-16 relative"
        style={{
          backgroundImage:
            'linear-gradient(270.5deg, rgba(26, 127, 93, 0) -0.21%, rgba(26, 127, 93, 0.6) 99.69%), url("/images/edukasi/banneredukasi.jpg")',
        }}
      >
        <div className="container mx-auto px-4 py-20 lg:px-32 text-white">
          <div className="w-full lg:w-1/2">
            <h1 className="lg:text-5xl text-4xl font-nunito font-bold lg:mb-10 mb-6">
              Edukasi
            </h1>
            <p className="lg:text-2xl font-nunito text-lg leading-8 mb-12">
              Informasi lengkap seputar pengelolaan sampah dan daur ulang untuk
              menciptakan lingkungan yang lebih bersih dan sehat.
            </p>
          </div>

          <div className="flex items-center max-w-3xl bg-white rounded-full overflow-hidden shadow-md mx-auto">
            <input
              type="text"
              placeholder="Telusuri"
              className="w-full py-3 px-5 text-gray-700 outline-none text-base placeholder-gray-500"
            />
            <button className="bg-green-700 px-5 py-3 text-white font-medium hover:bg-green-800 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-32 container lg:px-32">
        <div className="flex border-b-2 gap-x-8 border-green-700">
          {["Artikel", "Jenis Sampah", "Manfaat Daur Ulang"].map(
            (tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`font-nunito text-lg ${
                  activeTab === tab.toLowerCase()
                    ? "text-green-700 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>
        <div className="mt-8">{renderTabContent()}</div>
      </div>
      <Footer />
    </>
  );
};

export default Education;
