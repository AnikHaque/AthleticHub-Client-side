import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Mahmudul Haque",
    role: "Fullstack Developer",
    feedback: "The event was amazing and the organization was top-notch.",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Sarah Ali",
    role: "UI/UX Designer",
    feedback: "I loved the atmosphere! Highly recommend to everyone.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Riyad Ahmed",
    role: "Software Engineer",
    feedback: "A smooth booking experience and awesome people!",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    name: "Amina K.",
    role: "Frontend Developer",
    feedback: "This was my first time participating, and it was thrilling!",
    image: "https://i.pravatar.cc/150?img=14",
  },
  {
    name: "Anisur Rahman",
    role: "Event Organizer",
    feedback: "The system is easy to manage and fast to respond.",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Lisa K.",
    role: "Athlete",
    feedback: "I enjoyed every moment — thanks for organizing!",
    image: "https://i.pravatar.cc/150?img=16",
  },
];

export default function ReviewsCarousel() {
  return (
    <div className="py-16 px-52 bg-black">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Top Reviews
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md p-6 rounded-xl h-full">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full mr-4 border"
                />
                <div>
                  <h4 className="font-semibold text-lg">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">“{review.feedback}”</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
