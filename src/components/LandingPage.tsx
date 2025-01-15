import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import StatsSection from "./StatsSection";
import AppSection from "./AppSection";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import ContactSection from "./ContactSection";
import LandingFooter from "./LandingFooter";

export const LandingPage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <StatsSection />
      <AppSection />
      <Testimonials />
      <Faq />
      <ContactSection />
      <LandingFooter />
    </main>
  );
};
