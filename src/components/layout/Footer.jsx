import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center">
              <span className="font-mono font-bold text-white text-lg">&lt;/&gt;</span>
            </div>
            <span className="font-semibold">RM Usman</span>
          </div>
          <div className="text-slate-400 text-sm text-center">
            © <span>{currentYear}</span> All rights reserved. Crafted with ❤️ and lots of ☕
          </div>
          <div className="flex items-center gap-4">
            <a href="#hero" className="text-slate-400 hover:text-white transition-colors text-sm">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
