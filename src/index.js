
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Navigation } from './components/marketing/Navigation';
import { HeroSection } from './components/marketing/HeroSection';
import { FeaturesSection } from './components/marketing/FeaturesSection';
import { HowItWorks } from './components/marketing/HowItWorks';
import { ContactSection } from './components/marketing/ContactSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <ContactSection />
    </div>
  </React.StrictMode>
);
