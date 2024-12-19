import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import "@iconscout/unicons/css/line.css";
// import Navbar from "@/components/Navbar/Navbar_Admin";

const PetaPage = () => {
  const [tb_jenis_sampah, settb_jenis_sampah] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    nama: "",
    kode: "",
    keterangan: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const [totalJenisSampah, setTotalJenisSampah] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/tb_jenis_sampah/count")
      .then((response) => {
        setTotalJenisSampah(response.data.total);
      })
      .catch((error) => {
        console.error("Error fetching total count:", error);
      });
  }, []);

  // Fetch data (READ)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tb_jenis_sampah");
      settb_jenis_sampah(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Tambah Data (CREATE)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        // Update data
        await axios.put(
          "http://localhost:5000/tb_jenis_sampah/${formData.id}",
          formData
        );
      } else {
        // Tambah data
        await axios.post("http://localhost:5000/tb_jenis_sampah", formData);
      }
      fetchData();
      resetForm();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  // Edit Data (SETUP)
  const handleEdit = (item) => {
    setIsEditMode(true);
    setFormData({
      id: item.id,
      nama: item.nama,
      kode: item.kode,
      keterangan: item.keterangan,
    });
  };

  // Hapus Data (DELETE)
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:5000/tb_jenis_sampah/${id}");
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  // Reset Form
  const resetForm = () => {
    setIsEditMode(false);
    setFormData({ id: null, nama: "", kode: "", keterangan: "" });
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="mt-20 ml-64">
        <div className="w-full mx-auto px-4 mt-13">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 col-span-6">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <input
                  type="text"
                  placeholder="Search .."
                  className="p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="text-grey p-2 rounded-r-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35M17 10a7 7 0 1 0-7 7 7 7 0 0 0 7-7z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-end mb-2">
              <Button
                onClick={toggleModal}
                className="bg-emerald-600 text-white hover:bg-emerald-700 text-sm rounded-md shadow-md"
              >
                Tambah
              </Button>
            </div>
            <div className="w-full flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.96469020191!2d104.09941757348993!3d1.1852328620859458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da2900514d61f3%3A0xc5c787a8b72c6356!2sInfinite%20Learning%20Indonesia!5e0!3m2!1sid!2sid!4v1734443589552!5m2!1sid!2sid"
                width="100%"
                height="800"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg mt-8">
              <table className="min-w-full table-auto">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      No
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Foto
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Nama Pelapor
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Tanggal Pelaporan
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Lokasi
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Detail
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">1</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      <div className="w-20 h-20 bg-gray-300 flex items-center justify-center">
                        <img
                          src="/images/web/satuan_ukuran/buku.png"
                          alt="Artikel Image 2"
                          className="w-full h-full object-cover"
                          style={{ aspectRatio: "16/9" }}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      MiloEnakK
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      24 October 2024
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Jalan Telekomunikasi No.1 RT.005 / RW.10
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      It has been 10 days since the rubbish has been piled up
                      without any........
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      <Button className="bg-[#FFA629] text-white">
                        Detail
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">1</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      <div className="w-20 h-20 bg-gray-300 flex items-center justify-center">
                        <img
                          src="/images/web/satuan_ukuran/buku.png"
                          alt="Artikel Image 2"
                          className="w-full h-full object-cover"
                          style={{ aspectRatio: "16/9" }}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      MiloEnakK
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      24 October 2024
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Jalan Telekomunikasi No.1 RT.005 / RW.10
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      It has been 10 days since the rubbish has been piled up
                      without any........
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      <Button className="bg-[#FFA629] text-white">
                        Detail
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">1</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      <div className="w-20 h-20 bg-gray-300 flex items-center justify-center">
                        <img
                          src="/images/web/satuan_ukuran/buku.png"
                          alt="Artikel Image 2"
                          className="w-full h-full object-cover"
                          style={{ aspectRatio: "16/9" }}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      MiloEnakK
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      24 October 2024
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Jalan Telekomunikasi No.1 RT.005 / RW.10
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      It has been 10 days since the rubbish has been piled up
                      without any........
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      <Button className="bg-[#FFA629] text-white">
                        Detail
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">1</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      <div className="w-20 h-20 bg-gray-300 flex items-center justify-center">
                        <img
                          src="/images/web/satuan_ukuran/buku.png"
                          alt="Artikel Image 2"
                          className="w-full h-full object-cover"
                          style={{ aspectRatio: "16/9" }}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      MiloEnakK
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      24 October 2024
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Jalan Telekomunikasi No.1 RT.005 / RW.10
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      It has been 10 days since the rubbish has been piled up
                      without any........
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      <Button className="bg-[#FFA629] text-white">
                        Detail
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">1</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      <div className="w-20 h-20 bg-gray-300 flex items-center justify-center">
                        <img
                          src="/images/web/satuan_ukuran/buku.png"
                          alt="Artikel Image 2"
                          className="w-full h-full object-cover"
                          style={{ aspectRatio: "16/9" }}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      MiloEnakK
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      24 October 2024
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Jalan Telekomunikasi No.1 RT.005 / RW.10
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      It has been 10 days since the rubbish has been piled up
                      without any........
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      <Button className="bg-[#FFA629] text-white">
                        Detail
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-4">
              <nav className="flex items-center space-x-2">
                <button className="text-green-500 hover:bg-green-100 px-4 py-2 rounded-md focus:outline-none">
                  Prev
                </button>
                <button className="text-green-500 hover:bg-green-100 px-4 py-2 rounded-md focus:outline-none">
                  1
                </button>
                <button className="text-green-500 hover:bg-green-100 px-4 py-2 rounded-md focus:outline-none">
                  2
                </button>
                <button className="text-green-500 hover:bg-green-100 px-4 py-2 rounded-md focus:outline-none">
                  3
                </button>
                <button className="text-green-500 hover:bg-green-100 px-4 py-2 rounded-md focus:outline-none">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Overlay Card */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              toggleModal();
            }
          }}
        >
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">
              {editData ? "Edit Data UOM" : "Tambah Data UOM"}
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Nama UOM
                </label>
                <input
                  type="text"
                  name="nama_uom"
                  value={editData ? editData.nama_uom : newData.nama_uom}
                  onChange={editData ? handleEditChange : handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Masukkan Nama UOM"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Satuan</label>
                <input
                  type="text"
                  name="satuan"
                  value={editData ? editData.satuan : newData.satuan}
                  onChange={editData ? handleEditChange : handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Masukkan Satuan"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Faktor Konversi
                </label>
                <input
                  type="number"
                  name="faktor_konversi"
                  value={
                    editData
                      ? editData.faktor_konversi
                      : newData.faktor_konversi
                  }
                  onChange={editData ? handleEditChange : handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Masukkan Faktor Konversi"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  onClick={toggleModal}
                  className="bg-gray-400 text-white hover:bg-gray-500 px-4 py-2 rounded-md"
                >
                  Batal
                </Button>
                <Button
                  onClick={editData ? handleUpdate : handleCreate}
                  className="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-2 rounded-md"
                >
                  {editData ? "Update" : "Simpan"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PetaPage;
