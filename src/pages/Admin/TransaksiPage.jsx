import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import "@iconscout/unicons/css/line.css";
// import Navbar from "@/components/Navbar/Navbar_Admin";

const Transaksi = () => {
  // State untuk modal
  const [isModalOpen, setModalOpen] = useState(false);

  // Fungsi untuk membuka dan menutup modal
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      {/* <Navbar /> */}
      <div className="mt-20 ml-64">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mb-3 items-start">
          {/* Card 1 - Total Saldo Poin */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
            <div className="mr-4">
              <i className="uil uil-shopping-bag text-orange-600 text-4xl"></i>
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">
                Saldo Poin
              </h4>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                2,456
              </p>
            </div>
          </div>

          {/* Card 2 - Saldo Uang */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
            <div className="mr-4">
              <i className="uil uil-shop text-purple-600 text-4xl"></i>
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">
                Saldo Uang
              </h4>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                3,326
              </p>
            </div>
          </div>

          {/* Card 3 - Purchase Orders */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
            <div className="mr-4">
              <i className="uil uil-users-alt text-green-600 text-4xl"></i>
            </div>
            <div>
              <h4 className="text-sm whitespace-nowrap font-semibold text-gray-800 dark:text-gray-200">
                Total Purchase Order
              </h4>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                5,325
              </p>
            </div>
          </div>

          {/* Card 4 - Klaim */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
            <div className="mr-4">
              <i className="uil uil-list-ui-alt text-purple-600 text-4xl"></i>
            </div>
            <div>
              <h4 className="whitespace-nowrap text-sm font-semibold text-gray-800 dark:text-gray-200">
                Total Klaim Reward
              </h4>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                1,326
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto px-4  mt-13">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 col-span-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Purchase Order List
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
                      Purchase Order ID
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Tanggal Transaksi
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Nama Pengguna
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Aksi
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Detail
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Contoh Data */}
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">1</td>
                    <td className="px-4 py-2 text-sm text-gray-700">PO-001</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      2024-11-01
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      John Doe
                    </td>
                    <td className="px-4 py-2 text-sm">
                      <span className="bg-green-200 text-green-800 rounded-full px-2 py-1 text-xs">
                        Disetujui
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                        Drop Off
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm">
                      <button
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md text-xs"
                        onClick={openModal}
                      >
                        Detail
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">2</td>
                    <td className="px-4 py-2 text-sm text-gray-700">PO-002</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      2024-11-02
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Jane Smith
                    </td>
                    <td className="px-4 py-2 text-sm">
                      <span className="bg-yellow-200 text-yellow-800 rounded-full px-2 py-1 text-xs">
                        Menunggu
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                        Drop Off
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm">
                      <button
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md text-xs"
                        onClick={openModal}
                      >
                        Detail
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">3</td>
                    <td className="px-4 py-2 text-sm text-gray-700">PO-003</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      2024-11-03
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Michael Lee
                    </td>
                    <td className="px-4 py-2 text-sm">
                      <span className="bg-red-200 text-red-800 rounded-full px-2 py-1 text-xs">
                        Ditolak
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                        Pick Up
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm">
                      <button
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md text-xs"
                        onClick={openModal}
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">4</td>
                    <td className="px-4 py-2 text-sm text-gray-700">PO-004</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      2024-12-03
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">Mincel</td>
                    <td className="px-4 py-2 text-sm">
                      <span className="bg-green-200 text-green-800 rounded-full px-2 py-1 text-xs">
                        Disetujui
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                        Pick Up
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm">
                      <button
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md text-xs"
                        onClick={openModal}
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">5</td>
                    <td className="px-4 py-2 text-sm text-gray-700">PO-005</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      2024-11-22
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">Andi</td>
                    <td className="px-4 py-2 text-sm">
                      <span className="bg-red-200 text-red-800 rounded-full px-2 py-1 text-xs">
                        Ditolak
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                        Drop Off
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm">
                      <button
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md text-xs"
                        onClick={openModal}
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Modal */}
              {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                  <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-6 relative">
                    {/* Close Button */}
                    <button
                      onClick={closeModal}
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    >
                      ×
                    </button>

                    {/* Modal Content */}
                    <h2 className="text-2xl font-bold mb-6">
                      Orders ID: #6743
                      <span className="ml-4 bg-orange-500 text-white px-3 py-1 rounded text-sm">
                        Pending
                      </span>
                    </h2>

                    <div className="flex justify-between items-center mb-6">
                      {/* Date Info */}
                      <div className="flex items-center">
                        <i className="uil uil-calendar-alt text-gray-500 mr-3 text-lg"></i>
                        <span className="text-gray-700">
                          Feb 16, 2022 - Feb 20, 2022
                        </span>
                      </div>

                      {/* Dropdown, Print, and Save */}
                      <div className="flex items-center space-x-4">
                        {/* Dropdown */}
                        <select className="border border-gray-300 rounded px-4 py-2 text-sm">
                          <option>Change Status</option>
                          <option>Approved</option>
                          <option>Rejected</option>
                        </select>

                        {/* Print Button */}
                        <button className="flex items-center bg-[#F4F2F2] text-gray-700 px-4 py-2 rounded">
                          <i className="uil uil-print mr-2"></i>
                          Print
                        </button>

                        {/* Save Button */}
                        <button className="flex items-center bg-[#F4F2F2] text-gray-700 px-4 py-2 rounded">
                          <i className="uil uil-save mr-2"></i>
                          Save
                        </button>
                      </div>
                    </div>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Card 1: Customer */}
                      <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md border">
                        <div className="flex items-start mb-3">
                          <i className="uil uil-user-circle text-3xl text-green-600 mr-3"></i>
                          <div>
                            <h3 className="text-lg font-bold">Customer</h3>
                            <div className="text-sm">
                              <p className="mb-2">
                                <span className="font-semibold">
                                  Full Name:
                                </span>{" "}
                                Claudia Alda
                              </p>
                              <p className="mb-2">
                                <span className="font-semibold">Email:</span>{" "}
                                claudiaaa@gmail.com
                              </p>
                              <p className="mb-4">
                                <span className="font-semibold">Phone:</span>{" "}
                                +91 904 231 1212
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* View Profile Button */}
                        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                          View Profile
                        </button>
                      </div>

                      {/* Card 2: Order Info */}
                      <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md border">
                        <div className="flex items-start mb-3">
                          <i className="uil uil-user-circle text-3xl text-green-600 mr-3"></i>
                          <div>
                            <h3 className="text-lg font-bold">Order Info</h3>
                            <div className="text-sm">
                              <p className="mb-2">
                                <span className="font-semibold">Aksi:</span>{" "}
                                Pickup
                              </p>
                              <p className="mb-2">
                                <span className="font-semibold">Quantity:</span>{" "}
                                20KG
                              </p>
                              <p className="mb-4">
                                <span className="font-semibold">Status:</span>{" "}
                                Pending
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Download Info Button */}
                        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                          Download Info
                        </button>
                      </div>

                      {/* Card 3: Invoice Detail */}
                      <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md border">
                        <div className="flex items-start mb-3">
                          <i className="uil uil-user-circle text-3xl text-green-600 mr-3"></i>
                          <div>
                            <h3 className="text-lg font-bold">
                              Invoice Detail
                            </h3>
                            <div className="text-sm">
                              <p className="mb-2">
                                <span className="font-semibold">Address:</span>{" "}
                                Dharam Colony, Palam Vihar, Gurgaon, Haryana
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* View Profile Button */}
                        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                          View
                        </button>
                      </div>

                      {/* New Card: Payment Info */}
                      {isModalOpen && (
                        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                          <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-6 relative">
                            {/* Close Button */}
                            <button
                              onClick={closeModal}
                              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            >
                              ×
                            </button>

                            {/* Modal Content */}
                            <h2 className="text-2xl font-bold mb-6">
                              Orders ID: #6743
                              <span className="ml-4 bg-orange-500 text-white px-3 py-1 rounded text-sm">
                                Pending
                              </span>
                            </h2>

                            <div className="flex justify-between items-center mb-6">
                              {/* Date Info */}
                              <div className="flex items-center">
                                <i className="uil uil-calendar-alt text-gray-500 mr-3 text-lg"></i>
                                <span className="text-gray-700">
                                  Feb 16, 2022 - Feb 20, 2022
                                </span>
                              </div>

                              {/* Dropdown, Print, and Save */}
                              <div className="flex items-center space-x-4">
                                {/* Dropdown */}
                                <select className="border border-gray-300 rounded px-4 py-2 text-sm">
                                  <option>Change Status</option>
                                  <option>Approved</option>
                                  <option>Rejected</option>
                                </select>

                                {/* Print Button */}
                                <button className="flex items-center bg-[#F4F2F2] text-gray-700 px-4 py-2 rounded">
                                  <i className="uil uil-print mr-2"></i>
                                  Print
                                </button>

                                {/* Save Button */}
                                <button className="flex items-center bg-[#F4F2F2] text-gray-700 px-4 py-2 rounded">
                                  <i className="uil uil-save mr-2"></i>
                                  Save
                                </button>
                              </div>
                            </div>

                            {/* Cards Section */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {/* Card 1: Customer */}
                              <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md border">
                                <div className="flex items-start mb-3">
                                  <i className="uil uil-user-circle text-3xl text-green-600 mr-3"></i>
                                  <div>
                                    <h3 className="text-lg font-bold">
                                      Customer
                                    </h3>
                                    <div className="text-sm">
                                      <p className="mb-2">
                                        <span className="font-semibold">
                                          Full Name:
                                        </span>{" "}
                                        Claudia Alda
                                      </p>
                                      <p className="mb-2">
                                        <span className="font-semibold">
                                          Email:
                                        </span>{" "}
                                        claudiaaa@gmail.com
                                      </p>
                                      <p className="mb-4">
                                        <span className="font-semibold">
                                          Phone:
                                        </span>{" "}
                                        +91 904 231 1212
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                {/* View Profile Button */}
                                <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                                  View Profile
                                </button>
                              </div>

                              {/* Card 2: Order Info */}
                              <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md border">
                                <div className="flex items-start mb-3">
                                  <i className="uil uil-user-circle text-3xl text-green-600 mr-3"></i>
                                  <div>
                                    <h3 className="text-lg font-bold">
                                      Order Info
                                    </h3>
                                    <div className="text-sm">
                                      <p className="mb-2">
                                        <span className="font-semibold">
                                          Aksi:
                                        </span>{" "}
                                        Pickup
                                      </p>
                                      <p className="mb-2">
                                        <span className="font-semibold">
                                          Quantity:
                                        </span>{" "}
                                        20KG
                                      </p>
                                      <p className="mb-4">
                                        <span className="font-semibold">
                                          Status:
                                        </span>{" "}
                                        Pending
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                {/* Download Info Button */}
                                <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                                  Download Info
                                </button>
                              </div>

                              {/* Card 3: Invoice Detail */}
                              <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md border">
                                <div className="flex items-start mb-3">
                                  <i className="uil uil-user-circle text-3xl text-green-600 mr-3"></i>
                                  <div>
                                    <h3 className="text-lg font-bold">
                                      Invoice Detail
                                    </h3>
                                    <div className="text-sm">
                                      <p className="mb-2">
                                        <span className="font-semibold">
                                          Address:
                                        </span>{" "}
                                        Dharam Colony, Palam Vihar, Gurgaon,
                                        Haryana
                                      </p>
                                      <br />
                                      <br />
                                    </div>
                                  </div>
                                </div>

                                {/* View Profile Button */}
                                <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                                  View
                                </button>
                              </div>

                              {/* New Card: Payment Info */}
                              <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md border grid-cols-1 md:grid-cols-3">
                                <h3 className="text-lg font-bold mb-4">
                                  Payment Info
                                </h3>
                                <div className="flex items-center mb-4">
                                  <i className="uil uil-credit-card text-3xl text-blue-600 mr-3"></i>
                                  <p className="text-sm font-semibold">
                                    MasterCard **** **** 6557
                                  </p>
                                </div>
                                <div className="text-sm mb-4">
                                  <p>
                                    <span className="font-semibold">
                                      Business Name:
                                    </span>{" "}
                                    Claudia Alda
                                  </p>
                                  <p>
                                    <span className="font-semibold">
                                      Phone:
                                    </span>{" "}
                                    +91 904 231 1212
                                  </p>
                                </div>
                              </div>

                              {/* New Text Area: Notes */}
                              <div className=" col-span-2 md:col-span-2">
                                <h3 className="text-lg font-bold mb-4">Note</h3>
                                <textarea
                                  className="w-full p-2 border border-gray-300 rounded-md"
                                  placeholder="Type some notes"
                                  rows="5"
                                ></textarea>
                              </div>
                            </div>

                            <div className="col-span-3 mt-6">
                              <table className="min-w-full bg-white border border-gray-300">
                                <thead>
                                  <tr>
                                    <th className="px-4 py-2 text-left border-b">
                                      Product Name
                                    </th>
                                    <th className="px-4 py-2 text-left border-b">
                                      Order ID
                                    </th>
                                    <th className="px-4 py-2 text-left border-b">
                                      Quantity
                                    </th>
                                    <th className="px-4 py-2 text-left border-b">
                                      Total
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="px-4 py-2 border-b">
                                      <div className="flex items-center">
                                        <input
                                          type="checkbox"
                                          className="ml-2"
                                        />
                                        <img
                                          src="https://via.placeholder.com/30"
                                          alt="Product"
                                          className="w-6 h-6 ml-2"
                                        />
                                        <span>Lorem Ipsum</span>
                                      </div>
                                    </td>
                                    <td className="px-4 py-2 border-b">
                                      #25421
                                    </td>
                                    <td className="px-4 py-2 border-b">2</td>
                                    <td className="px-4 py-2 border-b">
                                      Rp. 200.000
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 border-b">
                                      <div className="flex items-center">
                                        <input
                                          type="checkbox"
                                          className="ml-2"
                                        />
                                        <img
                                          src="https://via.placeholder.com/30"
                                          alt="Product"
                                          className="w-6 h-6 ml-2"
                                        />
                                        <span>Lorem Ipsum</span>
                                      </div>
                                    </td>
                                    <td className="px-4 py-2 border-b">
                                      #25421
                                    </td>
                                    <td className="px-4 py-2 border-b">2</td>
                                    <td className="px-4 py-2 border-b">
                                      Rp. 200.000
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 border-b">
                                      <div className="flex items-center">
                                        <input
                                          type="checkbox"
                                          className="ml-2"
                                        />
                                        <img
                                          src="https://via.placeholder.com/30"
                                          alt="Product"
                                          className="w-6 h-6 ml-2"
                                        />
                                        <span>Lorem Ipsum</span>
                                      </div>
                                    </td>
                                    <td className="px-4 py-2 border-b">
                                      #25421
                                    </td>
                                    <td className="px-4 py-2 border-b">2</td>
                                    <td className="px-4 py-2 border-b">
                                      Rp. 200.000
                                    </td>
                                  </tr>
                                </tbody>
                              </table>

                              {/* Subtotal, Tax, and Total */}
                              <div className="mt-4 text-right">
                                <p className="font-semibold">
                                  Subtotal: Rp. 900.000
                                </p>
                                <p className="font-semibold">Tax: Rp. 10.000</p>
                                <p className="text-xl font-bold">
                                  Rp. 1.000.000
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
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
    </>
  );
};

export default Transaksi;
