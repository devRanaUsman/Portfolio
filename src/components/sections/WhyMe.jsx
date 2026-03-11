import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';

const getWhyMeIcon = (title) => {
  switch (title) {
    case "Clear Communication":
      return (
        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    case "100% Reliable":
      return (
        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "Clean Code":
      return (
        <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "Fast Delivery":
      return (
        <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    default:
      return null;
  }
};

const getWhyMeColorBg = (color) => {
  const colors = {
    cyan: "bg-gradient-to-br from-cyan-400/20 to-blue-500/20",
    green: "bg-gradient-to-br from-green-400/20 to-emerald-500/20",
    indigo: "bg-gradient-to-br from-indigo-400/20 to-purple-500/20",
    orange: "bg-gradient-to-br from-orange-400/20 to-amber-500/20"
  };
  return colors[color] || colors.cyan;
};

const WhyMe = () => {
  const { whyMe } = portfolioData;

  return (
    <section id="why-me" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      <div className="floating-shape w-96 h-96 bg-purple-500/10 -bottom-48 left-1/4"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeading 
          number="05" 
          subtitle="Why choose me" 
          title1="Why Work" 
          title2="With Me" 
          description="What makes me different from other developers" 
        />
        
        <div className="section-animate grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyMe.map((reason, index) => (
            <GlassCard key={index} className="text-center" hover={true}>
              <div className={`check-icon w-16 h-16 mx-auto mb-6 rounded-2xl ${getWhyMeColorBg(reason.color)} flex items-center justify-center`}>
                {getWhyMeIcon(reason.title)}
              </div>
              <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
              <p className="text-slate-400 text-sm">
                {reason.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
