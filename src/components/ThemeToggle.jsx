import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 px-4 py-2 rounded bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-700 dark:text-white shadow transition"
    >
      {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
