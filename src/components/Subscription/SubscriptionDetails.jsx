// pages/SubscriptionDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import subscriptions from "../../../public/data/subscription.json";

const SubscriptionDetail = () => {
  const { id } = useParams();
  const service = subscriptions.find((item) => item.id === parseInt(id));
  const [reviews, setReviews] = useState([]);
  const [input, setInput] = useState({ review: "", rating: "" });

  const handleSubmit = () => {
    if (input.review && input.rating >= 1 && input.rating <= 5) {
      setReviews([...reviews, input]);
      setInput({ review: "", rating: "" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="card bg-base-100 shadow-md">
        <figure>
          <img
            src={service.thumbnail}
            alt={service.name}
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{service.name}</h2>
          <p className="text-sm">Category: {service.category}</p>
          <p className="text-sm">
            Price: {service.price} / {service.frequency}
          </p>

          <div className="mt-6">
            <input
              type="text"
              placeholder="Write your review"
              className="input input-bordered w-full mb-3"
              value={input.review}
              onChange={(e) => setInput({ ...input, review: e.target.value })}
            />
            <input
              type="number"
              min="1"
              max="5"
              placeholder="Rating (1-5)"
              className="input input-bordered w-full mb-3"
              value={input.rating}
              onChange={(e) => setInput({ ...input, rating: e.target.value })}
            />
            <button className="btn btn-success w-full" onClick={handleSubmit}>
              Submit Review
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">Reviews</h3>
            <ul className="mt-2 space-y-2">
              {reviews.length === 0 ? (
                <p className="text-sm text-gray-500">No reviews yet.</p>
              ) : (
                reviews.map((rev, index) => (
                  <li key={index} className="p-3 border rounded">
                    <p className="font-medium">Rating: {rev.rating}/5</p>
                    <p>{rev.review}</p>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDetail;
