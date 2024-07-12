import React from 'react';
import HomeIntro from '../components/HomeIntro';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import HowItWorksSection from '../components/HowItWorksSection';
import BenefitsSection from '../components/BenefitsSection';

const HomePage = () => {
  return (
    <>
      <HomeIntro />  
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
