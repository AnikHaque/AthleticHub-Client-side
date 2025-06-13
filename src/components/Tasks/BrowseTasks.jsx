import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BrowseTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8800/api/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error("Failed to fetch tasks", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <img
          src="https://cdn1.vectorstock.com/i/1000x1000/55/10/hand-fidget-spinner-logo-vector-15555510.jpg"
          className="animate-spin w-20 h-20  p-4 rounded-full"
        ></img>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black mb-6 ">
          Browse Tasks
        </h2>
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Category:</strong> {task.category}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Budget:</strong> ${task.budget}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    <strong>Deadline:</strong>{" "}
                    {new Date(task.deadline).toLocaleDateString()}
                  </p>
                  <button
                    onClick={() => navigate(`/task-details/${task._id}`)}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseTasks;
