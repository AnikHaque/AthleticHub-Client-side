import React, { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [viewMode, setViewMode] = useState("table"); // 👈 View mode toggle

  const fetchBookings = () => {
    axios
      .get("https://adventis-server.vercel.app/api/my-bookings", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setBookings(res.data))
      .catch((err) => console.error("Error fetching bookings:", err));
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      axios
        .delete(`https://adventis-server.vercel.app/api/bookings/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(() => fetchBookings())
        .catch((err) => console.error("Error deleting booking:", err));
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Booked Events</h2>
        <div>
          <button
            onClick={() => setViewMode("table")}
            className={`px-4 py-2 border rounded-l ${
              viewMode === "table"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            }`}
          >
            Table View
          </button>
          <button
            onClick={() => setViewMode("card")}
            className={`px-4 py-2 border rounded-r ${
              viewMode === "card"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            }`}
          >
            Card View
          </button>
        </div>
      </div>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : viewMode === "table" ? (
        // 🟦 Table View
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-3 px-4 border-b">#</th>
                <th className="py-3 px-4 border-b text-left">Title</th>
                <th className="py-3 px-4 border-b text-left">Description</th>
                <th className="py-3 px-4 border-b text-left">Date</th>
                <th className="py-3 px-4 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking._id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b text-center">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b">{booking.event.title}</td>
                  <td className="py-2 px-4 border-b">
                    {booking.event.description}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {new Date(booking.event.date).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // 🟨 Card View
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {booking.event.title}
              </h3>
              <p className="text-gray-600 mb-1">
                <strong>Description:</strong> {booking.event.description}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Date:</strong>{" "}
                {new Date(booking.event.date).toLocaleDateString()}
              </p>
              <button
                onClick={() => handleDelete(booking._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition w-full"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
