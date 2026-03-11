import React from 'react';

const GlassCard = ({ children, className = "", hover = false }) => {
  return (
    <div className={`glass-card rounded-2xl p-8 ${hover ? 'group' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
