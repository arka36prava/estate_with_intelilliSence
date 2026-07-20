"use client";

import Hero from "@/components/Home/Hero";
import FirstImpression from "@/components/Home/FirstImpression";
import Contact from "@/components/Home/Contact";
import About from "@/components/Home/About";
import FeaturedCarousel from "@/components/Home/FeaturedCarousel";
import Testimonials from "@/components/Home/Testimonials";
export default function Home() {
  return (
    <>
      <Hero />
      <FirstImpression />
      <FeaturedCarousel />
      <About />
      <Testimonials/>
      <Contact />
    </>
  );
}