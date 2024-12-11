import React, { useState } from "react";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const Education = () => {
  const [activeTab, setActiveTab] = useState("artikel");

  const renderTabContent = () => {
    const contentClass = "transition-opacity duration-300 ease-in-out";

    switch (activeTab) {
      case "artikel":
        return (
          <div
            className={`${contentClass} opacity-100 grid grid-cols-1 gap-10`}
          >
            {/* Artikel 1 */}
            <div className="flex flex-col sm:flex-row bg-white shadow-lg border p-4 rounded-lg items-start transform transition duration-300 hover:shadow-xl">
              <div className="w-full sm:w-80 h-50 overflow-hidden rounded-md mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                <img
                  src="/images/edukasi/1.png"
                  alt="Artikel Image 1"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>
              <div className="flex flex-col text-left">
                <h2 className="font-bold text-lg">Kreasi Botol Plastik</h2>
                <p className="text-sm text-gray-500 mb-2">
                  Senin, 21 Oktober 2024
                </p>
                <p className="text-gray-700 mb-2">
                  Mengubah limbah botol plastik menjadi wadah multifungsi yang
                  dapat digunakan kembali. Temukan ide kreatif untuk memberikan
                  nilai tambah pada sampah plastik.
                </p>
                <a href="#" className="text-green-700 font-semibold mt-4">
                  Selengkapnya &gt;&gt;
                </a>
              </div>
            </div>

            {/* Artikel 2 */}
            <div className="flex flex-col sm:flex-row bg-white shadow-lg border p-4 rounded-lg items-start transform transition duration-300 hover:shadow-xl">
              <div className="w-full sm:w-80 h-50 overflow-hidden rounded-md mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                <img
                  src="/images/edukasi/2.png"
                  alt="Artikel Image 2"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>
              <div className="flex flex-col text-left">
                <h2 className="font-bold text-lg">Bank Sampah Kreatif</h2>
                <p className="text-sm text-gray-500 mb-2">
                  Senin, 21 Oktober 2024
                </p>
                <p className="text-gray-700 mb-2">
                  Mengenal sistem pengelolaan sampah terpadu melalui bank sampah
                  dan bagaimana cara mengoptimalkan nilai ekonomi dari barang
                  bekas.
                </p>
                <a href="#" className="text-green-700 font-semibold mt-4">
                  Selengkapnya &gt;&gt;
                </a>
              </div>
            </div>

            {/* Artikel 3 */}
            <div className="flex flex-col sm:flex-row bg-white shadow-lg border p-4 rounded-lg items-start transform transition duration-300 hover:shadow-xl">
              <div className="w-full sm:w-80 h-50 overflow-hidden rounded-md mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                <img
                  src="/images/edukasi/3.png"
                  alt="Artikel Image 3"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>
              <div className="flex flex-col text-left">
                <h2 className="font-bold text-lg">DIY Pot Tanaman Lucu</h2>
                <p className="text-sm text-gray-500 mb-2">
                  Senin, 21 Oktober 2024
                </p>
                <p className="text-gray-700 mb-2">
                  Panduan membuat pot tanaman unik dan menggemaskan dari sampah
                  plastik. Jadikan sampahmu sebagai media tanam yang menarik dan
                  ramah lingkungan.
                </p>
                <a href="#" className="text-green-700 font-semibold mt-4">
                  Selengkapnya &gt;&gt;
                </a>
              </div>
            </div>
          </div>
        );
      case "jenis sampah":
        return (
          <div className={`${contentClass} opacity-100 grid grid-cols-1 gap-6`}>
            {/* Artikel 1 */}
            <div className="flex flex-col sm:flex-row bg-white shadow-lg p-4 rounded-lg items-start transform transition duration-300 hover:shadow-xl">
              <div className="w-full sm:w-80 h-50 overflow-hidden rounded-md mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                <img
                  src="/images/edukasi/1.png"
                  alt="Artikel Image 1"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>
              <div className="flex flex-col text-left">
                <h2 className="font-bold text-lg">Artikel Jenis Sampah</h2>
                <p className="text-sm text-gray-500 mb-2">
                  Senin, 21 Oktober 2024
                </p>
                <p className="text-gray-700 mb-2">
                  Mengubah limbah botol plastik menjadi wadah multifungsi yang
                  dapat digunakan kembali. Temukan ide kreatif untuk memberikan
                  nilai tambah pada sampah plastik.
                </p>
                <a href="#" className="text-green-700 font-semibold mt-4">
                  Selengkapnya &gt;&gt;
                </a>
              </div>
            </div>

            {/* Artikel 2 */}
            <div className="flex flex-col sm:flex-row bg-white shadow-lg p-4 rounded-lg items-start transform transition duration-300 hover:shadow-xl">
              <div className="w-full sm:w-80 h-50 overflow-hidden rounded-md mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                <img
                  src="/images/edukasi/2.png"
                  alt="Artikel Image 2"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>
              <div className="flex flex-col text-left">
                <h2 className="font-bold text-lg">Bank Sampah Kreatif</h2>
                <p className="text-sm text-gray-500 mb-2">
                  Senin, 21 Oktober 2024
                </p>
                <p className="text-gray-700 mb-2">
                  Mengenal sistem pengelolaan sampah terpadu melalui bank sampah
                  dan bagaimana cara mengoptimalkan nilai ekonomi dari barang
                  bekas.
                </p>
                <a href="#" className="text-green-700 font-semibold mt-4">
                  Selengkapnya &gt;&gt;
                </a>
              </div>
            </div>

            {/* Artikel 3 */}
            <div className="flex flex-col sm:flex-row bg-white shadow-lg p-4 rounded-lg items-start transform transition duration-300 hover:shadow-xl">
              <div className="w-full sm:w-80 h-50 overflow-hidden rounded-md mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                <img
                  src="/images/edukasi/3.png"
                  alt="Artikel Image 3"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>
              <div className="flex flex-col text-left">
                <h2 className="font-bold text-lg">DIY Pot Tanaman Lucu</h2>
                <p className="text-sm text-gray-500 mb-2">
                  Senin, 21 Oktober 2024
                </p>
                <p className="text-gray-700 mb-2">
                  Panduan membuat pot tanaman unik dan menggemaskan dari sampah
                  plastik. Jadikan sampahmu sebagai media tanam yang menarik dan
                  ramah lingkungan.
                </p>
                <a href="#" className="text-green-700 font-semibold mt-4">
                  Selengkapnya &gt;&gt;
                </a>
              </div>
            </div>
          </div>
        );
      case "manfaat daur ulang":
        return (
          <div className={`${contentClass} opacity-100 grid grid-cols-1 gap-6`}>
            {/* Artikel 1 */}
            <div className="flex flex-col sm:flex-row bg-white shadow-lg p-4 rounded-lg items-start transform transition duration-300 hover:shadow-xl">
              <div className="w-full sm:w-80 h-50 overflow-hidden rounded-md mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                <img
                  src="/images/edukasi/1.png"
                  alt="Artikel Image 1"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>
              <div className="flex flex-col text-left">
                <h2 className="font-bold text-lg">
                  Artikel Manfaat Daur Ulang
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  Senin, 21 Oktober 2024
                </p>
                <p className="text-gray-700 mb-2">
                  Mengubah limbah botol plastik menjadi wadah multifungsi yang
                  dapat digunakan kembali. Temukan ide kreatif untuk memberikan
                  nilai tambah pada sampah plastik.
                </p>
                <a href="#" className="text-green-700 font-semibold mt-4">
                  Selengkapnya &gt;&gt;
                </a>
              </div>
            </div>

            {/* Artikel 2 */}
            <div className="flex flex-col sm:flex-row bg-white shadow-lg p-4 rounded-lg items-start transform transition duration-300 hover:shadow-xl">
              <div className="w-full sm:w-80 h-50 overflow-hidden rounded-md mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                <img
                  src="/images/edukasi/2.png"
                  alt="Artikel Image 2"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>
              <div className="flex flex-col text-left">
                <h2 className="font-bold text-lg">Bank Sampah Kreatif</h2>
                <p className="text-sm text-gray-500 mb-2">
                  Senin, 21 Oktober 2024
                </p>
                <p className="text-gray-700 mb-2">
                  Mengenal sistem pengelolaan sampah terpadu melalui bank sampah
                  dan bagaimana cara mengoptimalkan nilai ekonomi dari barang
                  bekas.
                </p>
                <a href="#" className="text-green-700 font-semibold mt-4">
                  Selengkapnya &gt;&gt;
                </a>
              </div>
            </div>

            {/* Artikel 3 */}
            <div className="flex flex-col sm:flex-row bg-white shadow-lg p-4 rounded-lg items-start transform transition duration-300 hover:shadow-xl">
              <div className="w-full sm:w-80 h-50 overflow-hidden rounded-md mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                <img
                  src="/images/edukasi/3.png"
                  alt="Artikel Image 3"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>
              <div className="flex flex-col text-left">
                <h2 className="font-bold text-lg">DIY Pot Tanaman Lucu</h2>
                <p className="text-sm text-gray-500 mb-2">
                  Senin, 21 Oktober 2024
                </p>
                <p className="text-gray-700 mb-2">
                  Panduan membuat pot tanaman unik dan menggemaskan dari sampah
                  plastik. Jadikan sampahmu sebagai media tanam yang menarik dan
                  ramah lingkungan.
                </p>
                <a href="#" className="text-green-700 font-semibold mt-4">
                  Selengkapnya &gt;&gt;
                </a>
              </div>
            </div>
          </div>
        );
      // Cases for "jenis sampah" and "manfaat daur ulang" can be updated similarly if needed
      default:
        return null;
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Banner */}
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

          {/* Search bar */}
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

      {/* Tabs Navigation */}
      <div className="mt-20 mb-32 container lg:px-32">
        {/* Tab Headers */}
        <div className="flex border-b-2 gap-x-8 border-green-700">
          {["Artikel", "Jenis Sampah", "Manfaat Daur Ulang"].map(
            (tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`font-nunito text-lg font-bold px-4 py-2 rounded-t-xl transition-all duration-300 ${
                  activeTab === tab.toLowerCase()
                    ? "border-b-2 border-green-700 bg-[#31A05C] text-white"
                    : "text-gray-600 hover:bg-green-50"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Tabs Content */}
        <div className=" bg-white rounded-b-lg shadow-md mt-16">
          {renderTabContent()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Education;
