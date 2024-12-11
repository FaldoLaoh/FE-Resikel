import React from "react";
import {
  Card,
  //   CardHeader,
  //   CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import { ArrowRight, Pin } from "lucide-react";

import GooglePlayButton from "@/components/Partials/GooglePlayButton";
import Banner from "@/components/Partials/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const HomePage = () => {
  const items = [
    {
      title: "Tips & Trick Pengelolaan Sampah",
      description: "Edukasi",
      imageUrl: "/images/slider/1.jpeg",
    },
    {
      title: "Cara Setor Sampah Anda!",
      description: "Edukasi",
      imageUrl: "/images/slider/2.jpeg",
    },
    {
      title: "Sistem Tukar Poin & Reward",
      description: "Edukasi",
      imageUrl: "/images/slider/3.jpeg",
    },
    {
      title: "Mengelola Sampah Plastik",
      description: "Edukasi",
      imageUrl: "/images/slider/4.jpg",
    },
    {
      title: "Daur Ulang Sampah Organik",
      description: "Edukasi",
      imageUrl: "/images/slider/5.jpg",
    },
  ];

  const articles = [
    {
      title: "Apa Itu 3R dan Dampaknya Bagi Lingkungan",
      date: "12 Desember 2022",
      imageUrl: "/images/artikel.jpeg", // Tambahkan URL gambar untuk setiap artikel
    },
    {
      title: "Tips Mengolah Sampah Plastik",
      date: "17 Agustus 2023",
      imageUrl: "/images/artikel.jpeg", // Gambar kedua
    },
    {
      title: "Cara Menukar Poin & Reward",
      date: "12 Maret 2024",
      imageUrl: "/images/artikel.jpeg", // Gambar ketiga
    },
  ];

  const kegiatan = [
    {
      id: 1,
      title: "Bersih - Bersih Kota Batam 2024",
      date: "01 Jan 2024",
      location: "Kota Batam",
      image: "/images/kegiatan/1.jpeg",
    },
    {
      id: 2,
      title: "Workshop Manfaat Bumi",
      date: "01 Mei 2024",
      location: "Kota Batam",
      image: "/images/kegiatan/2.jpeg",
    },
    {
      id: 3,
      title: "Workshop Pengolahan Sampah",
      date: "01 Juni 2024",
      location: "Kota Batam",
      image: "/images/kegiatan/3.jpeg",
    },
  ];
  return (
    <>
      {/* Hero section start */}
      <Navbar />
      <section
        style={{
          backgroundImage:
            ' linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(26, 127, 93, 0.1) 100%),url("/images/Section Header.png")',
        }}
        className="bg-cover bg-center bg-white dark:bg-gray-900 h-screen w-full pt-40 lg:pt-36 "
      >
        <div className="container text-start lg:ps-32">
          <div className="w-2/3 lg:w-1/2 mb-6 lg:mb-8">
            <h1 className="select-none text-4xl lg:text-6xl font-extrabold text-white dark:text-white font-nunito text-start leading-normal lg:leading-relaxed tracking-normal">
              <span className=" block">Ciptakan Gaya</span> Hidup Sehat melalui
              Pemilihan Sampah
            </h1>
          </div>

          <GooglePlayButton bgColor="bg-[#EEF4F2]" textColor="text-[#007042]" />
        </div>
      </section>

      {/* Hero section end */}

      {/* Jenis Sampah */}
      <section className="relative min-h-screen">
        <Card
          className={
            "bg-[#F6FFF6] dark:bg-gray-800 w-4/5 lg:w-2/3 mx-auto px-7 lg:px-24 py-9 lg:py-12 mb-8 rounded-xl shadow-xl transition-all duration-300 absolute -top-44 lg:-top-16  left-1/2 -translate-x-1/2"
          }
        >
          <CardTitle
            className={
              "uppercase font-nunito text-3xl lg:text-[40px] font-extrabold  mb-4 lg:mb-8 text-center"
            }
          >
            Kami adalah Resikel!
          </CardTitle>
          <CardDescription
            className={
              "text-lg lg:text-xl font-medium lg:mb-4 font-nunito text-center text-black dark:text-[#31A05C]"
            }
          >
            Mari berperan aktif menjaga kebersihan Batam! Kumpulkan dan serahkan
            sampah daur ulangmu ke mitra kami untuk menciptakan kota yang lebih
            bersih
          </CardDescription>
        </Card>

        <div className="container pt-52 sm:pt-32 lg:pt-80 lg:px-32 ">
          <h1 className="font-nunito text-4xl lg:text-5xl font-bold text-start">
            Jenis Sampah
          </h1>
          <div className="grid grid-cols-1 *:my-8 *:mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:pt-14 lg:gap-x-14 lg:gap-y-16 ">
            <a
              href="#"
              className="group relative w-[258px] h-[194px] text-white flex items-center justify-center text-lg font-bold rounded-md overflow-hidden"
              style={{
                backgroundImage: 'url("/images/kertas.jpeg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1A7F5D] opacity-40 group-hover:opacity-25 transition-all duration-300"></div>

              {/* Text */}
              <span className="relative z-10 font-nunito text-[29px] font-bold">
                Kertas
              </span>
            </a>
            <a
              href="#"
              className="group relative w-[258px] h-[194px] text-white flex items-center justify-center text-lg font-bold rounded-md overflow-hidden"
              style={{
                backgroundImage: 'url("/images/plastik.jpeg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1A7F5D] opacity-40  group-hover:opacity-25 transition-all duration-300"></div>

              {/* Text */}
              <span className="relative z-10 font-nunito text-[29px] font-bold">
                Plastik
              </span>
            </a>
            <a
              href="#"
              className="group relative w-[258px] h-[194px] text-white flex items-center justify-center text-lg font-bold rounded-md overflow-hidden"
              style={{
                backgroundImage: 'url("/images/aluminium.jpeg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1A7F5D] opacity-40 group-hover:opacity-25 transition-all duration-300"></div>

              {/* Text */}
              <span className="relative z-10 font-nunito text-[29px] font-bold">
                Aluminium
              </span>
            </a>
            <a
              href="#"
              className="group relative w-[258px] h-[194px] text-white flex items-center justify-center text-lg font-bold rounded-md overflow-hidden"
              style={{
                backgroundImage: 'url("/images/besi.jpeg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1A7F5D] opacity-40 group-hover:opacity-25 transition-all duration-300"></div>

              {/* Text */}
              <span className="relative z-10 font-nunito text-[29px] font-bold">
                Besi & Logam
              </span>
            </a>
            <a
              href="#"
              className="group relative w-[258px] h-[194px] text-white flex items-center justify-center text-lg font-bold rounded-md overflow-hidden"
              style={{
                backgroundImage: 'url("/images/elektronik.jpeg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1A7F5D] opacity-40 group-hover:opacity-25 transition-all duration-300"></div>

              {/* Text */}
              <span className="relative z-10 font-nunito text-[29px] font-bold">
                Elektronik
              </span>
            </a>
            <a
              href="#"
              className="group relative w-[258px] h-[194px] text-white flex items-center justify-center text-lg font-bold rounded-md overflow-hidden"
              style={{
                backgroundImage: 'url("/images/kaca.jpeg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1A7F5D] opacity-40 group-hover:opacity-25 transition-all duration-300"></div>

              {/* Text */}
              <span className="relative z-10 font-nunito text-[29px] font-bold">
                Botol Kaca
              </span>
            </a>
            <a
              href="#"
              className="group relative w-[258px] h-[194px] text-white flex items-center justify-center text-lg font-bold rounded-md overflow-hidden"
              style={{
                backgroundImage: 'url("/images/tekstil.jpeg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1A7F5D] opacity-40 group-hover:opacity-25 transition-all duration-300"></div>

              {/* Text */}
              <span className="relative z-10 font-nunito text-[29px] font-bold">
                Merek
              </span>
            </a>
            <a
              href="#"
              className="group relative w-[258px] h-[194px] text-white flex items-center justify-center text-lg font-bold rounded-md overflow-hidden"
              style={{
                backgroundImage: 'url("/images/khusus.jpeg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1A7F5D] opacity-40 group-hover:opacity-25 transition-all duration-300"></div>

              {/* Text */}
              <span className="relative z-10 font-nunito text-[29px] font-bold">
                Khusus
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Slider */}
      <div className="container pt-24 lg:pt-32 lg:px-32">
        <div className="w-2/3 sm:w-full">
          <h1 className="font-nunito text-3xl md:text-4xl lg:text-5xl font-bold text-start mb-4 ">
            Solusi Kami
          </h1>
          <p className="font-nunito font-normal text-2xl lg:text-3xl text-start text-[#616161] dark:text-white">
            Sebuah teknologi untuk mengakhiri sampah
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full relative pt-8 lg:pt-14 "
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <a href="#">
                  <Card className="border-2 rounded-xl shadow-lg dark:border-gray-700 dark:bg-[#012E1A]">
                    <CardContent className="flex flex-col gap-4 p-4">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="w-full h-[200px] object-cover rounded-lg"
                      />
                      <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                          <p className="text-lg font-semibold text-green-600">
                            {item.description}
                          </p>
                          <a
                            href="#"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ArrowRight className="h-6 w-6 rotate-[-45deg]" />
                          </a>
                        </div>
                        <h3 className="font-medium lg:w-2/3 text-2xl leading-10 text-start">
                          {item.title}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-0 top-[-4rem] flex gap-3">
            <CarouselPrevious className="relative inset-0 w-[48px] h-[48px] rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-150" />
            <CarouselNext className="relative inset-0 w-[48px] h-[48px] rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-150" />
          </div>
        </Carousel>
      </div>

      {/* Artikel Section */}
      <div className="container pt-24 lg:px-32">
        <h1 className="font-nunito text-4xl lg:text-5xl font-bold text-start mb-8">
          Artikel Terkini
        </h1>

        <div className="grid grid-cols-1 gap-20 ">
          {/* Looping melalui artikel */}
          {articles.map((article, index) => (
            <div
              key={index}
              className="w-full h-[401px] bg-cover bg-center cursor-pointer flex flex-col justify-center items-center relative rounded-xl"
              style={{
                backgroundImage: `linear-gradient(269.95deg, rgba(246, 255, 246, 0.6) 0.06%, rgba(246, 255, 246, 0.6) 25.07%, rgba(52, 110, 52, 0.145) 70.72%, rgba(52, 110, 52, 0.29) 99.95%), url(${article.imageUrl})`,
              }}
            >
              <a
                href="#"
                className="font-nunito font-bold text-3xl lg:text-4xl text-black z-10 relative flex items-center"
              >
                <span className="relative px-4 text-center">
                  {article.title}
                </span>

                <div className="absolute inset-x-0 -bottom-10 flex items-center text-[#616161] ">
                  <span className="flex-grow h-[1px] bg-[#616161] mr-8"></span>
                  <span className="font-nunito font-semibold text-base">
                    {article.date}
                  </span>
                  <span className="flex-grow h-[1px] bg-[#616161] ml-8"></span>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="flex py-6 lg:py-10 justify-end">
          <a
            href="#"
            className="flex gap-2 py-3 px-4 lg:px-5 bg-[#007042] text-white rounded-xl hover:bg-[#185242] transition-all duration-300"
          >
            <span className="font-nunito font-medium text-base">
              Lihat Lainnya
            </span>
            <ArrowRight width={24} height={24} />
          </a>
        </div>
      </div>

      {/* Kegiatan Section */}
      <div className="container lg:pt-10 lg:px-32">
        <h1 className="font-nunito text-3xl md:text-4xl lg:text-5xl font-bold text-start mb-16">
          Kegiatan
        </h1>
        <div className="grid grid-cols-1 gap-10 md:gap-4 lg:gap-6 lg:grid-cols-3">
          {kegiatan.map((item) => (
            <div
              key={item.id}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <a href="#" className="group">
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-25 group-hover:opacity-10 transition-all duration-300"></div>
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <h1 className="font-semibold text-lg text-start py-4">
                    {item.title}
                  </h1>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm ">
                      <span className="mr-2 ">
                        <Pin className="fill-white rotate-45 relative -top-1 scale-75" />
                      </span>
                      <span>{item.date}</span>
                    </div>
                    <p>{item.location}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="flex py-6 lg:py-10 justify-center">
          <a
            href="#"
            className="flex gap-2 py-3 px-4 lg:px-5 bg-[#007042] text-white rounded-xl hover:bg-[#185242] transition-all duration-300"
          >
            <span className="font-nunito font-medium text-base">
              Lihat Lainnya
            </span>
            <ArrowRight width={24} height={24} />
          </a>
        </div>
      </div>

      <Banner />
      <Footer />
    </>
  );
};

export default HomePage;
