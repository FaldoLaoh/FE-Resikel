import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const Education = () => {
  const [artikels, setArtikels] = useState([]);
  const [jenisSampah, setJenisSampah] = useState([]);
  const [manfaatDaurUlang, setManfaatDaurUlang] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("artikel");

  const truncateDescription = (text, wordLimit = 15) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const endpoint =
          activeTab === "artikel"
            ? "http://localhost:5001/api/post_post/artikel"
            : activeTab === "jenis sampah"
            ? "http://localhost:5001/api/jenis_sampah"
            : activeTab === "manfaat daur ulang"
            ? "http://localhost:5001/api/post_post/manfaat?category_id=4"
            : null;

        if (!endpoint) return;

        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const data = await response.json();
        console.log(data); // Check what is returned

        // Update state based on the active tab
        if (activeTab === "artikel") {
          setArtikels(Array.isArray(data.posts) ? data.posts : []);
        } else if (activeTab === "jenis sampah") {
          setJenisSampah(Array.isArray(data.posts) ? data.posts : []);
        } else if (activeTab === "manfaat daur ulang") {
          setManfaatDaurUlang(Array.isArray(data.posts) ? data.posts : []);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

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
                    src={artikel.imageUrl}
                    alt={artikel.title}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: "16/9" }}
                  />
                </div>
                <div className="flex flex-col text-left">
                  <h2 className="font-bold text-lg">{artikel.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">{artikel.date}</p>
                  <p className="text-gray-700 mb-2">
                    {truncateDescription(artikel.description, 15)}
                  </p>
                  <Link
                    to={`/education/artikel/${artikel.id}`}
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
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;

        return (
          <div
            className={`${contentClass} opacity-100 grid grid-cols-1 gap-10`}
          >
            {jenisSampah.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row bg-white shadow-lg border p-4 rounded-lg items-start transform transition duration-300 hover:shadow-xl"
              >
                <div className="w-full sm:w-80 h-50 overflow-hidden rounded-md mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: "16/9" }}
                  />
                </div>
                <div className="flex flex-col text-left">
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {item.created_date}
                  </p>
                  <p className="text-gray-700 mb-2">
                    {truncateDescription(item.description, 15)}
                  </p>
                  <Link
                    to={`/education/jenis-sampah/${item.id}`}
                    className="text-green-700 font-semibold mt-4"
                  >
                    Selengkapnya &gt;&gt;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        );
      case "manfaat daur ulang":
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;

        console.log(manfaatDaurUlang); // Debug output to see the structure of data

        return (
          <div
            className={`${contentClass} opacity-100 grid grid-cols-1 gap-10`}
          >
            {manfaatDaurUlang.map((manfaat, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row bg-white shadow-lg border p-4 rounded-lg items-start transform transition duration-300 hover:shadow-xl"
              >
                <div className="w-full sm:w-80 h-50 overflow-hidden rounded-md mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <img
                    src={`http://localhost:5001/uploads/${manfaat.foto}`}
                    alt={manfaat.title}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: "16/9" }}
                  />
                </div>
                <div className="flex flex-col text-left">
                  <h2 className="font-bold text-lg">{manfaat.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(manfaat.created_date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 mb-2">
                    {truncateDescription(manfaat.description, 15)}
                  </p>
                  <Link
                    to={`/education/manfaat/${manfaat.id}`}
                    className="text-green-700 font-semibold mt-4"
                  >
                    Selengkapnya &gt;&gt;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        );

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
        <div>{renderTabContent()}</div>
      </div>
      <Footer />
    </>
  );
};

export default Education;
