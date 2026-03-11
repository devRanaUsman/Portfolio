import React, { useEffect, useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Button from '../ui/Button';

const Hero = () => {
  const { hero } = portfolioData;

  // Counter logic specific to Hero
  const [counts, setCounts] = useState(hero.stats.map(() => 0));

  useEffect(() => {
    hero.stats.forEach((stat, index) => {
      const target = parseInt(stat.value);
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += step;
        if (current < target) {
          setCounts(prev => {
            const next = [...prev];
            next[index] = Math.floor(current);
            return next;
          });
          requestAnimationFrame(updateCounter);
        } else {
          setCounts(prev => {
            const next = [...prev];
            next[index] = target;
            return next;
          });
        }
      };

      // Delay animation slightly to allow initial render
      setTimeout(updateCounter, 500);
    });
  }, [hero.stats]);

  return (
    <section id="hero" className="relative min-h-screen hero-bg  grid-pattern flex items-center">
      {/* Floating shapes */}
      <div className="floating-shape w-96 h-96 bg-indigo-500/20 top-20 -left-48" style={{ animationDelay: '0s' }}></div>
      <div className="floating-shape w-72 h-72 bg-cyan-400/15 bottom-40 -right-36" style={{ animationDelay: '-5s' }}></div>
      <div className="floating-shape w-64 h-64 bg-purple-500/10 top-1/2 left-1/2" style={{ animationDelay: '-10s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 section-animate visible">
            {/* Terminal-style intro */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="font-mono text-slate-300">Available for freelance work</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-slate-100">Hi, I'm </span>
                <span className="gradient-text glow-text">{hero.name}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-slate-300">{hero.title}</h2>
            </div>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              {hero.tagline}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-4">
              {hero.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold gradient-text">
                    {counts[i]}{stat.suffix}
                  </div>
                  <div className="text-sm text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="#contact" variant="primary">
                Start Your Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button href="#portfolio" variant="secondary">
                View My Work
              </Button>
            </div>
          </div>

          {/* Code terminal illustration */}
          <div className="relative hidden lg:block section-animate visible">
            <div className="glass-card rounded-2xl p-6 glow-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-4 text-sm text-slate-500 font-mono">developer.js</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> = {'{'}</div>
                <div className="pl-4"><span className="text-slate-400">name:</span> <span className="text-green-300">"{hero.name}"</span>,</div>
                <div className="pl-4"><span className="text-slate-400">role:</span> <span className="text-green-300">"{hero.title}"</span>,</div>
                <div className="pl-4"><span className="text-slate-400">passion:</span> <span className="text-green-300">"Building Dreams"</span>,</div>
                <div className="pl-4"><span className="text-slate-400">skills:</span> [</div>
                <div className="pl-8">
                  <span className="text-yellow-300">"React"</span>, <span className="text-yellow-300">"Node.js"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-yellow-300">"TypeScript"</span>, <span className="text-yellow-300">"Python"</span>
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4"><span className="text-slate-400">available:</span> <span className="text-cyan-300">true</span></div>
                <div>{'};'}</div>
                <div className="mt-4 text-slate-500">
                  // Ready to create something amazing<span className="cursor-blink">|</span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="text-sm">⚡ Fast Delivery</span>
            </div>
            <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
              <span className="text-sm">🎯 100% Dedication</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
        <a href="#about" className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
