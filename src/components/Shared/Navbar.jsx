import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setUser(JSON.parse(userData));
      setIsLoggedIn(true);
    } else {
      setUser(null);
      setIsLoggedIn(false);
    }

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("#user-dropdown")) {
        setShowUserDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setIsLoggedIn(false);
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#313f2a] text-white px-4 py-4 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          <img
            src="https://demo2.themelexus.com/adventis/wp-content/uploads/2023/10/logo.svg"
            className="w-20"
          ></img>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none text-2xl"
        >
          ☰
        </button>

        <div
          className={`w-full md:w-auto mt-4 md:mt-0 ${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6`}
        >
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link
              to="/"
              className={`block py-1 ${
                isActive("/") ? "font-semibold underline" : ""
              }`}
            >
              Home
            </Link>

            <Link
              to="/browse-events"
              className={`block py-1 ${
                isActive("/browse-events") ? "font-semibold underline" : ""
              }`}
            >
              Browse Events
            </Link>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center gap-1 py-1 hover:underline focus:outline-none"
              >
                Profile <span className="text-sm">▼</span>
              </button>
              {isOpen && (
                <div className="absolute bg-white text-black rounded shadow-md mt-2 py-2 w-40 z-20">
                  <Link
                    to="/add-event"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Create Event
                  </Link>
                  <Link
                    to="/my-events"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    My Events
                  </Link>
                  <Link
                    to="/my-bookings"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    My Bookings
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="border border-white px-3 py-1 rounded text-sm"
              title="Toggle Theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {isLoggedIn ? (
              <div className="relative" id="user-dropdown">
                <div
                  className="cursor-pointer flex items-center gap-2"
                  onClick={() => setShowUserDropdown((prev) => !prev)}
                >
                  {user.photoURL ? (
                    <div className="relative group cursor-pointer">
                      <img
                        src={user.photoURL}
                        alt="User"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap z-10">
                        {user.name || "No Name"}
                      </div>
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-black">
                      ?
                    </div>
                  )}
                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="bg-green-500 px-3 py-1 rounded hover:bg-green-600 transition text-center"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition text-center"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
