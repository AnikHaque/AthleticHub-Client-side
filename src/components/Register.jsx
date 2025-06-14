import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../firebase"; // Firebase

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    // Validate password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return Swal.fire(
        "Error",
        "Password must have uppercase, lowercase, and at least 6 characters",
        "error"
      );
    }

    try {
      const res = await axios.post(
        "https://adventis-server.vercel.app/api/register",
        {
          name,
          email,
          password,
          photoURL,
        }
      );
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify({ name, email, photoURL }));
      Swal.fire("Success", "Registration successful", "success");
      navigate("/");
    } catch (err) {
      Swal.fire(
        "Error",
        err.response?.data?.message || "Registration failed",
        "error"
      );
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { email, displayName, photoURL } = result.user;
      const res = await axios.post(
        "https://adventis-server.vercel.app/api/save-user",
        {
          email,
          name: displayName,
          photoURL,
        }
      );
      localStorage.setItem("token", res.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({ name: displayName, email, photoURL })
      );
      Swal.fire("Success", "Google Login successful", "success");
      navigate("/add-task");
    } catch (err) {
      Swal.fire("Error", "Google login failed", "error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Create Your Account
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Photo URL (optional)"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mt-6 space-y-4">
          <button
            onClick={handleRegister}
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Register
          </button>

          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition duration-300"
          >
            Register with Google
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
