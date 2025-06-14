import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";

const AddEvent = ({ user, token }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await axios.post(
        "https://adventis-server.vercel.app/api/add-event",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.fire("Success", "Event Added successfully", "success");
      reset();
    } catch (err) {
      setMessage("❌ Error adding event.");
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-xl text-red-600 font-semibold">
          Please log in to add an event.
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#e9f2f9] to-[#f0f4f8] py-10 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#4082aa] mb-6">
          <Typewriter
            words={["Add Event", "Create New Event", "Post Your Event"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </h2>

        <div className="text-center mb-6">
          <p className="text-xl font-semibold text-gray-700">
            Welcome, {user?.name}
          </p>
          <p className="text-gray-500 text-sm">{user?.email}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Title */}
          <div>
            <input
              type="text"
              placeholder="Event Name"
              {...register("title", { required: "Event name is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4082aa]"
            />
            {errors.title && (
              <p className="text-sm text-red-500 mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <select
              {...register("category", { required: "Category is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4082aa]"
            >
              <option value="">Select Category</option>
              <option value="Swimming">Swimming</option>
              <option value="Sprinting">Sprinting</option>
              <option value="Long Jump">Long Jump</option>
              <option value="High Jump">High Jump</option>
              <option value="Hurdle Race">Hurdle Race</option>
              <option value="Relay Race">Relay Race</option>
              <option value="Shot Put">Shot Put</option>
              <option value="Discus Throw">Discus Throw</option>
              <option value="Javelin Throw">Javelin Throw</option>
              <option value="Triple Jump">Triple Jump</option>
              <option value="Marathon">Marathon</option>
              <option value="Walk Race">Walk Race</option>
              <option value="Adventure Sports">Adventure Sports</option>
            </select>
            {errors.category && (
              <p className="text-sm text-red-500 mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <textarea
              placeholder="Event Description"
              {...register("description", {
                required: "Description is required",
              })}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#4082aa]"
            />
            {errors.description && (
              <p className="text-sm text-red-500 mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Date */}
          <div>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4082aa]"
            />
            {errors.date && (
              <p className="text-sm text-red-500 mt-1">{errors.date.message}</p>
            )}
          </div>

          {/* Picture */}
          <div>
            <input
              type="text"
              placeholder="Image URL"
              {...register("picture", { required: "Picture is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4082aa]"
            />
            {errors.picture && (
              <p className="text-sm text-red-500 mt-1">
                {errors.picture.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div>
            <input
              type="text"
              placeholder="Location"
              {...register("location", { required: "Location is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4082aa]"
            />
            {errors.location && (
              <p className="text-sm text-red-500 mt-1">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Hidden Fields */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={user?.email}
              readOnly
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100"
            />
            <input
              type="text"
              value={user?.name}
              readOnly
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 mt-4 rounded-lg bg-[#4082aa] text-white text-lg font-semibold hover:bg-[#306b8d] transition-all duration-300"
          >
            Submit Event
          </button>

          {/* Message */}
          {message && (
            <p className="text-center text-red-600 font-medium mt-4">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
