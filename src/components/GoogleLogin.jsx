import { auth, provider, signInWithPopup } from "../firebase";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function GoogleLogin() {
  const navigate = useNavigate();

  // Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { email, displayName, photoURL } = result.user;

      // Send the Google user info to your backend and get the JWT token
      const res = await axios.post(
        "https://adventis-server.vercel.app/api/save-user",
        {
          email,
          name: displayName,
          photoURL,
        }
      );

      // Store the token in localStorage
      localStorage.setItem("token", res.data.token);

      Swal.fire("Success", "Google Login successful", "success");

      // Redirect to homepage
      navigate("/");
    } catch (err) {
      Swal.fire("Error", "Google Login failed", "error");
    }
  };

  return <button onClick={handleGoogleLogin}>Login with Google</button>;
}
