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
    <nav className="bg-black text-white px-4 py-4 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          DevTech
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
              to="/about"
              className={`block py-1 ${
                isActive("/about") ? "font-semibold underline" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/add-task"
              className={`block py-1 ${
                isActive("/add-task") ? "font-semibold underline" : ""
              }`}
            >
              Add Task
            </Link>
            <Link
              to="/browse-tasks"
              className={`block py-1 ${
                isActive("/browse-tasks") ? "font-semibold underline" : ""
              }`}
            >
              Browse Tasks
            </Link>
            <Link
              to="/my-posted-tasks"
              className={`block py-1 ${
                isActive("/my-posted-tasks") ? "font-semibold underline" : ""
              }`}
            >
              My Posted Tasks
            </Link>
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
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-black">
                      ?
                    </div>
                  )}
                </div>

                {showUserDropdown && (
                  <div className="absolute right-0 mt-2 bg-black text-white rounded shadow-lg p-3 text-sm z-20 w-48">
                    <div className="mb-2 font-medium">
                      {user.name || "No Name"}
                    </div>
                    <div className="mb-3 text-gray-300">
                      {user.email || "No email"}
                    </div>
                    <button
                      onClick={logout}
                      className="w-full bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                    >
                      Logout
                    </button>
                  </div>
                )}
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
