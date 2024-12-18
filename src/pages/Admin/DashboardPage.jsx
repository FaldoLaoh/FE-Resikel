import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement, // Add this for Pie/Donut chart support
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Link } from "react-router-dom";

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement, // Register ArcElement for Pie/Donut chart
  Title,
  Tooltip,
  Legend
);

const DashboardPage = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // Fetch the aggregate statistics from the backend
    axios
      .get("http://localhost:5001/api/dashboard/stats", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data); // Check if data is valid
        setStats(response.data);
      })
      .catch((error) => console.error("Error fetching stats", error));
  }, []);

  if (!stats) return <div>Loading...</div>;

  // Calculate total users based on active/inactive counts
  const totalUsers = stats.active_user_count + stats.inactive_user_count;

  // Line chart data (example: User growth over time)
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "User Growth",
        data: [12, 19, 3, 5, 2], // Example data
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  // User Doughnut Chart Data (reflecting active/inactive users)
  const userDonutData = {
    labels: ["Active Users", "Inactive Users"],
    datasets: [
      {
        data: [stats.active_user_count, stats.inactive_user_count],
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
        borderWidth: 1,
      },
    ],
  };

  // Category Donut Chart Data
  const categoryDonutData = {
    labels: ["Electronics", "Clothing", "Groceries", "Books", "Others"],
    datasets: [
      {
        data: [
          stats.electronics_count,
          stats.clothing_count,
          stats.groceries_count,
          stats.books_count,
          stats.others_count,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 99, 132, 0.5)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mainSection mt-16 ml-64 p-6 flex-1">
      <h1 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart Card */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800">User Growth</h2>
          </div>
          <Line data={lineData} />
        </div>

        {/* User Doughnut Chart Card */}

        <Link to="/web/pengguna" className="block">
          <div className="bg-white p-4 shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Total Users
              </h2>
            </div>
            <Pie
              data={userDonutData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "bottom", // Legend at the bottom
                  },
                  tooltip: {
                    callbacks: {
                      label: function (context) {
                        let value = context.raw;
                        return `${context.label}: ${value}`;
                      },
                    },
                  },
                },
                cutout: "60%", // Makes it a Doughnut Chart
              }}
            />
          </div>
        </Link>
        {/* Category Donut Chart Card */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Category Distribution
            </h2>
          </div>
          <Pie
            data={categoryDonutData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
              cutout: "60%", // Makes it a Doughnut Chart
            }}
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700">Total Users</h3>
          <p className="text-2xl font-semibold text-gray-900">
            {stats.user_count}
          </p>
        </div>

        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700">
            Total Products
          </h3>
          <p className="text-2xl font-semibold text-gray-900">
            {stats.product_count}
          </p>
        </div>

        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700">Total UOMs</h3>
          <p className="text-2xl font-semibold text-gray-900">
            {stats.uom_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
