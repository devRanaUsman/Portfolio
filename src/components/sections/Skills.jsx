import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';

const Skills = () => {
  const { skills } = portfolioData;

  const renderSkillBars = (skillSet) => (
    <div className="space-y-6">
      {skillSet.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between mb-2">
            <span className="text-slate-300">{skill.name}</span>
            <span className="text-indigo-400 font-mono text-sm">{skill.percentage}%</span>
          </div>
          <div className="skill-bar">
            {/* Class name 'animate' toggled by IntersectionObserver via useScrollReveal */}
            <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 hero-bg"></div>
      <div className="floating-shape w-96 h-96 bg-purple-500/10 top-0 -left-48"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeading 
          number="02" 
          subtitle="Technical expertise" 
          title1="My" 
          title2="Skills" 
          description="Proficient in modern technologies and frameworks to deliver cutting-edge solutions" 
        />
        
        <div className="section-animate grid md:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <GlassCard>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Frontend Development</h3>
            </div>
            {renderSkillBars(skills.frontend)}
          </GlassCard>

          {/* Backend Skills */}
          <GlassCard>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Backend Development</h3>
            </div>
            {renderSkillBars(skills.backend)}
          </GlassCard>
        </div>
        
        {/* Tech icons */}
        <div className="section-animate mt-16">
          <div className="text-center mb-8">
            <p className="text-slate-500 text-sm uppercase tracking-widest">Technologies I Work With</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.technologies.map((tech, index) => (
              <div key={index} className="glass px-6 py-3 rounded-full text-sm font-mono text-slate-300 hover:border-indigo-500/50 transition-colors cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
