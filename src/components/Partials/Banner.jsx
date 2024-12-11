import React from "react";
import GooglePlayButton from "@/components/partials/GooglePlayButton";

function Banner() {
  return (
    <section
      style={{
        backgroundImage: ' url("/images/banner.jpeg")',
      }}
      className="bg-[#F6FFF6] my-36 bg-cover bg-bottom relative"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-40 dark:opacity-10 dark:bg-black z-0"></div>

      {/* Content */}
      <div className="container py-20 lg:py-32 lg:px-24 flex flex-col gap-2 lg:gap-8 justify-center items-center relative z-10">
        <h1 className="font-nunito text-center text-5xl lg:text-5xl font-bold text-[#1A7F5D] mb-8">
          Ayo, Bergabung Bersama Kami!
        </h1>
        <h1 className="font-nunito text-2xl lg:text-3xl font-bold text-[#1A7F5D] mb-8">
          #GerakanBumiBersih
        </h1>
        <GooglePlayButton />
      </div>
    </section>
  );
}

export default Banner;
