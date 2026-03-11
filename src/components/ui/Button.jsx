import React from 'react';

const Button = ({ children, variant = "primary", href, className = "", ...props }) => {
  const baseClasses = "px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-all";
  const variants = {
    primary: "btn-primary text-white",
    secondary: "btn-secondary text-slate-300"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
