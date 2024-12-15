import Sidebar from "@/components/Sidebar/Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import "@iconscout/unicons/css/line.css";

const KategoriSampahPage = () => {
  const [tb_jenis_sampah, settb_jenis_sampah] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    nama: "",
    kode: "",
    keterangan: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const [totalJenisSampah, setTotalJenisSampah] = useState(0);

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
          `http://localhost:5000/tb_jenis_sampah/${formData.id}`,
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
      await axios.delete(`http://localhost:5000/tb_jenis_sampah/${id}`);
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
      <div className="flex">
        <div className="sidebar fixed top-0 left-0 h-full w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
          <Sidebar />
        </div>
        <div className="mainSection mt-16 ml-64 p-6 flex-1">
          test
          <div>
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mb-3 items-start">
              {/* Card 1 - Total Produk */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
                <div className="mr-4">
                  <i className="uil uil-shopping-bag text-orange-600 text-4xl"></i>
                </div>
                <div>
                  <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">
                    Total Produk
                  </h4>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    120
                  </p>
                </div>
              </div>

              {/* Card 2 - Jenis Sampah */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
                <div className="mr-4">
                  <i className="uil uil-shop text-purple-600 text-4xl"></i>
                </div>
                <div>
                  <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">
                    Jenis Sampah
                  </h4>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {totalJenisSampah}
                  </p>
                </div>
              </div>

              {/* Card 3 - Total Visitor */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
                <div className="mr-4">
                  <i className="uil uil-users-alt text-green-600 text-4xl"></i>
                </div>
                <div>
                  <h4 className="text-sm whitespace-nowrap font-semibold text-gray-800 dark:text-gray-200">
                    Total Visitor
                  </h4>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    5,325
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full mx-auto px-4 mt-13">
              <div className="grid grid-cols-6 gap-6 mb-3">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 col-span-4">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Data Jenis Sampah
                    </h2>
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
                  <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="min-w-full table-auto">
                      <thead className="bg-blue-100">
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                            No
                          </th>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                            Nama
                          </th>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                            Kode
                          </th>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                            Keterangan
                          </th>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tb_jenis_sampah.map((tb_jenis_sampah, index) => (
                          <tr key={tb_jenis_sampah.id}>
                            <td className="px-4 py-2 text-sm text-gray-700">
                              {index + 1}
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-700">
                              {tb_jenis_sampah.nama}
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-700">
                              {tb_jenis_sampah.kode}
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-700">
                              {tb_jenis_sampah.keterangan}
                            </td>
                            <td className="px-4 py-2 text-sm">
                              <Button
                                className="bg-blue-500 text-white"
                                onClick={() => handleEdit(tb_jenis_sampah)}
                              >
                                Edit
                              </Button>
                              <Button
                                className="bg-red-500 text-white"
                                onClick={() => handleDelete(tb_jenis_sampah.id)}
                              >
                                Hapus
                              </Button>
                            </td>
                          </tr>
                        ))}
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

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 col-span-2">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-xs">
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        Jenis Sampah
                      </h2>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <Input
                            type="text"
                            id="nama"
                            placeholder="Nama Jenis Sampah"
                            value={formData.nama}
                            onChange={handleChange}
                            className="border border-gray-300 dark:border-gray-600 rounded-md shadow-sm w-full p-2 focus:outline-none focus:ring focus:ring-green-500"
                          />
                        </div>
                        <div className="mb-4">
                          <Input
                            type="text"
                            id="kode"
                            placeholder="Kode Jenis Sampah"
                            value={formData.kode}
                            onChange={handleChange}
                            className="border border-gray-300 dark:border-gray-600 rounded-md shadow-sm w-full p-2 focus:outline-none focus:ring focus:ring-green-500"
                          />
                        </div>
                        <div className="mb-4">
                          <Textarea
                            id="keterangan"
                            placeholder="Keterangan"
                            value={formData.keterangan}
                            onChange={handleChange}
                            className="border border-gray-300 dark:border-gray-600 rounded-md shadow-sm w-full p-2 focus:outline-none focus:ring focus:ring-green-500"
                            rows="4"
                          ></Textarea>
                        </div>
                        <Button type="submit">
                          {isEditMode ? "Update" : "Tambah"}
                        </Button>
                        {isEditMode && (
                          <Button type="button" onClick={resetForm}>
                            Cancel
                          </Button>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KategoriSampahPage;
