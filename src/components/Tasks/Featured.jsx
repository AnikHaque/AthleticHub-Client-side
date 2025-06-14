import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ServiceCards = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    axios
      .get("https://adventis-server.vercel.app/api/featured")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error("Failed to fetch tasks", err));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <img
          src="https://cdn1.vectorstock.com/i/1000x1000/55/10/hand-fidget-spinner-logo-vector-15555510.jpg"
          className="animate-spin w-28 h-28  p-4 rounded-full"
        ></img>
      </div>
    );
  }

  return (
    <div className=" py-16 " style={{ color: "var(--text-color)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-bold text-center  mb-12"
          style={{ color: "var(--heading-color, var(--text-color))" }}
        >
          Featured Tasks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tasks.slice(0, 6).map((task) => (
            <div
              key={task._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6 flex flex-col h-full justify-between">
                <div>
                  <img src={task.picture}></img>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {task.title}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold">Category:</span>{" "}
                      {task.category}
                    </p>
                    <p>
                      <span className="font-semibold">date:</span> {task.date}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/event-details/${task._id}`)}
                  className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Link to="/browse-events" className="text-blue-500 font-bold text-2xl">
          {" "}
          See All Events{" "}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCards;
