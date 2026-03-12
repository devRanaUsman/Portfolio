import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';

const getPortfolioIcon = (type) => {
  switch (type) {
    case "E-Commerce":
      return (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      );
    case "SaaS Dashboard":
      return (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    case "EdTech":
      return (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case "Food Delivery":
      return (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case "Healthcare":
      return (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case "Real Estate":
      return (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    default:
      return null;
  }
};

const getGradientBg = (color) => {
  const gradients = {
    indigo: "bg-gradient-to-br from-indigo-600 to-purple-600",
    cyan: "bg-gradient-to-br from-cyan-500 to-blue-600",
    emerald: "bg-gradient-to-br from-emerald-500 to-teal-600",
    orange: "bg-gradient-to-br from-orange-500 to-red-600",
    pink: "bg-gradient-to-br from-pink-500 to-rose-600",
    violet: "bg-gradient-to-br from-violet-500 to-purple-600",
  };
  return gradients[color] || gradients.indigo;
};

const getBadgeClasses = (color) => {
  const badges = {
    indigo: "bg-indigo-500/20 text-indigo-300",
    cyan: "bg-cyan-500/20 text-cyan-300",
    emerald: "bg-emerald-500/20 text-emerald-300",
    orange: "bg-orange-500/20 text-orange-300",
    pink: "bg-pink-500/20 text-pink-300",
    violet: "bg-violet-500/20 text-violet-300",
  };
  return badges[color] || badges.indigo;
}

const ProjectImageCover = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered && project.images && project.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isHovered, project?.images]);

  if (!project.images || project.images.length === 0) {
    return (
      <div className={`aspect-video ${getGradientBg(project.color)} relative`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
              {getPortfolioIcon(project.type)}
            </div>
            <span className="text-white/80 text-sm font-mono">{project.type}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="aspect-video relative overflow-hidden bg-slate-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0);
      }}
    >
      {project.images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${project.title} screenshot ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        />
      ))}

      {/* Optional: Add a subtle overlay gradient to ensure text readability if needed */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/50 to-transparent z-20 pointer-events-none"></div>
    </div>
  );
};

const Portfolio = () => {
  const { portfolio } = portfolioData;

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 hero-bg"></div>
      <div className="floating-shape w-80 h-80 bg-indigo-500/10 top-20 -right-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeading
          number="04"
          subtitle="Recent work"
          title1="Featured"
          title2="Projects"
          description="A selection of projects that showcase my skills and attention to detail"
        />

        <div className="section-animate grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((project, index) => (
            <div key={index} className="project-card glass-card rounded-2xl overflow-hidden group">
              <ProjectImageCover project={project} />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className={`text-xs px-3 py-1 rounded-full ${getBadgeClasses(project.color)}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
