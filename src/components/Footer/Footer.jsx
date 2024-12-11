import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div
        className="Footer-body h-62 bg-gradient-to-r mt-10 text-white py-3 w-full"
        style={{ background: "linear-gradient(to right, #276561, #007042)" }}
      >
        {/* Full-width container */}
        <div className="Footer-container w-full">
          <h1 className="font-bold text-3xl mx-5 my-5">RESIKEL</h1>
          <div className="Footer-content flex flex-row justify-center align-center gap-20">
            <div className="column-profil text-xs">
              <p className="font-bold mb-3">Profil</p>
              <p>Tentang Kami</p>
              <p>Visi & Misi</p>
            </div>

            <div className="column-layanan text-xs">
              <p className="font-bold mb-3">Layanan</p>
              <p>Setor Sampah</p>
              <p>Artikel dan Edukasi</p>
              <p>Workshop</p>
            </div>

            <div className="column-Hubungi text-xs">
              <p className="font-bold mb-3">Hubungi Kami</p>
              <p>
                <a href="">resikelbatam@gmail.com</a>
              </p>
              <p>0088-6677-22</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="border-t border-gray-400 w-2/3 mx-auto my-6 mb-6"></div>
          <div className="footer-footer flex flex-row justify-center gap-x-40 mb-10">
            <div className="content1 flex justify-center gap-10">
              <p className="text-xs text-center font-bold">Terms</p>
              <p className="text-xs text-center font-bold">Privacy</p>
              <p className="text-xs text-center font-bold">Cookies</p>
            </div>

            <div className="content2 flex flex-row justify-center gap-10">
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl text-white hover:text-gray-300" />
              </a>

              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-xl text-white hover:text-gray-300" />
              </a>

              {/* Twitter Icon */}
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-xl text-white hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
