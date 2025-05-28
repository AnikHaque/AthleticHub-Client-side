import React from "react";
import { Link } from "react-router-dom";

const SubscriptionCard = ({ service }) => {
  return (
    <div
      data-aos="zoom-in-down"
      className="card lg:max-w-lg lg:h-[400px] bg-base-100 shadow-sm"
    >
      <figure>
        <img
          src={service.thumbnail}
          alt={service.name}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <span className="badge badge-md badge-warning">{service.category}</span>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{service.name}</h2>
          <span className="text-base font-semibold">
            {service.price}/{service.frequency}
          </span>
        </div>

        <div className="mt-4">
          <Link to={`/subscriptions/${service.id}`}>
            <button className="btn btn-primary btn-block">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Check = ({ disabled = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`size-4 me-2 inline-block ${
      disabled ? "text-base-content/50" : "text-success"
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default SubscriptionCard;
