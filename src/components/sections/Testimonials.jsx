import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';

const getInitialsBg = (color) => {
  const backgrounds = {
    indigo: "bg-gradient-to-br from-indigo-500 to-purple-500",
    cyan: "bg-gradient-to-br from-cyan-400 to-blue-500",
    emerald: "bg-gradient-to-br from-emerald-400 to-teal-500",
  };
  return backgrounds[color] || backgrounds.indigo;
};

const Testimonials = () => {
  const { testimonials } = portfolioData;

  // Star SVG helper
  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 hero-bg"></div>
      <div className="floating-shape w-72 h-72 bg-cyan-400/10 top-20 left-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeading 
          number="06" 
          subtitle="Client feedback" 
          title1="What Clients" 
          title2="Say" 
          description="Don't just take my word for it — hear from people I've worked with" 
        />
        
        <div className="section-animate grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card glass-card rounded-2xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {renderStars()}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${getInitialsBg(testimonial.color)} flex items-center justify-center text-white font-semibold`}>
                  {testimonial.id}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Platform badges */}
        <div className="section-animate text-center mt-12">
          <p className="text-slate-500 text-sm mb-4">Find me on</p>
          <div className="flex justify-center gap-6">
            <div className="glass px-6 py-3 rounded-full text-slate-300 text-sm">🟢 Fiverr</div>
            <div className="glass px-6 py-3 rounded-full text-slate-300 text-sm">🟢 Upwork</div>
            <div className="glass px-6 py-3 rounded-full text-slate-300 text-sm">🟢 Legit</div>
            <div className="glass px-6 py-3 rounded-full text-slate-300 text-sm">🟢 Guru</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
