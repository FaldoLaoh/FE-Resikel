import React, { useState, useEffect } from "react";
import axios from "axios";

const ProdukSampahPage = () => {
  const [products, setProducts] = useState([]); // Ensure it's initialized as an array
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category_id: "",
    list_price: "",
    cost_price: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [productsError, setProductsError] = useState(null);
  const [categoriesError, setCategoriesError] = useState(null);

  // Fetch products and categories on page load
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products and categories concurrently
        const [productsResponse, categoriesResponse] = await Promise.all([
          axios.get("http://localhost:5001/products"), // Replace with actual endpoint
          axios.get("http://localhost:5001/categories"), // Replace with actual endpoint
        ]);

        // Validate products response
        if (Array.isArray(productsResponse.data)) {
          setProducts(productsResponse.data);
        } else {
          setProductsError("Products data is not in the expected format");
        }

        // Validate categories response
        if (Array.isArray(categoriesResponse.data)) {
          setCategories(categoriesResponse.data);
        } else {
          setCategoriesError("Categories data is not in the expected format");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setProductsError("Failed to fetch products data");
        setCategoriesError("Failed to fetch categories data");
      }
    };

    fetchData();
  }, []);

  // Fetch all products
  // const fetchProducts = async () => {
  //   try {
  //     const response = await axios.get("/api/products");
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error("Error fetching products", error);
  //   }
  // };

  // // Fetch all categories
  // const fetchCategories = async () => {
  //   try {
  //     const response = await axios.get("/api/categories");
  //     setCategories(response.data);
  //   } catch (error) {
  //     console.error("Error fetching categories", error);
  //   }
  // };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      try {
        await axios.put(`/api/products/${formData.id}`, formData);
        setIsEditing(false);
        fetchProducts();
      } catch (error) {
        console.error("Error updating product", error);
      }
    } else {
      try {
        await axios.post("/api/products", formData);
        fetchProducts();
      } catch (error) {
        console.error("Error creating product", error);
      }
    }
    setFormData({
      id: "",
      name: "",
      category_id: "",
      list_price: "",
      cost_price: "",
    });
  };

  // Handle editing a product
  const handleEdit = (product) => {
    setFormData({
      id: product.id,
      name: product.name,
      category_id: product.category_id,
      list_price: product.list_price,
      cost_price: product.cost_price,
    });
    setIsEditing(true);
  };

  // Handle deleting a product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  return (
    <div className="container mt-20 ml-64 mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Produk Sampah</h1>

      {/* Form for Adding/Editing Product */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 p-4 border rounded-md shadow-sm"
      >
        <h2 className="text-xl font-semibold mb-4">
          {isEditing ? "Edit Product" : "Add New Product"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Product Name"
            className="p-2 border rounded"
            required
          />
          <select
            name="category_id"
            value={formData.category_id}
            onChange={handleInputChange}
            className="p-2 border rounded"
            required
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="list_price"
            value={formData.list_price}
            onChange={handleInputChange}
            placeholder="List Price"
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            name="cost_price"
            value={formData.cost_price}
            onChange={handleInputChange}
            placeholder="Cost Price"
            className="p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isEditing ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* Product Table */}
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Product Name</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">List Price</th>
            <th className="p-2 border">Cost Price</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="odd:bg-gray-50">
              <td className="p-2 border">{product.id}</td>
              <td className="p-2 border">{product.name}</td>
              <td className="p-2 border">{product.category_name}</td>
              <td className="p-2 border">{product.list_price}</td>
              <td className="p-2 border">{product.cost_price}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProdukSampahPage;
