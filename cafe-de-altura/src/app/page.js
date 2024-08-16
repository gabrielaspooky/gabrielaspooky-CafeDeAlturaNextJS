import React from "react";
import Hero from "./(main)/Hero";
import FeatureSection from "./(main)/FeatureSection";
import ProductCards from "./(main)/ProductCards";
import FAQWrapper from "./(main)/FAQsWrapper";
import ContactForm from "./(main)/ContactForm";
import { Footer } from "../../components/ui/Footer";

// import CardsConditions from "@/components/CardsConditions";
// import CardsNews from "./CardsNews";

const Home = () => {
  return (
    <div>
    <Hero />
    <ProductCards />
    <FAQWrapper />
   <FeatureSection />
    <ContactForm />
    {/* <Footer /> */}

    </div>
  );
};

export default Home;