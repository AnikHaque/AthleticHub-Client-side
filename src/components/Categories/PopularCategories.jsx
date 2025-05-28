import React from "react";

const categories = [
  {
    title: "Graphics Design",
    image:
      "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-6-400x400.jpg",
  },
  {
    title: "Hosting",
    image:
      "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-10-400x400.jpg",
  },
  {
    title: "Marketing",
    image:
      "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-3-400x400.jpg",
  },
  {
    title: "Website Development",
    image:
      "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-1-400x400.jpg",
  },
  {
    title: "Link Building",
    image:
      "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-7-400x400.jpg",
  },
];

const PopularCategories = () => {
  return (
    <section
      className="py-16 text-center"
      style={{ color: "var(--text-color)" }}
    >
      <h2
        className="text-4xl font-bold"
        style={{ color: "var(--heading-color, var(--text-color))" }}
      >
        Popular Categories
      </h2>
      <p
        className="mt-4 max-w-xl mx-auto"
        style={{ color: "var(--text-muted-color, var(--text-color))" }}
      >
        Uniquely promote adaptive quality vectors rather than stand-alone
        e-markets. Pontificate alternative architectures whereas iterate.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="w-60 h-96 rounded-2xl overflow-hidden relative shadow-lg"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-4 left-4 p-4 text-xl font-semibold drop-shadow-lg"
              style={{
                color: "var(--overlay-text-color, white)",
                backgroundColor: "var(--overlay-bg-color, rgba(0,0,0,0.7))",
              }}
            >
              {category.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
