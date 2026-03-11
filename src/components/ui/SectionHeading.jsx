import React from 'react';

const SectionHeading = ({ number, subtitle, title1, title2, description, center = true }) => {
  return (
    <div className={`section-animate mb-16 ${center ? 'text-center' : ''}`}>
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6`}>
        <span className="text-indigo-400">{number}.</span>
        <span className="text-slate-300">{subtitle}</span>
      </div>
      <h2 className={`text-4xl md:text-5xl font-bold mb-4`}>
        <span className="text-slate-100">{title1} </span>
        {title2 && <span className="gradient-text">{title2}</span>}
      </h2>
      {description && (
        <p className={`text-slate-400 ${center ? 'max-w-2xl mx-auto' : ''} leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
