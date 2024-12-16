import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

const UOMPage = () => {
  const [tb_uom, settb_uom] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    nama_uom: "",
    satuan: "",
    faktor_konversi: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch data on mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5001/uom");
      settb_uom(response.data.uoms);
    } catch (error) {
      console.error("Error fetching UOM data:", error);
    }
  };

  // Toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setFormData({ id: null, nama_uom: "", satuan: "", faktor_konversi: "" });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Create or Update UOM
  const handleSubmit = async () => {
    try {
      if (formData.id) {
        // Update UOM
        await axios.put(`http://localhost:5001/uom/${formData.id}`, {
          name: formData.nama_uom,
          factor: formData.faktor_konversi,
          created_by: 1, // Example user ID
        });
      } else {
        // Create new UOM
        await axios.post("http://localhost:5001/uom", {
          name: formData.nama_uom,
          factor: formData.faktor_konversi,
        });
      }
      fetchData(); // Refetch data after successful save
      toggleModal(); // Close the modal
    } catch (error) {
      console.error("Error saving UOM:", error);
    }
  };

  const handleAddUom = (event) => {
    event.preventDefault();

    const newUom = {
      name: nama_uom,
      factor: faktor_konversi,
    };

    fetch("/api/uom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUom),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("UOM added:", data);
        history.push("/web/uom"); // Navigate to the UOM page
      })
      .catch((error) => {
        console.error("Error adding UOM:", error);
      });
  };

  // Delete UOM
  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:5001/uom/${id}`);
  //     fetchData();
  //   } catch (error) {
  //     console.error("Error deleting UOM:", error);
  //   }
  // };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this UOM?")) {
      fetch(`http://localhost:5001/uom/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            // Remove the deleted UOM from the state
            settb_uom(tb_uom.filter((uom) => uom.id !== id));
          } else {
            alert("Failed to delete UOM");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred while deleting the UOM.");
        });
    }
  };

  // Edit UOM
  const handleEdit = (uom) => {
    setFormData({
      id: uom.id,
      nama_uom: uom.name,
      satuan: "", // Placeholder for additional field
      faktor_konversi: uom.factor,
    });
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="mainSection mt-16 ml-64 p-6 flex-1">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 col-span-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Data Unit of Measure (UOM)
            </h2>
            <Button
              onClick={toggleModal}
              className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md shadow-md"
            >
              Tambah
            </Button>
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
                    Faktor Konversi
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                    Aksi
                  </th>
                </tr>
              </thead>

              <tbody>
                {tb_uom.map((uom, index) => (
                  <tr key={uom.id}>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {uom.name}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {uom.factor}
                    </td>
                    <td className="px-4 py-2 text-sm">
                      <Button
                        onClick={() => handleEdit(uom)}
                        className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded-md shadow-md"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDelete(uom.id)}
                        className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-md shadow-md ml-2"
                      >
                        Hapus
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              toggleModal();
            }
          }}
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">
              {formData.id ? "Edit Data UOM" : "Tambah Data UOM"}
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Nama UOM
                </label>
                <input
                  type="text"
                  name="nama_uom"
                  value={formData.nama_uom}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Masukkan Nama UOM"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Faktor Konversi
                </label>
                <input
                  type="number"
                  name="faktor_konversi"
                  value={formData.faktor_konversi}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Masukkan Faktor Konversi"
                />
              </div>
              <div className="flex justify-between gap-2 mt-4">
                <Button
                  onClick={toggleModal}
                  className="bg-gray-500 text-white hover:bg-gray-600 px-4 py-2 rounded-md"
                >
                  Batal
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md"
                >
                  {formData.id ? "Update" : "Simpan"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UOMPage;
