import React from 'react';
import'./index.css';

import HeroSection from '../src/homepages/HeroSection';
import AboutUs from '../src/homepages/AboutUs';
import AdventuresSection from '../src/homepages/AdventuresSection';
import Testimonials from '../src/homepages/Testimonials';
import CallToAction from '../src/homepages/CallToAction';
// import Footer from '../src/homepages/Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      
      <HeroSection />
      <AboutUs />
      <AdventuresSection />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;