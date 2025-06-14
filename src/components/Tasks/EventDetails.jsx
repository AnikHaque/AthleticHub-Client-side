import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EventDetails = ({ user, token }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    axios
      .get(`https://adventis-server.vercel.app/api/events/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setEvent(res.data))
      .catch((err) => {
        setError("Event not found or error fetching event.");
        console.error("Error fetching event:", err);
      });

    axios
      .get("https://adventis-server.vercel.app/api/my-bookings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const alreadyBooked = res.data.some(
          (booking) => booking.event._id === id
        );
        if (alreadyBooked) {
          setIsBooked(true);
        }
      })
      .catch((err) => {
        console.error("Failed to check bookings:", err);
      });
  }, [id, token]);

  if (error) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl text-red-500 font-semibold mb-4">{error}</h2>
        <button
          onClick={() => navigate("/my-events")}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go Back to My Events
        </button>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="p-10 text-center text-gray-600 text-lg">
        Loading event details...
      </div>
    );
  }

  const handleBookNow = () => {
    axios
      .post(
        `https://adventis-server.vercel.app/api/bookings`,
        { eventId: id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        alert("Event booked successfully!");
        setIsBooked(true);
      })
      .catch((err) => {
        console.error("Booking failed:", err);
        alert(err.response?.data?.message || "Booking failed");
      });
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-gray-50 rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h2>

      <div className="space-y-4 text-gray-700">
        <p>
          <span className="font-semibold">Category:</span> {event.category}
        </p>
        <p>
          <span className="font-semibold">Description:</span>{" "}
          {event.description}
        </p>
        <p>
          <span className="font-semibold">Date:</span>{" "}
          {new Date(event.date).toLocaleDateString()}
        </p>

        <p>
          <span className="font-semibold">Posted By:</span> {event.email}
        </p>
      </div>

      <button
        onClick={handleBookNow}
        disabled={isBooked}
        className={`mt-4 w-full py-3 font-medium text-white rounded-lg transition ${
          isBooked
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
        }`}
      >
        {isBooked ? "Already Booked" : "Book Now"}
      </button>
    </div>
  );
};

export default EventDetails;
