import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";

const AddTask = ({ user, token }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://freelancer-website-server.vercel.app/api/add-task",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.fire("Success", "Task Added successfully");
      reset();
    } catch (err) {
      setMessage("❌ Error adding task.");
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-600">Please log in to add a task.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-5xl font-semibold text-center mb-6 text-black">
          <Typewriter
            words={["Add Task", "Create New Task", "Post a Task Now"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        {/* User Info */}
        <div className="mb-4 text-center">
          <p className="text-xl font-semibold">Hello, {user?.name}</p>
          <p className="text-lg text-gray-600">{user?.email}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title */}
          <div>
            <input
              type="text"
              placeholder="Task Title"
              {...register("title", { required: "Title is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="Web Development">Web Development</option>
              <option value="Design">Design</option>
              <option value="Writing">Writing</option>
              <option value="Marketing">Marketing</option>
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
              placeholder="Description"
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.description && (
              <p className="text-sm text-red-500 mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Deadline */}
          <div>
            <input
              type="date"
              {...register("deadline", { required: "Deadline is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.deadline && (
              <p className="text-sm text-red-500 mt-1">
                {errors.deadline.message}
              </p>
            )}
          </div>

          {/* Budget */}
          <div>
            <input
              type="number"
              placeholder="Budget"
              {...register("budget", { required: "Budget is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.budget && (
              <p className="text-sm text-red-500 mt-1">
                {errors.budget.message}
              </p>
            )}
          </div>

          {/* Hidden User Info */}
          <div>
            <input
              type="text"
              value={user?.email || ""}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={user?.name || ""}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Task
            </button>
          </div>

          {/* Message */}
          {message && <p className="text-center text-lg mt-4">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddTask;
