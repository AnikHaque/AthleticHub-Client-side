import React from "react";
import subscriptions from "../../../public/data/subscription.json";
import SubscriptionCard from "../Subscription/SubscriptionCard";
const Subscription = () => {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Subscription Services
      </h2>
      <div className="flex flex-wrap  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {subscriptions.map((service) => (
          <SubscriptionCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Subscription;
