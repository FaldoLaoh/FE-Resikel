import React from "react";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
function PartnersPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="container lg:px-32">
          <div className="flex flex-wrap items-start justify-between">
            <div className="w-full md:w-3/5 flex flex-col justify-center pt-10 lg:pt-0 gap-6 sm:gap-8 xl:gap-16 md:px-4 lg:mt-36">
              <h1 className="font-nunito text-5xl lg:text-6xl font-bold text-start">
                Mitra
              </h1>
              <h2 className="font-nunito text-2xl sm:text-3xl font-medium text-start dark:text-[#31A05C] text-gray-700/80 leading-10 max-w-2xl">
                Bergabung bersama kami dalam mewujudkan Batam yang lebih bersih
                melalui pengelolaan sampah yang berkelanjutan
              </h2>
            </div>

            <div className="w-full md:w-2/5 flex justify-center pt-10 md:pt-0">
              <img
                src="/images/mitra/3.png"
                alt="mitra"
                className="w-full max-w-xs sm:max-w-md md:max-w-full scale-90 sm:scale-100 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container lg:px-32 pt-20 py-20">
        <h1 className="font-nunito text-4xl md:text-5xl font-semibold mb-6 text-start">
          Mitra Terdaftar
        </h1>
        <div className="flex flex-wrap md:flex-nowrap gap-4 xl:gap-10 text-start">
          <div className="w-full md:w-1/2 flex flex-col lg:gap-2 xl:pt-20">
            <h2 className="font-nunito text-3xl sm:text-4xl font-semibold mb-6">
              Pejantara
            </h2>
            <p className="font-nunito font-normal text-xl xl:text-2xl text-gray-700/80 leading-8">
              "Pejantara merupakan komunitas pengelola sampah yang berkomitmen
              dalam mendukung program daur ulang di Batam. Dengan pengalaman
              lebih dari 5 tahun, Pejantara telah berhasil mengelola ribuan ton
              sampah dan memberdayakan masyarakat sekitar melalui program bank
              sampah."
            </p>
          </div>

          <div className="w-full md:w-1/2 flex items-center">
            <img
              src="/images/mitra/2.jpeg"
              alt="pejantara"
              className="w-full h-5/6 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="pt-10 py-24 bg-gray-100">
        <div className="container xl:px-32">
          <div className="bg-white dark:bg-gray-800 py-4 md:py-20 px-12 rounded-lg shadow-lg max-w-4xl xl:max-w-none mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-8">
              <div className="text-start py-10">
                <h3 className="font-nunito text-3xl  md:text-4xl font-semibold mb-4 sm:mb-6 md:mb-8 mt-4">
                  Tertarik Untuk Bergabung?
                </h3>
                <h4 className="font-nunito text-3xl  md:text-4xl font-semibold mb-4 sm:mb-6 md:mb-8">
                  Ayo daftar sekarang!
                </h4>
                <p className="text-gray-700 font-nunito font-normal text-lg sm:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  vitae justo sollicitudin, convallis libero ac, tempus leo.
                  Duis pulvinar justo sed massa egestas aliquam.
                </p>
              </div>

              <div className="mx-auto max-w-sm lg:max-w-none lg:px-4 pb-10">
                <h3 className="font-nunito text-2xl sm:text-3xl md:text-4xl font-normal mb-6 sm:mb-8 md:mb-12 text-center">
                  Form Pendaftaran Mitra
                </h3>
                <form className="space-y-12">
                  <div className="space-y-6">
                    <input
                      type="text"
                      placeholder="Nama"
                      className="w-full p-3 px-5 border border-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 px-5 border border-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      type="tel"
                      placeholder="Nomor Telepon"
                      className="w-full p-3 px-5 border border-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors mt-10"
                  >
                    DAFTAR
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PartnersPage;
