import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer/Footer";
import profilePic from "/images/AboutUs/profilepic.png";
import backdropAboutUs from "/images/AboutUs/backdropAboutUs.png";

function AboutPage() {
  return (
    <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Navbar with z-index to make it stay on top */}
      <Navbar />

      {/* Image with backdrop */}
      <div className="relative w-full mt-0">
        <img
          src={backdropAboutUs}
          alt="Backdrop Image"
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-0 left-0 mt-16 w-full h-full flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Tentang Kami
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="Visi font-bold container mx-auto flex flex-col items-center text-center px-4 mt-10">
        <h2
          className="text-2xl md:text-3xl font-bold mb-4 underline dark:text-white"
          style={{ textDecorationColor: "#007042" }}
        >
          VISI
        </h2>
        <p className="text-lg md:text-xl text-[#007042] dark:text-white">
          Mewujudkan masyarakat cerdas lingkungan melalui edukasi pengelolaan
          sampah yang berkelanjutan
        </p>
      </div>

      {/* Misi Section */}
      <div className="Misi font-bold container mx-auto flex flex-col items-center text-left px-4 mt-10">
        <h2
          className="text-2xl md:text-3xl font-bold mb-4 underline dark:text-white"
          style={{ textDecorationColor: "#007042" }}
        >
          MISI
        </h2>
        <ul className="list-inside list-disc marker:text-black dark:marker:text-gray-300 space-y-2">
          <li className="text-[#007042] dark:text-white">
            Menyediakan edukasi berkualitas tentang pengelolaan sampah dan daur
            ulang
          </li>
          <li className="text-[#007042] dark:text-white">
            Membangun kesadaran dan mengubah perilaku masyarakat terhadap sampah
          </li>
          <li className="text-[#007042] dark:text-white">
            Memberikan solusi praktis untuk pengelolaan sampah sehari-hari
          </li>
          <li className="text-[#007042] dark:text-white">
            Mendorong kolaborasi untuk memperkuat dampak edukasi lingkungan
          </li>
        </ul>
      </div>

      {/* Data Section */}
      <div className="data-content container text-xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 mt-20 gap-20 md:gap-20">
        <div className="data-list-content text-center">
          <h1 className="text-4xl font-bold text-[#007042] dark:text-white">
            5000+
          </h1>
          <p className="dark:text-white">Pengguna</p>
        </div>
        <div className="data-list-content text-center">
          <h1 className="text-3xl font-bold text-[#007042] dark:text-white">
            2024
          </h1>
          <p className="dark:text-white">Didirikan</p>
        </div>
        <div className="data-list-content text-center">
          <h1 className="text-3xl font-bold text-[#007042] dark:text-white">
            600+
          </h1>
          <p className="dark:text-white">Kg Sampah Terkumpul</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-content container mx-auto flex flex-col items-center px-4">
        <h1 className="text-center text-2xl md:text-3xl mt-20 mb-8 text-[#007042] dark:text-white">
          Meet Our Team
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {[...Array(16)].map((_, index) => (
            <Card
              key={index}
              className="w-full max-w-xs p-4 flex flex-col items-center space-y-3 mx-auto dark:bg-gray-800 dark:text-white"
            >
              <img
                src={profilePic}
                alt={`Team Member ${index + 1}`}
                className="rounded-lg object-cover w-24 h-24 md:w-32 md:h-32"
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold text-[#007042] dark:text-white">
                  Name {index + 1}
                </h3>
                <p className="text-[#007042] dark:text-white">Jabatan</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutPage;
