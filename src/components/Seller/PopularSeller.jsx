import React from "react";

const sellers = [
  {
    name: "Harry Olson",
    avatar:
      "https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-pixabay-220453-300x300.jpg",
    rate: "$40.00",
    rating: 5,
    tags: ["Student", "Australia"],
  },
  {
    name: "David Parker",
    avatar:
      "https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-andrea-piacquadio-3777566-300x300.jpg",
    rate: "$25.00",
    rating: 5,
    tags: ["Individual", "Qatar"],
  },
  {
    name: "Chenai Simon",
    avatar:
      "https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-andrea-piacquadio-874158-300x300.jpg",
    rate: "$55.00",
    rating: 4.5,
    tags: ["Group", "Australia"],
  },
  {
    name: "Bayley Robert",
    avatar:
      "https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-mentatdgt-1138903-300x300.jpg",
    rate: "$35.00",
    rating: 5,
    tags: ["Student", "Germany"],
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  return (
    <div className="flex text-yellow-400 mt-2">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i}>★</span>
      ))}
      {halfStar && <span>☆</span>}
    </div>
  );
};

const PopularSellers = () => {
  return (
    <section className="py-16 bg-black text-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-3 text-white">
          Most popular sellers
        </h2>
        <p className="max-w-2xl mx-auto text-base text-white/80 mb-12">
          Uniquely promote adaptive quality vectors rather than stand-alone
          e-markets. Pontificate alternative architectures whereas iterate.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sellers.map((seller, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-2xl p-6 shadow-md flex flex-col items-center"
            >
              <img
                src={seller.avatar}
                alt={seller.name}
                className="w-40 h-40 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold flex items-center gap-1">
                {seller.name}
                <span className="text-blue-500">✔</span>
              </h3>
              <p className="text-sm text-gray-500">
                Hourly rate: {seller.rate}
              </p>
              <StarRating rating={seller.rating} />
              <div className="flex gap-2 mt-4 flex-wrap justify-center">
                {seller.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-full flex items-center gap-1"
                  >
                    <span>👤</span>
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSellers;
