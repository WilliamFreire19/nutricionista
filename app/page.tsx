'use client';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProcessSection from '../components/ProcessSection';
import BeforeAfterSection from '../components/BeforeAfterSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ServicesSection from '../components/ServicesSection';
import TargetAudienceSection from '../components/TargetAudienceSection';
import DifferentialsSection from '../components/DifferentialsSection';
import FAQSection from '../components/FAQSection';
import FinalCTASection from '../components/FinalCTASection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <ServicesSection />
      <TargetAudienceSection />
      <DifferentialsSection />
      <FAQSection />
      <FinalCTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}