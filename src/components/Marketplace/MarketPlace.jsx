import React from "react";

const MarketplaceIntro = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Section - Images */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="bg-yellow-300 rounded-[60px] overflow-hidden">
            <img
              src="https://marketplace.exertiowp.com/wp-content/uploads/2021/01/OB11-400x270.jpg"
              alt="Happy Man"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-red-200 rounded-[60px]"></div>
          <div className="bg-blue-200 rounded-[60px] overflow-hidden">
            <img
              src="https://i.ibb.co/jf5tkB5/pointing-man.png"
              alt="Pointing Man"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-purple-200 rounded-[60px]"></div>
        </div>
      </div>

      {/* Right Section - Text */}
      <div className="w-full md:w-1/2">
        <p className="text-sm text-gray-500 mb-2">Want to build</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Amazing Marketplace Website in Minutes ?
        </h2>
        <p className="text-gray-600 mb-4">
          Experience state-of-the-art marketplace platform with the Exertio. We
          combine the experience of our global community around the globe for a
          best marketplace theme.
        </p>
        <p className="text-gray-600 mb-6">
          With Exertio, you can develop a website for remote freelancers that
          will provide their best to the clients who are looking for remote
          resources.
        </p>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-red-500">✔</span>
            <span>Get commission on project or services</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-500">✔</span>
            <span>Services addons and micro earnings</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-500">✔</span>
            <span>Communicate easily with live chat</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-500">✔</span>
            <span>Send media & emoji in chat</span>
          </div>
        </div>

        {/* Button */}
        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
          Read More
        </button>
      </div>
    </section>
  );
};

export default MarketplaceIntro;
