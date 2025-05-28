import React, { useState } from "react";

const successStories = [
  {
    id: 1,
    name: "Emily Carter",
    role: "Product Manager, DevFlow Inc.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    companyLogo:
      "https://w7.pngwing.com/pngs/388/444/png-transparent-web-development-responsive-web-design-php-development-tools-software-development-web-design-web-design-development-responsive-web-design-thumbnail.png",
    challenge: "Manual deployment and error-prone CI/CD pipelines.",
    solution: "Integrated our DevOps Guard monitoring tool.",
    result: "Reduced deployment failures by 70% and saved 15 hours/week.",
  },
  {
    id: 2,
    name: "Liam Nguyen",
    role: "Creative Director, PixelPeak",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    companyLogo:
      "https://w7.pngwing.com/pngs/527/745/png-transparent-web-development-graphic-design-web-design-web-design-electronics-gadget-search-engine-optimization-thumbnail.png",
    challenge: "Design collaboration was scattered and inefficient.",
    solution: "Adopted DesignCraft for cloud-based team design.",
    result: "Cut design turnaround time by 40% with real-time updates.",
  },
  // You can add more stories here...
];

const STORIES_PER_PAGE = 1;

export default function Success() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(successStories.length / STORIES_PER_PAGE);

  const paginatedStories = successStories.slice(
    (currentPage - 1) * STORIES_PER_PAGE,
    currentPage * STORIES_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800">
          Real stories from customers
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Who transformed their workflow with our services.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {paginatedStories.map((story) => (
          <div
            key={story.id}
            className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={story.avatar}
                alt={story.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{story.name}</h3>
                <p className="text-sm text-gray-500">{story.role}</p>
              </div>
              <img
                src={story.companyLogo}
                alt="Company Logo"
                className="ml-auto w-12 h-12 object-contain"
              />
            </div>
            <div className="text-sm text-gray-700 space-y-3">
              <p>
                <strong className="text-gray-800">Challenge:</strong>{" "}
                {story.challenge}
              </p>
              <p>
                <strong className="text-gray-800">Solution:</strong>{" "}
                {story.solution}
              </p>
              <p>
                <strong className="text-gray-800">Result:</strong>{" "}
                {story.result}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-2 mt-12">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-sm btn-outline"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`btn btn-sm ${
              page === currentPage ? "btn-primary" : "btn-outline"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn btn-sm btn-outline"
        >
          Next
        </button>
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold mb-2">
          You could be our next success story.
        </h3>
        <p className="text-gray-600 mb-4">
          Discover how our platform can improve your workflow too.
        </p>
        <a
          href="/products"
          className="btn btn-primary text-white px-6 py-2 rounded-full"
        >
          Explore Tools
        </a>
      </div>
    </div>
  );
}
