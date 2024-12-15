import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

const UOMPage = () => {
  const [tb_uom, settb_uom] = useState([]);
  const [newData, setNewData] = useState({
    nama_uom: "",
    satuan: "",
    faktor_konversi: "",
  });
  const [editData, setEditData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch data on mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/tb_uom")
      .then((response) => settb_uom(response.data))
      .catch((error) => console.error("Error fetching tb_uom:", error));
  }, []);

  // Toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle input changes for new data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle input changes for editing
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Create new UOM
  const handleCreate = () => {
    axios
      .post("http://localhost:5000/tb_uom", newData)
      .then((response) => {
        settb_uom([...tb_uom, response.data]);
        toggleModal();
      })
      .catch((error) => console.error("Error creating UOM:", error));
  };

  // Update UOM
  const handleUpdate = () => {
    axios
      .put(`http://localhost:5000/tb_uom/${editData.id}`, editData)
      .then((response) => {
        const updatedData = tb_uom.map((uom) =>
          uom.id === editData.id ? response.data : uom
        );
        settb_uom(updatedData);
        toggleModal();
      })
      .catch((error) => console.error("Error updating UOM:", error));
  };

  // Delete UOM
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/tb_uom/${id}`)
      .then(() => {
        const filteredData = tb_uom.filter((uom) => uom.id !== id);
        settb_uom(filteredData);
      })
      .catch((error) => console.error("Error deleting UOM:", error));
  };

  return (
    <>
      <div className="w-full mt-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 col-span-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Data Unit of Measure (UOM)
              <br />
            </h2>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <Button
                onClick={toggleModal}
                className="bg-emerald-600 text-white hover:bg-emerald-700 px-2 py-1 text-sm rounded-md shadow-md"
              >
                Tambah
              </Button>
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
                {tb_uom.map((tb_uom, index) => (
                  <tr key={tb_uom.id}>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {tb_uom.nama_uom}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {tb_uom.satuan}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {tb_uom.faktor_konversi}
                    </td>
                    <td className="px-4 py-2 text-sm">
                      <Button
                        onClick={() => {
                          setEditData(tb_uom);
                          toggleModal();
                        }}
                        className="bg-emerald-600 text-white hover:bg-emerald-700 p-2 rounded-md shadow-md"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDelete(tb_uom.id)}
                        className="bg-red-600 text-white hover:bg-red-700 p-2 rounded-md shadow-md ml-2"
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

export default UOMPage;
