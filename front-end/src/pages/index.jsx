import React from 'react';
import Header from '../components/Header';
import HomeIntro from '../components/HomeIntro';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import ClientsSection from '../components/ClientsSection';

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeIntro />  
      <ClientsSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
