import React from "react";
import backdropGuide from "/images/Guide/backdropGuide.png";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import elementGuide from "/images/Guide/elementGuide.png";
import bannerInvitation from "/images/AboutUs/bannerInvitation.png";
// import { FaGooglePlay } from "react-icons/fa";

function Guide() {
  return (
    <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      {/* Set the backdrop to be fixed and fill the screen */}
      <div>
        <main>
          <section>
            <img
              src={backdropGuide}
              alt="Backdrop Guide"
              className="w-full h-full object-cover"
            />
          </section>

          <section className="bg-gray-100 dark:bg-gray-800 py-16">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-[#007042] dark:text-white">
                Cara Mengunduh Aplikasi
              </h2>
              <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
              <div className="flex flex-col md:flex-row items-center justify-center">
                <ol className="text-left text-lg space-y-4 md:w-1/2 text-gray-800 dark:text-white">
                  <li>1. Download aplikasi RESIKEL di Google Play</li>
                  <li>
                    2. Lakukan Sign Up untuk membuat akun baru pada aplikasi
                    RESIKEL
                  </li>
                  <li>3. Masukkan kode OTP yang dikirim pada email Anda</li>
                  <li>
                    4. Anda akan diarahkan ke halaman utama dan siap menggunakan
                    aplikasi
                  </li>
                </ol>
                <div className="mt-8 md:mt-0 md:ml-8">
                  <img
                    src={elementGuide}
                    alt="RESIKEL app on phone"
                    className="w-64 mx-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          <section
            className="py-16 text-center relative"
            style={{
              backgroundImage: `url(${bannerInvitation})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container mx-auto text-center relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-emerald-600">
                Ayo, Bergabung Bersama Kami!
              </h2>
              <p className="text-emerald-600 text-xl mb-8">
                #GerakanBumiBersih
              </p>

              {/* Google Play Button */}
              <button className="bg-emerald-600 dark:bg-emerald-500 text-white dark:text-gray-900 hover:bg-white dark:hover:bg-gray-700 px-6 py-3 rounded-full flex items-center mx-auto">
                {/* <FaGooglePlay className="mr-2" /> */}
                <span className="text-white ">Google Play</span>
              </button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Guide;
