import React from "react";
import Hero from "./(main)/Hero";
import FeatureSection from "./(main)/FeatureSection";
import ProductCards from "./(main)/ProductCards";
import FAQWrapper from "./(main)/FAQsWrapper";

// import CardsConditions from "@/components/CardsConditions";
// import CardsNews from "./CardsNews";

const Home = () => {
  return (
    <div>
    <Hero />
    <ProductCards />
    <FAQWrapper />
   <FeatureSection />

    </div>
  );
};

export default Home;