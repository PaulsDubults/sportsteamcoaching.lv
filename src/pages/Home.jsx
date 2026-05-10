import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import WhatIsCoaching from '../components/landing/WhatIsCoaching';
import WhatYouGet from '../components/landing/WhatYouGet';
import StakeholderBenefits from '../components/landing/StakeholderBenefits';
import ProblemsSolved from '../components/landing/ProblemsSolved';
import ProcessSection from '../components/landing/ProcessSection';
import PricingSection from '../components/landing/PricingSection';
import AboutCoach from '../components/landing/AboutCoach';
import Testimonials from '../components/landing/Testimonials';
import FAQSection from '../components/landing/FAQSection';
import CTABanner from '../components/landing/CTABanner';
import ManifestoBanner from '../components/landing/ManifestoBanner';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <HeroSection />
      <ManifestoBanner />
      <WhatIsCoaching />
      <WhatYouGet />
      <StakeholderBenefits />
      <ProblemsSolved />
      <ProcessSection />
      <PricingSection />
      <AboutCoach />
      <CTABanner />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}