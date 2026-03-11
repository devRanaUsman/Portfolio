import React from 'react';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';

const About = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      <div className="floating-shape w-80 h-80 bg-indigo-500/10 -top-40 right-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="section-animate grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Visual side */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 backdrop-blur-sm border border-indigo-500/20"></div>
              <div className="absolute inset-4 rounded-2xl glass-card flex items-center justify-center overflow-hidden">
                 {/* Replace this src with standard image path or keep relative to index */}
                 <img className="w-full h-full object-cover object-center" src="./Professional headshot with neutral tones.png" alt="RM Usman headshot" />
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 glass rounded-2xl flex items-center justify-center" style={{ animation: 'float 6s ease-in-out infinite' }}>
                <span className="text-3xl">⚛️</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 glass rounded-2xl flex items-center justify-center" style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '-2s' }}>
                <span className="text-3xl">🚀</span>
              </div>
            </div>
          </div>
          
          {/* Content side */}
          <div className="space-y-6">
            <SectionHeading 
              number="01" 
              subtitle="Get to know me" 
              title1="About" 
              title2="Me" 
              center={false} 
            />
            
            <p className="text-lg text-slate-400 leading-relaxed">
              I'm a passionate freelance web developer with over 1+ year of experience crafting digital solutions that make an impact. Based remotely and working with clients worldwide, I specialize in turning complex ideas into elegant, user-friendly websites.
            </p>
            <p className="text-slate-400 leading-relaxed">
              What sets me apart? I don't just write code — I solve problems. Every project I take on receives my full attention and dedication. I believe in clear communication, transparent timelines, and delivering results that exceed expectations.
            </p>
            <p className="text-slate-400 leading-relaxed">
              When you work with me, you're not just hiring a developer — you're gaining a partner who genuinely cares about your success. I've helped businesses from startups to established brands achieve their digital goals, and I'm ready to do the same for you.
            </p>
            
            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <GlassCard className="p-4" hover={false}>
                <div className="text-2xl font-bold gradient-text">15+</div>
                <div className="text-sm text-slate-400">Completed Projects</div>
              </GlassCard>
              <GlassCard className="p-4" hover={false}>
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-slate-400">Happy Clients</div>
              </GlassCard>
              <GlassCard className="p-4" hover={false}>
                <div className="text-2xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-slate-400">Support Available</div>
              </GlassCard>
              <GlassCard className="p-4" hover={false}>
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-sm text-slate-400">Client Focused</div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
