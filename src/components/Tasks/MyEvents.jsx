import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "https://adventis-server.vercel.app/api/my-events",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setEvents(response.data);
      } catch (err) {
        setError("Error fetching events");
        console.error("❌ Fetch error:", err);
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = async (eventId) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(
        `https://adventis-server.vercel.app/api/events/${eventId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEvents(events.filter((event) => event._id !== eventId));
    } catch (err) {
      setError("Error deleting event");
      console.error("❌ Delete error:", err);
    }
  };

  const handleUpdate = (taskId) => {
    navigate(`/update-event/${taskId}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Events</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Mobile: Cards */}
      <div className="block md:hidden space-y-4">
        {events.length === 0 ? (
          <p className="text-center text-gray-500">No tasks available</p>
        ) : (
          events.map((event) => (
            <div key={event._id} className="bg-white p-4 rounded shadow border">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600">
                Category: {event.category}
              </p>
              <div className="mt-4 space-x-2">
                <button
                  onClick={() => handleUpdate(event._id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(event._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleViewBids(event._id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  View Bids
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Tablet/Desktop: Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 border">Title</th>
              <th className="text-left p-3 border">Category</th>
              <th className="text-left p-3 border">Description</th>
              <th className="text-left p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-500">
                  No events available
                </td>
              </tr>
            ) : (
              events.map((event) => (
                <tr key={event._id} className="border-t">
                  <td className="p-3 border">{event.title}</td>
                  <td className="p-3 border">{event.category}</td>
                  <td className="p-3 border">{event.description}</td>
                  <td className="p-3 border space-x-2">
                    <button
                      onClick={() => handleUpdate(event._id)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(event._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEvents;
