import React from "react";
import Hero from "../components/Hero/Hero";
import PopularCategories from "../components/Categories/PopularCategories";
import ServiceCards from "../components/Tasks/FeaturedTasks";
import PopularSellers from "../components/Seller/PopularSeller";
import AppPromo from "../components/AppPromo/AppPromo";
import Youtube from "../components/Youtube/Youtube";

const Home = () => {
  return (
    <div
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <Hero />
      <PopularCategories />
      <ServiceCards />
      <Youtube></Youtube>
      <AppPromo />
    </div>
  );
};

export default Home;
