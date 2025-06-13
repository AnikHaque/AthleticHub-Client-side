import React from "react";

const AppPromo = () => {
  return (
    <section className=" py-16" style={{ color: "var(--text-color)" }}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* App Preview Image */}
        <div className="flex justify-center">
          <img
            src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/12/app.png"
            alt="App Preview"
            className="max-w-full rounded-xl"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--heading-color, var(--text-color))" }}
          >
            Get the best mobile <br />
            <span
              className=""
              style={{ color: "var(--text-muted-color, var(--text-color))" }}
            >
              Athletic App
            </span>
          </h2>
          <p
            className="mb-6 max-w-lg"
            style={{ color: "var(--text-muted-color, var(--text-color))" }}
          >
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide.
          </p>

          {/* Store Buttons */}
          <div className="flex gap-4">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="w-40"
              />
            </a>
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="w-40"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;
