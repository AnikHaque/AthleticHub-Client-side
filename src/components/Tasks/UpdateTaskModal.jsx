import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const UpdateTaskModal = ({ task, showModal, setShowModal, token }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [budget, setBudget] = useState("");

  // If task is passed, initialize form fields with task data
  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setCategory(task.category || "");
      setDescription(task.description || "");
      setDeadline(task.deadline || "");
      setBudget(task.budget || "");
    }
  }, [task]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `https://freelancer-website-server.vercel.app/api/update-task/${task._id}`,
        {
          title,
          category,
          description,
          deadline,
          budget,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.fire("Success", res.data.message, "success");
      setShowModal(false); // Close the modal after successful update
    } catch (err) {
      Swal.fire(
        "Error",
        err.response?.data?.message || "Update failed",
        "error"
      );
    }
  };

  if (!showModal || !task) return null; // Don't render modal if not shown or task is null

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Update Task</h2>
        <form onSubmit={handleUpdate}>
          <div>
            <label>Task Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label>Deadline</label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Budget</label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            />
          </div>
          <div className="buttons">
            <button type="submit">Update</button>
            <button type="button" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTaskModal;
