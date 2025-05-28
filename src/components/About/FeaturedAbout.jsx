import React from "react";

const FeaturedAbout = () => {
  return (
    <>
      {/* Features Section: Boxes with Icons */}
      <div className="bg-black">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-white bg-white p-5 shadow-xs transition  md:p-7 xl:p-10">
              <svg
                className="hi-outline hi-rectangle-stack mb-5 inline-block size-12 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                />
              </svg>
              <h3 className="mb-2 text-lg font-bold">
                1. UI Components Library
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                We carefully handcrafted a vast collection of UI components to
                build all kinds of web applications and websites. We keep
                designing and adding new ones with each update.
              </p>
            </div>
            <div className="rounded-lg border border-white bg-white p-5 shadow-xs transition">
              <svg
                className="hi-outline hi-cube mb-5 inline-block size-12 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
              <h3 className="mb-2 text-lg font-bold">2. Self-Hosted Web App</h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                You’ll love working with the Tailkit web app! It’s a compiled
                Vue.js based app which you can host on your own and use to
                explore and use all available UI components.
              </p>
            </div>
            <div className="rounded-lg border border-white bg-white p-5 shadow-xs transition">
              <svg
                className="hi-outline hi-cog mb-5 inline-block size-12 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                />
              </svg>
              <h3 className="mb-2 text-lg font-bold">3. Helper Tools</h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Search and copy SVG icons, build your button markup or copy your
                favorite color classes with powerful tools. More are under
                development to give you superpowers.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* END Features Section: Boxes with Icons */}
    </>
  );
};

export default FeaturedAbout;
