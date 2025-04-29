import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import TrainingSection from '@/components/TrainingSection';
import CertificatesSection from '@/components/CertificatesSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div className="fade-in-section">
          <HeroSection />
        </div>
        <div className="fade-in-section">
          <AboutSection />
        </div>
        <div className="fade-in-section">
          <SkillsSection />
        </div>
        <div className="fade-in-section">
          <ProjectsSection />
        </div>
        <div className="fade-in-section">
          <TrainingSection />
        </div>
        <div className="fade-in-section">
          <CertificatesSection />
        </div>
        <div className="fade-in-section">
          <EducationSection />
        </div>
        <div className="fade-in-section">
          <ContactSection />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
