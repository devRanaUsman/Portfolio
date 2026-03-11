import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import WhyMe from './components/sections/WhyMe';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  // Initialize scroll reveal animations globally
  useScrollReveal();

  return (
    <div id="app-wrapper" className="w-full min-h-screen overflow-x-hidden relative text-slate-200">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <WhyMe />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
