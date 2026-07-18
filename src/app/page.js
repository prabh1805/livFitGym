"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FacilitiesSection from '../components/FacilitiesSection';
import MembershipSection from '../components/MembershipSection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import GallerySection from '../components/GallerySection';
import LocationSection from '../components/LocationSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#050505] relative selection:bg-accent/30 selection:text-white">
      <Navbar />
      <HeroSection />
      <FacilitiesSection />
      <MembershipSection />
      <SuccessStoriesSection />
      <GallerySection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
