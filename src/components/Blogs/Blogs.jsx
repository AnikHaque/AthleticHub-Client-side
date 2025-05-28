// import React from "react";
// import useTitle from "../../hooks/useTitle";

// const blogPosts = [
//   {
//     id: 1,
//     title: "Why Firebase is Perfect for Startups",
//     date: "2025-05-01",
//     excerpt:
//       "Discover why Firebase is a top choice for rapid development and scalability...",
//     image:
//       "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png",
//   },
//   {
//     id: 2,
//     title: "Top UI Libraries for React in 2025",
//     date: "2025-04-20",
//     excerpt:
//       "Explore the most powerful and easy-to-use UI libraries available today...",
//     image: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
//   },
//   {
//     id: 3,
//     title: "Boost Your DevOps Workflow with DevOps Guard",
//     date: "2025-04-10",
//     excerpt: "Enhance your DevOps lifecycle using top-tier monitoring tools...",
//     image:
//       "https://cdn.cloudeq.com/wp-content/uploads/2023/03/15061618/dev-ops.webp",
//   },
//   {
//     id: 4,
//     title: "CloudSync: Your Data’s Best Friend",
//     date: "2025-03-30",
//     excerpt: "A deep dive into why CloudSync leads the cloud storage race...",
//     image:
//       "https://cdni.iconscout.com/illustration/premium/thumb/data-synchronise-illustration-download-in-svg-png-gif-file-formats--cloud-sync-computing-technology-web-services-pack-seo-illustrations-3324644.png",
//   },
//   {
//     id: 5,
//     title: "How AI Writer Changes the Content Game",
//     date: "2025-03-20",
//     excerpt: "Write better, faster, and smarter using cutting-edge AI tools...",
//     image:
//       "https://png.pngtree.com/png-vector/20220616/ourmid/pngtree-video-game-blogger-content-creator-background-with-man-use-headset-making-png-image_5082838.png",
//   },
//   {
//     id: 6,
//     title: "Design Smarter with DesignCraft",
//     date: "2025-03-10",
//     excerpt: "Unleashing creativity using next-gen design tools...",
//     image:
//       "https://png.pngtree.com/png-vector/20250311/ourlarge/pngtree-mosaic-equipment-decorative-design-craft-png-image_15673178.png",
//   },
// ];

// const Blogs = () => {
//   useTitle("Blogs");
//   return (
//     <div className="px-4 py-10 max-w-7xl mx-auto">
//       <h2 className="text-3xl lg:text-5xl font-bold text-center mb-20">
//         Our Blogs
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {blogPosts.map((post) => (
//           <div
//             key={post.id}
//             className="bg-white shadow-md rounded-xl overflow-hidden"
//           >
//             <img
//               src={post.image}
//               alt={post.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
//               <p className="text-sm text-gray-500 mb-2">{post.category}</p>
//               <p className="text-sm text-gray-700">{post.excerpt}</p>
//               <button className="mt-4 btn btn-sm btn-primary">Read More</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blogs;

import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";

const blogPosts = [
  {
    id: 1,
    title: "Why Firebase is Perfect for Startups",
    date: "2025-05-01",
    excerpt:
      "Discover why Firebase is a top choice for rapid development and scalability...",
    image:
      "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png",
  },
  {
    id: 2,
    title: "Top UI Libraries for React in 2025",
    date: "2025-04-20",
    excerpt:
      "Explore the most powerful and easy-to-use UI libraries available today...",
    image: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
  },
  {
    id: 3,
    title: "Boost Your DevOps Workflow with DevOps Guard",
    date: "2025-04-10",
    excerpt: "Enhance your DevOps lifecycle using top-tier monitoring tools...",
    image:
      "https://cdn.cloudeq.com/wp-content/uploads/2023/03/15061618/dev-ops.webp",
  },
  {
    id: 4,
    title: "CloudSync: Your Data’s Best Friend",
    date: "2025-03-30",
    excerpt: "A deep dive into why CloudSync leads the cloud storage race...",
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/data-synchronise-illustration-download-in-svg-png-gif-file-formats--cloud-sync-computing-technology-web-services-pack-seo-illustrations-3324644.png",
  },
  {
    id: 5,
    title: "How AI Writer Changes the Content Game",
    date: "2025-03-20",
    excerpt: "Write better, faster, and smarter using cutting-edge AI tools...",
    image:
      "https://png.pngtree.com/png-vector/20220616/ourmid/pngtree-video-game-blogger-content-creator-background-with-man-use-headset-making-png-image_5082838.png",
  },
  {
    id: 6,
    title: "Design Smarter with DesignCraft",
    date: "2025-03-10",
    excerpt: "Unleashing creativity using next-gen design tools...",
    image:
      "https://png.pngtree.com/png-vector/20250311/ourlarge/pngtree-mosaic-equipment-decorative-design-craft-png-image_15673178.png",
  },
];

const POSTS_PER_PAGE = 3;

const Blogs = () => {
  useTitle("Blogs");

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = blogPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl lg:text-5xl font-bold text-center mb-20">
        All Blogs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-xl overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
              <p className="text-sm text-gray-700">{post.excerpt}</p>
              <button className="mt-4 btn btn-sm btn-primary">Read More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-10">
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
    </div>
  );
};

export default Blogs;
