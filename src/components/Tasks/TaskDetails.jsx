import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [error, setError] = useState("");
  const [bidsCount, setBidsCount] = useState(0);
  const [userHasBidded, setUserHasBidded] = useState(false);

  useEffect(() => {
    axios
      .get(`https://freelancer-website-server.vercel.app/api/tasks/${id}`)
      .then((res) => setTask(res.data))
      .catch((err) => {
        setError("Task not found or error fetching task.");
        console.error("Error fetching task:", err);
      });

    axios
      .get(`https://freelancer-website-server.vercel.app/api/bids/${id}`)
      .then((res) => setBidsCount(res.data.length))
      .catch((err) => console.error("Error fetching bids:", err));
  }, [id]);

  const handleBid = () => {
    if (userHasBidded) {
      alert("You have already placed a bid for this task.");
      return;
    }

    axios
      .post(
        `https://freelancer-website-server.vercel.app/api/bids/${id}`,
        { taskId: id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        setBidsCount((prev) => prev + 1);
        setUserHasBidded(true);
      })
      .catch((err) => console.error("Error placing bid:", err));
  };

  if (error) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl text-red-500 font-semibold mb-4">{error}</h2>
        <button
          onClick={() => navigate("/my-tasks")}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go Back to My Tasks
        </button>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="p-10 text-center text-gray-600 text-lg">
        Loading task details...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-gray-50 rounded-lg shadow-md mt-10">
      <div className="mb-6 text-sm text-gray-600 text-right">
        You’ve placed <strong>{bidsCount}</strong> bid{bidsCount !== 1 && "s"}
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-4">{task.title}</h2>

      <div className="space-y-4 text-gray-700">
        <p>
          <span className="font-semibold">Category:</span> {task.category}
        </p>
        <p>
          <span className="font-semibold">Description:</span> {task.description}
        </p>
        <p>
          <span className="font-semibold">Deadline:</span>{" "}
          {new Date(task.deadline).toLocaleDateString()}
        </p>
        <p>
          <span className="font-semibold">Budget:</span> ${task.budget}
        </p>
        <p>
          <span className="font-semibold">Posted By:</span> {task.userName} (
          {task.userEmail})
        </p>
      </div>

      <button
        onClick={handleBid}
        disabled={userHasBidded}
        className={`mt-8 w-full py-3 font-medium text-white rounded-lg transition ${
          userHasBidded
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        }`}
      >
        {userHasBidded ? "You have already placed a bid" : "Place a Bid"}
      </button>
    </div>
  );
};

export default TaskDetails;
