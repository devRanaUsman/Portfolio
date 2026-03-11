import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';

const getServiceIcon = (title) => {
  switch (title) {
    case "Website Development":
      return (
        <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      );
    case "Responsive Design":
      return (
        <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case "Landing Pages":
      return (
        <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      );
    case "Bug Fixing":
      return (
        <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "API Integration":
      return (
        <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case "Performance Optimization":
      return (
        <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    default:
      return null;
  }
};

const getIconBgColor = (color) => {
  const colors = {
    indigo: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
    cyan: "bg-gradient-to-br from-cyan-400/20 to-blue-500/20",
    purple: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    green: "bg-gradient-to-br from-green-400/20 to-emerald-500/20",
    orange: "bg-gradient-to-br from-orange-400/20 to-amber-500/20",
    red: "bg-gradient-to-br from-red-400/20 to-rose-500/20",
  };
  return colors[color] || colors.indigo;
};

const Services = () => {
  const { services } = portfolioData;

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      <div className="floating-shape w-72 h-72 bg-cyan-400/10 bottom-0 right-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeading 
          number="03" 
          subtitle="What I offer" 
          title1="My" 
          title2="Services" 
          description="Comprehensive web development solutions tailored to your unique needs" 
        />
        
        <div className="section-animate grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <GlassCard key={index} hover={true}>
              <div className={`service-icon w-14 h-14 rounded-xl ${getIconBgColor(service.color)} flex items-center justify-center mb-6`}>
                {getServiceIcon(service.title)}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
