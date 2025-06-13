import React, { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/my-bookings", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setBookings(res.data))
      .catch((err) => console.error("Error fetching bookings:", err));
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Booked Tasks</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="grid gap-4">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-lg shadow p-4 border"
            >
              <h3 className="text-xl font-semibold mb-1">
                {booking.task.title}
              </h3>
              <p>{booking.task.description}</p>
              <p className="text-sm text-gray-500">
                Deadline: {new Date(booking.task.deadline).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Budget: ${booking.task.budget}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
