// src/components/Dashboard.jsx
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Dashboard({ onLogout }) {
  const logout = async () => {
    await signOut(auth);
    onLogout();
  };

  return (
    <div>
      <h2>Welcome, {auth.currentUser?.email || "User"}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
