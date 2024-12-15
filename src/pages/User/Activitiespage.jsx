import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { Banner } from "@/components/partials/Banner";
import Banner from "@/components/partials/Banner";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
const Activities = () => {
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
          {/* Card 1 */}
          <div
            className=" dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            style={{
              background: `#1a7f5d`,
            }}
          >
            <img
              src="/images/kegiatan/4.jpg"
              alt="Gambar Card 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2 text-left">
                Seminar Pengelolaan Sampah
              </h3>
              <p className="text-white mb-4 text-left">
                Menyelenggarakan sharing session bersama para ahli tentang
                pentingnya pengelolaan sampah yang tepat.
              </p>
              <div className="flex justify-between items-center mt-2">
                <a href="#" className="text-white text-sm hover:underline">
                  Selengkapnya
                </a>
                <span className="text-white text-xs">
                  Kamis, 18 November 2024
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            style={{
              background: `#1a7f5d`,
            }}
          >
            <img
              src="/images/kegiatan/5.png"
              alt="Gambar Card 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2 text-left">
                Aksi Bersih Lingkungan
              </h3>
              <p className="text-white mb-4 text-left">
                Bergabung dalam kegiatan bersih-bersih dalam menciptakan
                lingkungan yang lebih sehat.
              </p>
              <div className="flex justify-between items-center mt-2">
                <a href="#" className="text-white text-sm hover:underline">
                  Selengkapnya
                </a>
                <span className="text-white text-xs">
                  Kamis, 18 November 2024
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            style={{
              background: `#1a7f5d`,
            }}
          >
            <img
              src="/images/kegiatan/4.jpg"
              alt="Gambar Card 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2 text-left">
                Seminar Pengelolaan Sampah
              </h3>
              <p className="text-white mb-4 text-left">
                Menyelenggarakan sharing session bersama para ahli tentang
                pentingnya pengelolaan sampah yang tepat.
              </p>
              <div className="flex justify-between items-center mt-2">
                <a href="#" className="text-white text-sm hover:underline">
                  Selengkapnya
                </a>
                <span className="text-white text-xs">
                  Kamis, 18 November 2024
                </span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            style={{
              background: `#1a7f5d`,
            }}
          >
            <img
              src="/images/kegiatan/5.png"
              alt="Gambar Card 4"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2 text-left">
                Aksi Bersih Lingkungan
              </h3>
              <p className="text-white mb-4 text-left">
                Bergabung dalam kegiatan bersih-bersih dalam menciptakan
                lingkungan yang lebih sehat.
              </p>
              <div className="flex justify-between items-center mt-2">
                <a href="#" className="text-white text-sm hover:underline">
                  Selengkapnya
                </a>
                <span className="text-white text-xs">
                  Kamis, 18 November 2024
                </span>
              </div>
            </div>
          </div>
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
