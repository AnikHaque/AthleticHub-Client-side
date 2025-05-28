import React from "react";
import { Link } from "react-router-dom";

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
    image: "https://via.placeholder.com/600x300.png?text=AI+Writer",
  },
  {
    id: 6,
    title: "Design Smarter with DesignCraft",
    date: "2025-03-10",
    excerpt: "Unleashing creativity using next-gen design tools...",
    image: "https://via.placeholder.com/600x300.png?text=DesignCraft",
  },
];

const HomeBlog = () => {
  return (
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex items-end justify-between">
          <div class="flex-1 text-center lg:text-left">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Latest from blog
            </h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div class="hidden lg:flex lg:items-center lg:space-x-3">
            <button
              type="button"
              class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              type="button"
              class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
          {blogPosts.slice(0, 4).map((post) => (
            <div class="overflow-hidden bg-white rounded shadow">
              <div class="p-5">
                <div class="relative">
                  <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                    <img
                      class="object-cover w-full h-[200px]"
                      src={post.image}
                      alt=""
                    />
                  </a>

                  <div class="absolute top-4 left-4"></div>
                </div>
                <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {" "}
                  {post.date}
                </span>
                <p class="mt-5 text-2xl font-semibold">
                  <a href="#" title="" class="text-black">
                    {" "}
                    {post.title}
                  </a>
                </p>
                <p class="mt-4 text-base text-gray-600">{post.excerpt}</p>
                <a
                  href="#"
                  title=""
                  class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                >
                  Continue Reading
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/blogs">
            <button className="text-blue-600 font-semibold underline text-2xl">
              Show All Blogs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
