import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyPostedTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://localhost:8800/api/my-tasks", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(response.data);
      } catch (err) {
        setError("Error fetching tasks");
        console.error("❌ Fetch error:", err);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:8800/api/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (err) {
      setError("Error deleting task");
      console.error("❌ Delete error:", err);
    }
  };

  const handleUpdate = (taskId) => {
    navigate(`/update-task/${taskId}`);
  };

  const handleViewBids = (taskId) => {
    navigate(`/bids/${taskId}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Posted Tasks</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Mobile: Cards */}
      <div className="block md:hidden space-y-4">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks available</p>
        ) : (
          tasks.map((task) => (
            <div key={task._id} className="bg-white p-4 rounded shadow border">
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <p className="text-sm text-gray-600">Category: {task.category}</p>
              <p className="text-sm text-gray-600">Budget: ${task.budget}</p>
              <div className="mt-4 space-x-2">
                <button
                  onClick={() => handleUpdate(task._id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleViewBids(task._id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  View Bids
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Tablet/Desktop: Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 border">Title</th>
              <th className="text-left p-3 border">Category</th>
              <th className="text-left p-3 border">Budget</th>
              <th className="text-left p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-500">
                  No tasks available
                </td>
              </tr>
            ) : (
              tasks.map((task) => (
                <tr key={task._id} className="border-t">
                  <td className="p-3 border">{task.title}</td>
                  <td className="p-3 border">{task.category}</td>
                  <td className="p-3 border">${task.budget}</td>
                  <td className="p-3 border space-x-2">
                    <button
                      onClick={() => handleUpdate(task._id)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleViewBids(task._id)}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      View Bids
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedTasks;
