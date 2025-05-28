import { useState, useEffect } from "react";

// Custom hook to check if the user is authenticated
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Retrieve user and token from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    }
  }, []);

  return { user, token };
};
