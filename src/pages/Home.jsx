import Hero from "../components/Hero/Hero";
import PopularCategories from "../components/Categories/PopularCategories";
import AppPromo from "../components/AppPromo/AppPromo";
import Youtube from "../components/Youtube/Youtube";
import ServiceCards from "../components/Tasks/Featured";
import ReviewsCarousel from "../components/Tasks/ReviewsCarousel";

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
      <ReviewsCarousel></ReviewsCarousel>
    </div>
  );
};

export default Home;
