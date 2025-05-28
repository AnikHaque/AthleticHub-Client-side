import React, { useState, useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../src/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function ForgotPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleReset = async () => {
    if (!email) {
      Swal.fire("Error", "Please enter your email", "error");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire(
        "Check your inbox",
        "Password reset email sent successfully!",
        "success"
      );
      setTimeout(() => {
        window.location.href = "https://mail.google.com"; // Redirect to Gmail
      }, 1500);
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-md rounded bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Forgot Password
      </h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="input input-bordered w-full mb-4"
      />
      <button onClick={handleReset} className="btn btn-primary w-full">
        Reset Password
      </button>
    </div>
  );
}
