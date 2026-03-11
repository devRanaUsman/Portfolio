import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Reviews" }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#hero" className="flex items-center gap-2" onClick={closeMenu}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center">
                <span className="font-mono font-bold text-white text-lg">&lt;/&gt;</span>
              </div>
              <span className="font-semibold text-lg">RMUA</span>
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link text-sm text-slate-300 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary px-5 py-2 rounded-full text-sm font-medium text-white">
                Hire Me
              </a>
            </div>

            <button onClick={toggleMenu} className="md:hidden p-2 text-slate-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden px-6 pb-4`}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={closeMenu}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={closeMenu} className="btn-primary px-5 py-2 rounded-full text-sm font-medium text-white text-center">
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
