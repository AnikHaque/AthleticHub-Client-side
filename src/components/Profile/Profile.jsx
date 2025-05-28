import React, { useState } from "react";
import { auth } from "../../firebase";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

export default function Profile() {
  const currentUser = auth.currentUser;
  const [name, setName] = useState(currentUser?.displayName || "");
  const [photoURL, setPhotoURL] = useState(currentUser?.photoURL || "");

  const handleUpdate = async () => {
    try {
      await updateProfile(currentUser, { displayName: name, photoURL });
      Swal.fire("Success!", "Profile updated successfully!", "success");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
      <img
        src={photoURL}
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4"
      />
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>

      <div className="mt-4">
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="block text-sm font-medium mt-4">Photo URL</label>
        <input
          type="text"
          className="input input-bordered w-full"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />

        <button onClick={handleUpdate} className="btn btn-primary mt-4">
          Save Changes
        </button>
      </div>
    </div>
  );
}
