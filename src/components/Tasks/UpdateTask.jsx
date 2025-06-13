import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    deadline: "",
    budget: "",
  });

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  const [error, setError] = useState("");

  // Decode the token manually
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = decodeToken(token); // Decode the token manually
        setUserInfo({
          name: decodedToken.name, // Assuming your JWT contains 'name'
          email: decodedToken.email, // Assuming your JWT contains 'email'
        });
      } catch (err) {
        console.error("Error decoding token", err);
        setError("Error decoding token");
      }
    }
  }, [token]);

  // Function to manually decode JWT token
  const decodeToken = (token) => {
    const base64Url = token.split(".")[1]; // Get the payload part
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // Fix URL encoding
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload); // Return the parsed payload
  };

  // Fetch task details from API
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/tasks/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setFormData(response.data);
      } catch (err) {
        setError("Error fetching task details");
        console.error(err);
      }
    };
    fetchTask();
  }, [id, token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8800/api/tasks/${id}`,
        {
          title: formData.title,
          category: formData.category,
          description: formData.description,
          deadline: formData.deadline,
          budget: formData.budget,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Task updated successfully.",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/my-posted-tasks");
      });
    } catch (err) {
      console.error("Error updating task:", err);
      setError("Error updating task");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Update Task
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Deadline
            </label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Budget ($)
            </label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={userInfo.name} // Using the name from token
              readOnly
              className="w-full px-4 py-2 border bg-gray-100 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Your Email
            </label>
            <input
              type="email"
              value={userInfo.email} // Using the email from token
              readOnly
              className="w-full px-4 py-2 border bg-gray-100 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTaskPage;
