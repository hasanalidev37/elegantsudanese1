
import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/home/Hero";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Services from "../components/home/Services";
import About from "../components/home/About";
import Testimonials from "../components/home/Testimonials";
import GalleryPreview from "../components/home/GalleryPreview";
import CTA from "../components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <WhyChooseUs />
      <Services />
      <About />
      <GalleryPreview />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
