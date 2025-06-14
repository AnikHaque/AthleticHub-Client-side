import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BrowseEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://adventis-server.vercel.app/api/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Failed to fetch events", err))
      .finally(() => setLoading(false));
  }, []);

  const filteredEvents = events.filter((event) => {
    const matchesName = event.title
      .toLowerCase()
      .includes(searchName.toLowerCase());
    const matchesLocation = event.location
      ?.toLowerCase()
      .includes(searchLocation.toLowerCase());
    return matchesName && matchesLocation;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <img
          src="https://cdn1.vectorstock.com/i/1000x1000/55/10/hand-fidget-spinner-logo-vector-15555510.jpg"
          className="animate-spin w-20 h-20 p-4 rounded-full"
          alt="Loading"
        />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Browse All Events
        </h2>

        {/*  Filter Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Search by Location"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/*  Event Grid */}
        {filteredEvents.length === 0 ? (
          <p className="text-center text-gray-500">No events found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event._id}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-1">
                    <strong>Category:</strong> {event.category}
                  </p>
                  {event.location && (
                    <p className="text-sm text-gray-500 mb-1">
                      <strong>Location:</strong> {event.location}
                    </p>
                  )}
                  <p className="text-sm text-gray-500 mb-4">
                    <strong>Date:</strong>{" "}
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                  <button
                    onClick={() => navigate(`/event-details/${event._id}`)}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseEvents;
