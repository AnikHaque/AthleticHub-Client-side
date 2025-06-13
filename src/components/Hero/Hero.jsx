import React from "react";

const slides = [
  {
    id: 1,
    image:
      "https://demo2.themelexus.com/adventis/wp-content/uploads/2023/10/h1-bg02.jpg",
    title: "The Easiest Way to Get Your New Task",
    desc: "Work with talented people at the most affordable price to get the most out of your time and cost",
    btn1: "Subscribe Now",
    btn2: "Learn More",
  },
  {
    id: 2,
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20220427/pngtree-home-office-banner-freelance-work-image_1091574.jpg",
    title: "The Easiest Way to Get Your New Job",
    desc: "Work with talented people at the most affordable price to get the most out of your time and cost",
    btn1: "Explore",
    btn2: "Subscribe",
  },
  {
    id: 3,
    image:
      "https://cdn.vectorstock.com/i/1000v/40/06/futuristic-devops-process-banner-vector-41714006.jpg",
    title: "Essential Security Kits",
    desc: "Gear up for your next outdoor devops in style.",
    btn1: "Get Subscription",
    btn2: "See Tips",
  },
];

const Hero = () => {
  return (
    <div className="carousel w-full">
      {slides.map((slide, index) => {
        const prev = (index - 1 + slides.length) % slides.length;
        const next = (index + 1) % slides.length;

        return (
          <div
            key={slide.id}
            id={`slide${slide.id}`}
            className="carousel-item relative w-full h-[80vh]"
          >
            <img
              src={slide.image}
              className="w-full h-full object-cover"
              alt={`Slide ${slide.id}`}
            />

            {/* Centered overlay content */}
            {/* Centered overlay content */}
            <div className="absolute inset-0 bg-[rgba(255,165,0,0.40)] flex justify-center items-center">
              <div className="text-white text-center px-4 md:px-8">
                <h2 className="text-3xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
                  {slide.desc}
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white font-semibold transition">
                    {slide.btn1}
                  </button>
                  <button className="bg-white hover:bg-gray-200 text-blue-600 px-6 py-2 rounded font-semibold transition">
                    {slide.btn2}
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <a href={`#slide${slides[prev].id}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#slide${slides[next].id}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
